---
name: graphql-generated-docs
description: "Regenerate the custom GraphQL breakdown docs under src/graphql/generated-docs/*.mdx for the Travelgate documentation site. Use when the GraphQL schema changed (new/renamed/removed types, fields, enums, mutations or queries) and the embedded <details> field trees in the Inventory / Hotel-X API pages need updating, or when adding a new node to a page. Orchestrates the existing scripts (fetchSchema.js downloads + filters the schema, updateDocs.js maps nodes to .mdx via fileNodeMap.js and injects the breakdowns), then validates the output and fixes REQUIRED_TYPES / fileNodeMap / MDX as needed. Requires TRAVELGATE_BEARER (the bearer token of the person updating the docs)."
argument-hint: "which node/type/page changed, or 'full regenerate'"
---

# GraphQL Generated Docs (breakdown blocks)

Regenerate the collapsible `<details>` field-tree blocks embedded in the API `.mdx` pages from the
live GraphQL schema, by orchestrating the two existing scripts and validating the result.

## System Overview (pipeline)

```
TRAVELGATE_BEARER
      │
      ▼
src/graphql/scripts/fetchSchema.js   ──►  src/graphql/schema-json/inventory-schema.json
  (POST https://api.travelgate.com, introspection, filtered by REQUIRED_TYPES set)
      │
      ▼
src/graphql/scripts/updateDocs.js
  reads the JSON + src/graphql/node-map/fileNodeMap.js
      ├─►  writes src/graphql/generated-docs/<NodeName>.mdx        (one file per node)
      └─►  edits each mapped docs/apis/**/*.mdx:
             injects `import <Node> from "...generated-docs/<Node>.mdx";`
             inserts `## Query Inputs` / `## Mutation Inputs` / `## Returned Fields`
             immediately BEFORE the page's `## Examples` section
```

Categorization in `updateDocs.js`: a node whose name contains `Create`/`Update`/`Delete`/`Load`
is an `INPUT_OBJECT` → **Mutation Inputs**; other `INPUT_OBJECT` → **Query Inputs**; everything
else (OBJECT/ENUM responses) → **Returned Fields**.

> This is the custom breakdown system only. The full **GraphQL API Reference** under `api/` is a
> separate system (`npm run generate-schema` + `npx docusaurus graphql-to-doc`) — do not confuse them.

## When to Use
- The schema changed: new/renamed/removed types, fields, enums, or mutations/queries.
- A page needs a node's breakdown added/refreshed.
- The embedded `<details>` trees are stale vs the live API.

## Prerequisites
- `TRAVELGATE_BEARER` must be set in the environment (ask the user for their bearer token if
  missing; do not hardcode it). The scripts stop and ask for it if it is absent — there is no
  dummy fallback, so an unset bearer will not silently fetch an empty schema.
- Dependencies installed (`npm install`) — `fetchSchema.js` uses `node-fetch`.

## Procedure

1. **Scope the change.** Identify which node(s) and which page(s) are affected. Map pages via
   `src/graphql/node-map/fileNodeMap.js` (keys are paths relative to `docs/apis`; values are the
   node names to embed).

2. **Ensure the schema covers the node(s).** In `src/graphql/scripts/fetchSchema.js`, the
   `REQUIRED_TYPES` set controls what is extracted (subtypes/enums are pulled recursively). If a new
   node is needed, add its name here. **Do not remove existing entries** unless the type was removed
   from the API.

3. **Ensure the mapping is correct.** In `fileNodeMap.js`, confirm/add an entry
   `"<path-relative-to-docs/apis>.mdx": ["<InputNode>", "<ResponseNode>"]`. The target `.mdx` **must
   exist** and **must contain a `## Examples` section** (otherwise blocks append at the end). Add the
   entry to BOTH the for-sellers and for-buyers trees when the page is mirrored.

4. **Fetch the schema:**
   ```bash
   node src/graphql/scripts/fetchSchema.js
   ```
   Confirm `src/graphql/schema-json/inventory-schema.json` updated and contains the expected type(s).

5. **Generate the docs:**
   ```bash
   node src/graphql/scripts/updateDocs.js
   ```
   Watch the console for `⚠️ File not found` (bad mapping path) or `⚠️ No nodes found in schema`
   (missing from `REQUIRED_TYPES` or wrong node name).

6. **Validate the output.**
   - `git status` / `git --no-pager diff` — review changed `generated-docs/*.mdx` and mapped pages.
   - Confirm each mapped page still has exactly one `## Examples` and the injected imports resolve.
   - Enums render `<strong>Possible values:</strong>` with `<li><code>...</code></li>` items.
   - Run `npx docusaurus-mdx-checker`. For a full check, `npm run build`.

7. **Fix issues at the source, then re-run** (do not hand-patch generated files, they get overwritten):
   - Missing/incorrect fields → fix `REQUIRED_TYPES` and/or verify the live schema, re-run step 4-5.
   - Wrong placement → ensure the page's `## Examples` section exists.
   - Wrong page/node → fix `fileNodeMap.js`.
   - Only edit a file under `generated-docs/` directly for a one-off manual node not produced by the
     script (e.g. the special `token.mdx`).

8. **Deliver to the user** (follow the git/ticket workflow in `.github/copilot-instructions.md`):
   branch from `main`, leave uncommitted, and provide a Conventional Commit message
   (`docs(graphql): regenerate <scope> breakdown docs`) plus, if ticket-driven, a Spanish reply.

## Gotchas
- `fetchSchema.js` swallows fetch errors and logs them — if the JSON looks empty/unchanged, check the
  bearer token (`TRAVELGATE_BEARER`) and that the endpoint returned data before running `updateDocs.js`.
- `updateDocs.js` runs on `main()` immediately (no `require.main` guard) — running it always rewrites
  every mapped file. Review the full diff, not just the node you intended to change.
- Some response type names are irregular in the map (e.g. `RatesSetUpRs`, `RoomsSetUpRs`,
  `HotelsSetupRs`) — match the exact schema type name, not a guessed casing.
- Node names must match the schema exactly; a typo yields `⚠️ No nodes found`.

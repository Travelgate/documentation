---
name: docs-maintenance
description: "Apply ticket-driven documentation changes to the Travelgate public docs (Docusaurus MDX/MD). Use for Jira tickets (PUSH-XXXX) requesting errata fixes, typo/naming corrections, broken-link fixes, new call-outs/notes, field tables, small improvements and general maintenance across docs/ and kb/. Handles locating the right files (including mirrored for-sellers/for-buyers trees), applying the change following repo conventions, validating MDX, creating the git branch, and producing a Conventional Commit message + a Spanish reply for the ticket reporter."
argument-hint: "paste the Jira ticket (XML/text) or describe the change"
---

# Docs Maintenance (ticket-driven)

Apply small documentation changes and maintenance to the Travelgate public documentation,
always following the same criteria so any department's docs stay consistent.

## When to Use
- A Jira ticket (usually `PUSH-XXXX`) asks for a documentation errata/typo/naming fix,
  a broken/incorrect link fix, a new note/call-out, a field/parameter table, or a small improvement.
- General maintenance: aligning prose with the live schema, fixing link conventions, tidying structure.

Do **not** use this skill to regenerate the GraphQL `<details>` breakdown blocks from the schema —
use the `graphql-generated-docs` skill for that.

## Inputs
- The ticket content (Jira XML export or a plain description). Extract: the `PUSH-XXXX` key, the
  summary, the exact request, and any linked docs URLs (map the URL path to a file under `docs/` or `kb/`).

## Procedure

1. **Understand the request.** Parse the ticket. Identify the concrete change and the acceptance
   criteria. If the request is ambiguous or could affect behavior/meaning, ask the user before editing.

2. **Locate the target files.**
   - Map any `docs.travelgate.com/docs/...` URL to the matching `docs/**/*.mdx` (or `/kb/...` → `kb/**/*.md`).
   - Use `grep`/`glob` to find every occurrence — **do not assume a single file**.
   - **Mirrored trees:** set-up / inventory changes usually exist in BOTH
     `docs/apis/for-sellers/inventory-push-graphql-api/...` and
     `docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/...`. Fix both.
   - Naming/errata may also appear in `kb/` FAQs — grep there too.

3. **Verify the source of truth** (for naming/technical fixes).
   - Operation/mutation/type names come from the live schema / GraphQL API Reference, not the prose.
   - Cross-check against `src/graphql/**/*.mutation.js` query strings and the generated `api/` reference.
   - Note gotchas: some names are irregular (e.g. rates uses `createRatesSetup` and `deleteRatesSetup`
     but singular `updateRateSetup`); casing is `Setup` (lowercase u), not `SetUp`.

4. **Apply the change following repo conventions** (see `.github/copilot-instructions.md`):
   - Internal links: use relative source-file links WITH `.md`/`.mdx` for nearby pages, or absolute
     site routes (`/docs/...`, `/kb/...`) WITHOUT extension for cross-section links. Do not use
     extensionless relative links.
   - Keep the `## Examples` section intact on generated GraphQL pages.
   - Never touch JS import identifier lines (`...SetUpMutation`) when fixing prose.
   - Use admonitions (`:::info`, `:::warning`, `:::tip`) for call-outs.
   - Prose stays in **English**.
   - For repetitive bulk replacements across many files, prefer the `edit` tool per file. If scripting
     in PowerShell, remember `-ne`/`-eq` are **case-insensitive** — use `-cne`/`-ceq` for casing-only
     changes, and build backtick characters via `[char]0x60` (literal backticks get eaten as escapes).

5. **Validate.**
   - Run `npx docusaurus-mdx-checker` to confirm MDX structure.
   - `grep` again to confirm zero remaining wrong tokens / all intended files changed.
   - For significant link/structure changes, run `npm run build`.

6. **Create the branch (no commit).**
   - `git checkout main; git checkout -b docs/push-XXXX-short-slug`
   - Leave changes **uncommitted**; the user commits manually.

7. **Review links before the commit.** If the change added/edited any cross-references, run the
   `docs-links` skill over the changed files to verify link style, targets and anchors (the build
   throws on broken internal links). Fix anything it flags.

8. **Deliver to the user:**
   - **Summary** of what changed and where (list files + the mirrored-tree note if relevant).
   - **Conventional Commit message** (see template).
   - **Spanish reply** for the ticket reporter (see template).

## Commit Message Template

```
docs(<scope>): <concise summary in English>

<optional body: what changed and why; mention both API trees / KB if applicable>

Refs: PUSH-XXXX

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```

Use `fix(docs): ...` when correcting an error (broken link, wrong name); `docs(...): ...` for
additions/improvements. Keep the scope short (e.g. `inventory`, `channel-x`, `hotel-x`, `kb`).

## Spanish Ticket Reply Template

```
¡Hola <nombre>!

<Qué se ha corregido/añadido y por qué, en 1-3 frases.>

<Si aplica: dónde — for-sellers y for-buyers, KB, etc. Lista de nombres finales si es un fix de naming.>

En cuanto se despliegue quedará reflejado en la documentación. ¡Gracias por el aviso!
```

## Notes
- Do not commit or push unless the user explicitly asks — default is branch + uncommitted changes.
- If the ticket also requires regenerating GraphQL breakdowns, hand that part to `graphql-generated-docs`.

---
name: docs-links
description: "Review and create internal links in the Travelgate public docs (Docusaurus MDX/MD) so they follow repo conventions and never break the build. Use before preparing a commit, when a ticket adds/edits cross-references, or to audit links in changed files. Checks relative vs absolute style, verifies every internal target file and anchor exists, flags hardcoded https://docs.travelgate.com URLs, and fixes extension/anchor mistakes. Because docusaurus.config.js sets onBrokenLinks: throw, a broken internal link fails npm run build."
argument-hint: "scope: 'changed files', a path, or 'whole site'"
---

# Docs Links (review & create)

Review, fix and create internal documentation links following the same criteria across the site,
and confirm nothing will break the Docusaurus build. Run this as a pass **before** preparing the
commit message.

## When to Use
- Right before generating a commit message, to sanity-check links in the changed files.
- A ticket adds or edits cross-references between pages.
- Auditing/maintaining links in a page, a tree, or the whole site.

## Link Conventions (enforce exactly)

| Target | Correct form | Example |
|--------|--------------|---------|
| Doc → doc, same/nearby tree | **relative path WITH extension** | `[text](./availability/rates/load-rate-availability.mdx)` |
| Doc → doc, far/absolute | **`/docs/...` WITH extension** | `[text](/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx)` |
| Any → KB article | **`/kb/...` WITHOUT extension** | `[text](/kb/welcome-to-travelgate/support-resources/aina-smart-ai)` |
| Anchor within/other page | append `#lower-kebab-case` | `.../security-overview#fixed-ip-list` |
| External | full `https://` URL | `[text](https://example.com)` |

Rules of thumb:
- **Relative and `/docs/` internal links keep the `.mdx`/`.md` extension.** Extensionless relative
  links resolve wrong. (Exception: KB `/kb/...` links are intentionally extensionless.)
- **Avoid hardcoded `https://docs.travelgate.com/...`** for internal pages — use a site-relative
  `/docs/...` or a relative `./...mdx` link instead (survives previews, feeds Aina correctly).
- Anchors must match a real heading slug on the target page (Docusaurus lowercases, replaces spaces
  with `-`, strips punctuation). Verify the heading exists.
- `docusaurus.config.js`: `onBrokenLinks: "throw"` (build fails on broken internal links) and
  `onBrokenMarkdownLinks: "warn"`. So the build is the authoritative check.

## Procedure

1. **Determine scope.** Default to the files changed on the current branch
   (`git --no-pager diff --name-only main...HEAD` plus unstaged), or a path/whole-site if asked.

2. **Extract links.** In scope files, find markdown links `](...)` and any JSX `href="..."`/`to="..."`.
   Classify each as relative-internal, absolute-internal (`/docs`, `/kb`), external, or anchor-only.

3. **Check conventions:**
   - Relative or `/docs/` internal link missing `.mdx`/`.md` → flag/fix (add extension).
   - `/kb/...` link WITH extension → flag/fix (remove extension).
   - Hardcoded `https://docs.travelgate.com/...` → flag (convert to `/docs/...` keeping the extension,
     or a relative `./...mdx` if in the same tree).

4. **Verify targets exist** (this prevents build failures):
   - Relative link → resolve against the file's directory; the target file must exist.
   - `/docs/<path>.mdx` → maps to `docs/<path>.mdx` (strip leading `/docs/`).
   - `/kb/<path>` → maps to `kb/<path>.md` or `.mdx` (extensionless in the link).
   - Use the `glob`/`view` tools to confirm each resolved path exists.

5. **Verify anchors.** For links with `#anchor`, open the target page and confirm a heading produces
   that slug. If the anchor is stale, fix it to the current heading slug.

6. **Create links (when asked).** Build the link in the correct form for the relationship (table
   above), verify the target/anchor exists first, and insert it with meaningful link text.

7. **Validate.**
   - `npx docusaurus-mdx-checker` for MDX structure.
   - `npm run build` is the definitive broken-internal-link check (fails on any broken link).
     Run it when link changes are non-trivial or when unsure.

8. **Report.** List: links fixed (old → new), links created, any that still need a human decision
   (e.g. ambiguous target, missing page). Then hand control back so the `docs-maintenance` skill /
   normal flow can prepare the commit message and Spanish reply.

## Mirrored Trees Reminder
Set-up / inventory pages are mirrored in `for-sellers/inventory-push-graphql-api/...` and
`for-buyers/inventory-buyers/inventory-set-up-graphql-api/...`. When adding a cross-reference to one,
check whether the mirror needs the same link.

## Notes
- This skill does not commit. Leave changes uncommitted; the user commits manually.
- For bulk extension fixes across many files, prefer the `edit` tool per file; if scripting in
  PowerShell, `-ne`/`-eq` are case-insensitive (use `-cne`/`-ceq`) and build backticks via `[char]0x60`.

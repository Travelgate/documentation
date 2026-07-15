# Travelgate Docs Agent

> 🇪🇸 Versión en español: [README.es.md](./README.es.md)

Agent customization for maintaining the **public Travelgate documentation**
(https://docs.travelgate.com — Docusaurus 3, MDX/Markdown) with a consistent criteria across
every department.

Everything lives in `.github/` and is loaded automatically by Copilot / VS Code when you work in
this repository.

## What's in here

```
.github/
├── copilot-instructions.md        # Always-on invariants (repo map + rules that hold for every change)
├── README.md                      # This file
├── README.es.md                   # Spanish version
├── agents/
│   └── docs-maintainer.agent.md   # The "Docs Maintainer" expert agent (pick it in the agent selector)
└── skills/
    ├── docs-maintenance/          # Ticket-driven errata, fixes, improvements, maintenance
    ├── docs-links/                # Review/create internal links, verify targets & anchors
    └── graphql-generated-docs/    # Regenerate the src/graphql/generated-docs breakdown blocks
```

- **`agents/docs-maintainer.agent.md`** is the expert **persona** you select from the agent picker.
  It defines the *behavior* — role, skill routing, git/ticket workflow and output format — and
  orchestrates the skills below.
- **`copilot-instructions.md`** is always active and holds only the **invariants**: facts and rules
  that must hold for every change (repo map, the two GraphQL systems, link/MDX conventions, English
  prose / Spanish replies). It carries no workflow — that belongs to the agent/skills.
- **Skills** are loaded **on demand** — either automatically when your request matches their
  `description`, or manually by typing `/` in chat and picking one.

## How it works

Copilot reads `description` fields first (cheap), and only loads a skill's full instructions when it
becomes relevant. So the agent:

1. Always applies `copilot-instructions.md`.
2. Detects the task type from your message (a ticket, a link review, a schema change…) and loads the
   matching skill.
3. Follows that skill's step-by-step procedure, validates, and hands back changes **uncommitted**
   plus a suggested commit message (and, for tickets, a Spanish reply for the reporter).

## The agent

`agents/docs-maintainer.agent.md` defines the **Docs Maintainer** persona — the expert for this
repo. Select it in the chat **agent picker** to work in that role. It applies the always-on
instructions, decides which skill fits the task, and enforces the constraints (no commits, English
prose / Spanish ticket replies, don't touch the `api/` reference or JS import identifiers, respect
link conventions and mirrored trees). You can still use the skills directly without it, but the
agent is the recommended entry point for any documentation work.

## The skills

### `docs-maintenance` — ticket-driven changes
For Jira tickets (`PUSH-XXXX`) requesting errata/typo/naming fixes, broken-link fixes, new
call-outs, field tables, or small improvements, and for general maintenance.

Procedure (summary): parse the ticket → locate **all** target files (including the mirrored
for-sellers / for-buyers set-up trees and the KB) → verify names against the live schema →
apply the change following conventions → review links (`docs-links`) → validate MDX/build →
branch from `main` (uncommitted) → deliver commit message + Spanish reply.

**Trigger examples:** paste a Jira ticket, or "corrige esta errata en la doc de…", "arregla el
enlace roto en…", "añade una nota sobre… en la página…".

### `docs-links` — link review & creation
Run before preparing a commit, or whenever cross-references change. Enforces the link conventions,
verifies that every internal target file **and** anchor exists, and flags hardcoded
`https://docs.travelgate.com` URLs. Because `docusaurus.config.js` uses `onBrokenLinks: "throw"`,
a broken internal link fails the build — this skill catches that first.

**Trigger examples:** "revisa los enlaces de los ficheros que he cambiado", "crea un enlace a la
página de… desde…".

### `graphql-generated-docs` — GraphQL breakdown docs
Regenerates the collapsible `<details>` field trees under `src/graphql/generated-docs/*.mdx` when
the schema changes. Orchestrates the existing scripts:

```
fetchSchema.js  →  schema-json/inventory-schema.json  →  updateDocs.js (+ node-map/fileNodeMap.js)  →  generated-docs/*.mdx + injected into docs/apis pages
```

Requires the `TRAVELGATE_BEARER` environment variable (the bearer token of the person updating
the docs; the scripts stop and ask for it if it is missing).

**Trigger examples:** "regenera la breakdown de … tras el cambio de schema", "añade el nodo … a la
página …".

> Note: this is **not** the full **GraphQL API Reference** under `api/` (that one is generated with
> `npm run generate-schema` + `npx docusaurus graphql-to-doc`). The two systems are kept separate.

## Usage

1. Open this repository in VS Code with Copilot (or the Copilot CLI).
2. Select the **Docs Maintainer** agent in the agent picker (recommended), or just describe your task
   — the agent/skills load automatically. To force a skill, type `/` and select it
   (e.g. `/docs-maintenance`).
3. For ticket work, paste the Jira ticket (XML export or plain text). The agent extracts the
   `PUSH-XXXX` key, summary and linked docs URLs.
4. Review the changes (left **uncommitted** on a `docs/push-XXXX-...` branch), then commit yourself
   using the suggested message.

### Conventions the agent follows (quick reference)

- Internal doc links: **relative with `.mdx`** (or `/docs/...` with extension). KB links:
  **`/kb/...` without extension**, anchors `#lower-kebab-case`.
- Keep the `## Examples` section on generated GraphQL pages.
- Don't edit JS import identifier lines (`...SetUpMutation`) when fixing prose.
- Docs prose in **English**; Jira ticket replies in **Spanish**.
- Validate with `npx docusaurus-mdx-checker` and, when relevant, `npm run build`.

### Git / ticket workflow

- Branch from a clean `main`: `docs/push-XXXX-short-slug`.
- Changes are left **uncommitted** — you commit manually.
- Suggested commit format: `docs(scope): ...` / `fix(docs): ...`, with `Refs: PUSH-XXXX` and the
  `Co-authored-by: Copilot` trailer.

## Extending

To add a new skill, create `.github/skills/<name>/SKILL.md` with YAML frontmatter whose `name`
**matches the folder**, and a keyword-rich `description` (this is how the agent discovers it — no
extra registration needed). Point the agent at it from `docs-maintainer.agent.md`'s skill routing if
it should be part of the standard workflow. See the existing skills as templates.

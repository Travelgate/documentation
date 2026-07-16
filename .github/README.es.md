# Agente de Documentación de Travelgate

> 🇬🇧 English version: [README.md](./README.md)

Personalización del agente para mantener la **documentación pública de Travelgate**
(https://docs.travelgate.com — Docusaurus 3, MDX/Markdown) con un criterio consistente en todos
los departamentos.

Todo vive en `.github/` y Copilot / VS Code lo carga automáticamente cuando trabajas en este
repositorio.

## Qué hay aquí

```
.github/
├── copilot-instructions.md        # Invariantes siempre activas (mapa del repo + reglas para todo cambio)
├── README.md                      # Versión en inglés
├── README.es.md                   # Este fichero
├── agents/
│   └── docs-maintainer.agent.md   # El agente experto "Docs Maintainer" (selecciónalo en el selector de agentes)
└── skills/
    ├── docs-maintenance/          # Cambios de tickets: erratas, correcciones, mejoras, mantenimiento
    ├── docs-links/                # Revisar/crear enlaces internos, verificar destinos y anclas
    └── graphql-generated-docs/    # Regenerar los bloques breakdown de src/graphql/generated-docs
```

- **`agents/docs-maintainer.agent.md`** es la **persona** experta que seleccionas desde el selector
  de agentes. Define el *comportamiento* — rol, enrutado de skills, flujo git/ticket y formato de
  salida — y orquesta las skills de abajo.
- **`copilot-instructions.md`** está siempre activo y contiene solo las **invariantes**: hechos y
  reglas que deben cumplirse en todo cambio (mapa del repo, los dos sistemas GraphQL, convenciones de
  enlaces/MDX, prosa en inglés / respuestas en español). No lleva flujo de trabajo — eso es del
  agente/skills.
- Las **skills** se cargan **bajo demanda** — automáticamente cuando tu petición encaja con su
  `description`, o manualmente escribiendo `/` en el chat y eligiéndola.

## Cómo funciona

Copilot lee primero los campos `description` (barato) y solo carga las instrucciones completas de una
skill cuando pasa a ser relevante. Así el agente:

1. Aplica siempre `copilot-instructions.md`.
2. Detecta el tipo de tarea a partir de tu mensaje (un ticket, una revisión de enlaces, un cambio de
   schema…) y carga la skill correspondiente.
3. Sigue el procedimiento paso a paso de esa skill, valida y devuelve los cambios **sin commitear**
   más un mensaje de commit sugerido (y, en tickets, una respuesta en español para el reporter).

## El agente

`agents/docs-maintainer.agent.md` define la persona **Docs Maintainer** — el experto de este repo.
Selecciónalo en el **selector de agentes** del chat para trabajar en ese rol. Aplica las
instrucciones siempre activas, decide qué skill encaja con la tarea y hace cumplir las restricciones
(no commitear, prosa en inglés / respuestas de ticket en español, no tocar la referencia de `api/`
ni los identificadores de import JS, respetar las convenciones de enlaces y los árboles espejo).
Puedes usar las skills directamente sin él, pero el agente es el punto de entrada recomendado para
cualquier trabajo de documentación.

## Las skills

### `docs-maintenance` — cambios pedidos por ticket
Para tickets de Jira (`PUSH-XXXX`) que piden correcciones de erratas/typos/naming, arreglo de enlaces
rotos, nuevos call-outs, tablas de campos o pequeñas mejoras, y para mantenimiento general.

Procedimiento (resumen): interpretar el ticket → localizar **todos** los ficheros afectados
(incluidos los árboles espejo for-sellers / for-buyers de set-up y el KB) → verificar nombres contra
el schema real → aplicar el cambio siguiendo las convenciones → revisar enlaces (`docs-links`) →
validar MDX/build → crear rama desde `main` (sin commitear) → entregar mensaje de commit + respuesta
en español.

**Ejemplos de disparo:** pegar un ticket de Jira, o "corrige esta errata en la doc de…", "arregla el
enlace roto en…", "añade una nota sobre… en la página…".

### `docs-links` — revisión y creación de enlaces
Se ejecuta antes de preparar un commit, o cuando cambian las referencias cruzadas. Aplica las
convenciones de enlaces, verifica que cada fichero destino interno **y** su ancla existen, y detecta
URLs hardcodeadas `https://docs.travelgate.com`. Como `docusaurus.config.js` usa
`onBrokenLinks: "throw"`, un enlace interno roto rompe el build — esta skill lo detecta antes.

**Ejemplos de disparo:** "revisa los enlaces de los ficheros que he cambiado", "crea un enlace a la
página de… desde…".

### `graphql-generated-docs` — docs breakdown de GraphQL
Regenera los árboles de campos plegables `<details>` bajo `src/graphql/generated-docs/*.mdx` cuando
cambia el schema. Orquesta los scripts existentes:

```
fetchSchema.js  →  schema-json/inventory-schema.json  →  updateDocs.js (+ node-map/fileNodeMap.js)  →  generated-docs/*.mdx + inyectado en las páginas de docs/apis
```

Requiere la variable de entorno `TRAVELGATE_BEARER` para ejecuciones manuales (el bearer de quien
actualiza la documentación; los scripts fallan con un error indicando cómo establecerlo si falta). En CI los scripts
recurren automáticamente al secret `TRAVELGATE_API_KEY` (o a la clave pública de introspección).

**Ejemplos de disparo:** "regenera la breakdown de … tras el cambio de schema", "añade el nodo … a la
página …".

> Nota: esto **no** es la **GraphQL API Reference** completa bajo `api/` (esa se genera con
> `npm run generate-schema` + `npx docusaurus graphql-to-doc`). Los dos sistemas se mantienen separados.

## Uso

1. Abre este repositorio en VS Code con Copilot (o el Copilot CLI).
2. Selecciona el agente **Docs Maintainer** en el selector de agentes (recomendado), o simplemente
   describe tu tarea — el agente/skills se cargan automáticamente. Para forzar una skill, escribe `/`
   y selecciónala (p. ej. `/docs-maintenance`).
3. Para trabajo de tickets, pega el ticket de Jira (export XML o texto plano). El agente extrae la
   clave `PUSH-XXXX`, el summary y las URLs de docs enlazadas.
4. Revisa los cambios (quedan **sin commitear** en una rama `docs/push-XXXX-...`) y commitea tú mismo
   usando el mensaje sugerido.

### Convenciones que sigue el agente (referencia rápida)

- Enlaces internos entre docs: **relativos con `.mdx`** (o `/docs/...` con extensión). Enlaces KB:
  **`/kb/...` sin extensión**, anclas `#lower-kebab-case`.
- Mantener la sección `## Examples` en las páginas GraphQL generadas.
- No editar las líneas de import de identificadores JS (`...SetUpMutation`) al corregir prosa.
- Prosa de la documentación en **inglés**; respuestas a tickets de Jira en **español**.
- Validar con `npx docusaurus-mdx-checker` y, cuando aplique, `npm run build`.

### Flujo git / ticket

- Rama desde un `main` limpio: `docs/push-XXXX-slug-corto`.
- Los cambios se dejan **sin commitear** — commiteas tú manualmente.
- Formato de commit sugerido: `docs(scope): ...` / `fix(docs): ...`, con `Refs: PUSH-XXXX` y el
  trailer `Co-authored-by: Copilot`.

## Extender

Para añadir una skill nueva, crea `.github/skills/<nombre>/SKILL.md` con frontmatter YAML cuyo `name`
**coincida con la carpeta**, y una `description` rica en palabras clave (así es como el agente la
descubre, sin registro extra). Enlázala desde el enrutado de skills de `docs-maintainer.agent.md` si
debe formar parte del flujo estándar. Usa las skills existentes como plantilla.

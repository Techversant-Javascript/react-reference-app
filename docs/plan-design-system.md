# Plan: React TypeScript Design System

## Summary

A React component library and design token system published as a **single npm package** (`@techv/design-system`), managed in a **pnpm monorepo** with **Turborepo**.

`@techv/design-system` bundles both `@techv/tokens` (CSS vars + TS token values + utility classes) and `@techv/ui` (React components). Consumers install one package and get components, design tokens, and utility CSS.

Phase 1 (scaffold + Button component family) is complete.
Phase 2 (monorepo migration) is complete.
Phase 3 (developer tooling + documentation) is complete.
Phase 4 (single-package publish + utility CSS system) is complete.

---

## Goals

- Single publish-ready npm package `@techv/design-system` (ESM + CJS dual output, TypeScript declarations)
- Rollup bundler, styled-components v6 styling, strict TypeScript
- Tokens package (`@techv/tokens`) decoupled from components — no React dependency
- Utility CSS class system (`utility.css`) — className-based styling without inline styles
- Storybook 8 for interactive docs, dark mode toggle
- Jest 29 + React Testing Library for unit tests
- Button family: `solid`/`outline`/`ghost`/`soft`/`link` variants, `xs`–`xl` sizes, loading state, `IconButton`
- Automated standards enforcement via validation script
- GitHub Actions CI + publish workflow (changesets auto-publish on push to main)

---

## Technical Approach

### Repository structure

pnpm workspaces + Turborepo monorepo. Four workspace members:

```
packages/tokens/          → @techv/tokens        (no React dep — internal)
packages/ui/              → @techv/ui             (depends on workspace:@techv/tokens — internal)
packages/design-system/   → @techv/design-system  (published umbrella — bundles both)
apps/storybook/           → @techv/storybook      (private)
```

Build order is enforced by `turbo.json` via `"dependsOn": ["^build"]`. Only `@techv/design-system` is published to npm.

### Bundling

- Rollup with `preserveModules: true` → `dist/esm/` and `dist/cjs/` per package
- TypeScript declarations emitted separately via `tsc -p tsconfig.build.json` → `dist/types/`
- `styled-components`, `react`, `react-dom`, `react/jsx-runtime` externalized (peer deps) in `@techv/design-system`
- `@techv/tokens` and `@techv/ui` are **devDependencies** in `@techv/design-system` — bundled inline, not externalized
- `global.css` and `utility.css` copied from `src/` → `dist/` as part of `@techv/tokens` build script
- `@techv/design-system` build copies `global.css` → `dist/styles.css` and `utility.css` → `dist/utility.css`

### Styling

- **styled-components v6** — no CSS Modules
- Transient props (`$variant`, `$color`, `$size`, `$isLoading`) prevent DOM prop leakage
- `colorMap` + `sizeMap` TypeScript lookup tables in `Button.styles.ts`
- `variantStyles(color, variant)` returns a `css\`\`` block per variant
- All color values in `*.styles.ts` use CSS custom properties (e.g. `var(--color-brand-500)`) — **no hardcoded hex values**

### Token system

Tokens are defined in `@techv/tokens` and shipped as:
1. **CSS custom properties** — `packages/tokens/src/global.css` → `:root { --color-*; --{color}-{weight}; --spacing-*; --fs-*; --fw-*; --br-*; --sh-*; … }`
2. **TypeScript constants** — `packages/tokens/src/index.ts` — flat named exports (`bg`, `tx`, `bd`, `fl`, `colors`, `spacing`, `fs`, `fw`, `br`, `bw`, `sh`, `op`, `duration`, `ease`)
3. **Utility CSS classes** — `packages/tokens/src/utility.css` → className-based styling (`bg-{color}-{weight}`, `tx-*`, `bd-*`, `p-*`, `fs-*`, `fw-*`, `br-*`, etc.)

Token categories: full color palette (18 colors × 10 weights), semantic aliases, spacing, border radius, shadows, motion (duration + easing), typography, component tokens.

Dark mode tokens override semantic aliases under `[data-theme="dark"]` and `@media (prefers-color-scheme: dark)`.

### Testing

- Jest 29 with `jsdom` environment, configured in `packages/ui/jest.config.ts`
- `ts-jest` for TypeScript transpilation; `ts-node` required as devDependency for `jest.config.ts`
- `jest-styled-components` v7 for `toHaveStyleRule` assertions
- `@testing-library/react` + `@testing-library/user-event` for component tests
- `moduleNameMapper` resolves `@techv/tokens` → tokens source TS directly (no pre-build needed for tests)
- `userEvent.setup({ pointerEventsCheck: 0 })` required for disabled/loading button interaction tests
- `toHaveStyleRule` expects CSS var values (e.g. `var(--color-brand-500)`, `var(--color-white)`)

### Storybook

- Storybook 8 with `@storybook/react-vite` framework, in `apps/storybook/`
- Addons: `addon-essentials`, `addon-a11y`, `addon-interactions`, `addon-themes`
- Dark mode via `withThemeByDataAttribute` from `@storybook/addon-themes`, `data-theme="dark"`
- `@techv/tokens/global.css` imported in `preview.ts`

### Tooling

| Tool | Config file | Purpose |
|---|---|---|
| ESLint 9 | `eslint.config.mjs` | Linting — `typescript-eslint`, `react`, `react-hooks`, `jsx-a11y`, `prettier` plugins |
| Prettier 3 | `prettier.config.mjs` | Code formatting — `pnpm format` (write) / `pnpm format:check` (CI) |
| Changesets | `.changeset/config.json` | Versioning + changelog — `pnpm changeset` → PR → `pnpm release` |
| size-limit | `packages/ui/.size-limit.json` | Bundle size tracking — `pnpm --filter @techv/ui size` |
| validate.mjs | `scripts/validate.mjs` | Standards enforcement — runs before `pnpm storybook` and `pnpm dev` |

---

## Monorepo File Structure

```
react_design_system/
├── .github/workflows/
│   ├── ci.yml             triggers on push/PR → build + test + lint
│   ├── publish.yml        triggers on GitHub Release → publish @techv/design-system
│   └── release.yml        auto-publish via Changesets on push to main
├── apps/
│   └── storybook/
│       ├── .storybook/main.ts + preview.ts
│       ├── stories/Button/Button.stories.tsx
│       ├── package.json   (@techv/storybook, private)
│       └── tsconfig.json
├── packages/
│   ├── tokens/
│   │   ├── src/
│   │   │   ├── index.ts       TS token constants (bg, tx, bd, fl, spacing, fs, fw, …)
│   │   │   ├── global.css     CSS custom properties (:root + dark mode)
│   │   │   └── utility.css    utility CSS classes (bg-*, tx-*, p-*, fs-*, br-*, flex, …)
│   │   ├── package.json   (@techv/tokens — internal, not published)
│   │   ├── rollup.config.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.build.json
│   ├── ui/
│   │   ├── src/
│   │   │   ├── components/Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.types.ts
│   │   │   │   ├── Button.styles.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts       root barrel export
│   │   ├── tests/Button/Button.test.tsx
│   │   ├── package.json   (@techv/ui — internal, not published)
│   │   ├── rollup.config.ts
│   │   ├── jest.config.ts
│   │   ├── jest.setup.ts
│   │   ├── tsconfig.json
│   │   ├── tsconfig.build.json
│   │   └── .size-limit.json
│   └── design-system/
│       ├── package.json   (@techv/design-system — published to npm)
│       ├── rollup.config.ts
│       ├── tsconfig.json
│       ├── tsconfig.build.json
│       └── README.md
├── scripts/
│   └── validate.mjs       standards enforcement script
├── docs/
│   ├── plan-design-system.md    this file
│   └── DEVELOPER_MANUAL.md      contributor workflow + standards
├── README.md              root readme
├── package.json           root (private, turbo scripts)
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json     shared TS compiler options
├── eslint.config.mjs
├── prettier.config.mjs
└── .changeset/config.json
```

---

## Component API — Button (v1.0)

### `<Button>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `solid \| outline \| ghost \| soft \| link` | `solid` | Visual style |
| `color` | `brand \| danger \| success \| warning \| neutral` | `brand` | Color palette |
| `size` | `xs \| sm \| md \| lg \| xl` | `md` | Height + padding |
| `isLoading` | `boolean` | `false` | Shows spinner, disables interaction, sets `aria-busy` |
| `leftIcon` | `React.ReactNode` | — | Icon before label (hidden when loading) |
| `rightIcon` | `React.ReactNode` | — | Icon after label (hidden when loading) |
| `disabled` | `boolean` | — | Native disabled attribute |

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`. Forwarded ref.

### `<IconButton>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `React.ReactNode` | required | Icon to render |
| `aria-label` | `string` | required | Accessibility label |
| `size` | `ButtonSize` | `md` | Size |
| `variant` | `ButtonVariant` | `solid` | Visual style |
| `color` | `ButtonColor` | `brand` | Color palette |
| `isLoading` | `boolean` | `false` | Shows spinner |

Forwarded ref.

---

## Acceptance Criteria

### Phase 1 — Scaffold + Button (complete)
- [x] Button component with all variants, colors, sizes, loading state
- [x] `forwardRef` on both `Button` and `IconButton`
- [x] 28 passing Jest tests (23 Button + 5 IconButton)
- [x] Storybook stories for all variants/colors/sizes

### Phase 2 — Monorepo migration (complete)
- [x] `pnpm install` completes without errors, `pnpm-lock.yaml` created
- [x] `pnpm --filter @techv/tokens build` → `packages/tokens/dist/` created
- [x] `pnpm --filter @techv/ui build` → `packages/ui/dist/` created, `@techv/tokens` not bundled inline
- [x] `pnpm turbo run build` — both packages build in dependency order; cache hits on second run
- [x] `pnpm turbo run test` — all 28 tests pass
- [x] `pnpm --filter @techv/storybook storybook` — starts at `localhost:6006`, dark mode toggle visible
- [x] CSS var refactor in `Button.styles.ts` — `colorMap` uses `var(--color-*)` throughout, no hardcoded hex

### Phase 3 — Developer tooling + documentation (complete)
- [x] ESLint 9 flat config — `pnpm lint` passes
- [x] Prettier 3 — `pnpm format:check` passes
- [x] Changesets configured — `pnpm changeset` initiates release flow
- [x] `scripts/validate.mjs` — exits 0, prints all ✓ for current repo state
- [x] `pnpm validate` wired; `prestorybook` and `predev` pre-hooks set
- [x] `docs/DEVELOPER_MANUAL.md` — covers adding a component, layout tokens, standards
- [x] `README.md` — consumer-facing installation + usage guide

### Phase 4 — Single-package publish + utility CSS (complete)
- [x] `packages/design-system/` created — `@techv/design-system` bundles tokens + ui
- [x] `@techv/tokens` and `@techv/ui` moved to devDependencies (bundled, not externalized)
- [x] Token system redesigned — Tailwind-like naming: `bg`, `tx`, `bd`, `fl`, `spacing`, `fs`, `fw`, `br`, `bw`, `sh`, `op`, `duration`, `ease`
- [x] Full color palette added (18 color families × 10 weights) in both TS and CSS vars
- [x] `utility.css` created — comprehensive className-based styling system
- [x] `./styles.css` and `./utility.css` exposed as sub-path exports
- [x] Changesets auto-publish on push to main via `release.yml`
- [x] `@techv/design-system@0.1.5` published to npm
- [x] README updated with className examples (Badge, Alert, Card, Tag, color demo)

---

## Phase 5 Candidates

- Input, Select, Checkbox, Radio, Switch components
- Typography (Heading, Text, Code)
- Layout (Stack, Grid, Divider)
- Feedback (Badge, Tag, Alert, Toast)
- Chromatic visual regression testing
- Theming system (styled-components `ThemeProvider` integration)

# Developer Manual

## Overview

This repository is a **pnpm monorepo** managed with [Turborepo](https://turbo.build/). It contains three packages — two internal packages and one publishable umbrella package — plus a private Storybook app.

```
react_design_system/
├── packages/
│   ├── tokens/          @techv/tokens — CSS vars + TS token values + utility.css
│   ├── ui/              @techv/ui     — React components (depends on @techv/tokens)
│   └── design-system/   @techv/design-system — published umbrella (bundles tokens + ui)
├── apps/
│   └── storybook/       @techv/storybook (private) — visual dev environment
├── scripts/
│   └── validate.mjs     — standards enforcement script
└── docs/
```

**Dependency chain:**

```
@techv/tokens  (no workspace deps)
       ↑
@techv/ui      (workspace:@techv/tokens)
       ↑
@techv/design-system  (bundles both — devDeps only)
       ↑
apps/storybook   (workspace:@techv/design-system)
```

`@techv/tokens` and `@techv/ui` are **not published to npm directly**. Only `@techv/design-system` is published. Turborepo's `"dependsOn": ["^build"]` ensures packages always build in the correct order.

### Package manager

This project requires **pnpm**. Never use `npm install` or `yarn`.

```bash
pnpm install              # install all workspace deps
pnpm turbo run build      # build all packages
pnpm turbo run test       # run all tests
pnpm validate             # run standards check
```

---

## Workflow 1: Adding a New Component

Follow these steps exactly. The validation script will catch any missing files.

### Step 1 — Create the component package files

All component source files live under `packages/ui/src/components/{Name}/`.

**`packages/ui/src/components/{Name}/{Name}.types.ts`**
Define prop types here. Example:

```typescript
export type MyComponentVariant = 'primary' | 'secondary';

export interface MyComponentProps {
  variant?: MyComponentVariant;
  children: React.ReactNode;
}
```

**`packages/ui/src/components/{Name}/{Name}.styles.ts`**
Styled-components file. Rules:
- Use `$`-prefixed transient props (e.g. `$variant`, `$color`) — never pass HTML-invalid props directly to DOM elements
- All colors **must** use CSS custom properties (e.g. `var(--color-brand-500)`) — never hardcode hex values
- All spacing **should** use spacing tokens (e.g. `var(--space-md)`) where possible

```typescript
import styled, { css } from 'styled-components';
import type { MyComponentVariant } from './MyComponent.types';

export interface StyledMyComponentProps {
  $variant: MyComponentVariant;
}

export const StyledMyComponent = styled.div<StyledMyComponentProps>`
  padding: var(--space-md);
  background: ${({ $variant }) =>
    $variant === 'primary' ? 'var(--color-brand-500)' : 'var(--color-gray-100)'};
`;
```

**`packages/ui/src/components/{Name}/{Name}.tsx`**
The React component. Use named imports only — do **not** write `import React from 'react'`.

```typescript
import { forwardRef } from 'react';
import { StyledMyComponent } from './MyComponent.styles';
import type { MyComponentProps } from './MyComponent.types';

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ variant = 'primary', children }, ref) => (
    <StyledMyComponent ref={ref} $variant={variant}>
      {children}
    </StyledMyComponent>
  ),
);

MyComponent.displayName = 'MyComponent';
```

**`packages/ui/src/components/{Name}/index.ts`**
Re-export everything the consumer needs:

```typescript
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent.types';
```

### Step 2 — Register in the barrel export

Add the component to `packages/ui/src/index.ts`:

```typescript
export * from './components/Button';
export * from './components/MyComponent'; // add this line
```

### Step 3 — Write tests

Create `packages/ui/tests/{Name}/{Name}.test.tsx`. At minimum, test:
- Renders without errors
- Applies variant/prop-driven styles using `toHaveStyleRule` from `jest-styled-components`
- Accessibility attributes where relevant

```typescript
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../../src/components/MyComponent/MyComponent';

describe('MyComponent', () => {
  it('renders children', () => {
    render(<MyComponent>Hello</MyComponent>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies primary background', () => {
    const { container } = render(<MyComponent variant="primary">x</MyComponent>);
    expect(container.firstChild).toHaveStyleRule('background', 'var(--color-brand-500)');
  });
});
```

Run tests with:

```bash
pnpm --filter @techv/ui test
```

### Step 4 — Write a story

Create `apps/storybook/stories/{Name}/{Name}.stories.tsx`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '@techv/ui';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Hello' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Hello' },
};
```

Start Storybook (validation runs first):

```bash
pnpm storybook
```

### Checklist

- [ ] `packages/ui/src/components/{Name}/{Name}.tsx`
- [ ] `packages/ui/src/components/{Name}/{Name}.styles.ts` (no hardcoded hex)
- [ ] `packages/ui/src/components/{Name}/{Name}.types.ts`
- [ ] `packages/ui/src/components/{Name}/index.ts`
- [ ] Component registered in `packages/ui/src/index.ts`
- [ ] `packages/ui/tests/{Name}/{Name}.test.tsx`
- [ ] `apps/storybook/stories/{Name}/{Name}.stories.tsx`
- [ ] `pnpm validate` exits 0

---

## Workflow 2: Layout & Utility Styling with Design Tokens

There are two ways to apply design tokens in layout/utility code:

### Option A — Utility classes (preferred for new code)

Import both CSS files in your app entrypoint:

```typescript
import '@techv/design-system/styles.css';   // CSS vars + dark mode
import '@techv/design-system/utility.css';  // utility classes
```

Then use classNames directly:

```tsx
<div className="bg-indigo-50 tx-indigo-700 px-4 py-2 br-lg fs-sm fw-5">
  Hello
</div>

<div className="flex items-center gap-4 px-4 py-2">
  <span className="fw-6 tx-gray-900">Title</span>
  <span className="tx-gray-500 fs-sm">Subtitle</span>
</div>
```

**Color classes:** `bg-{color}-{weight}`, `tx-{color}-{weight}`, `bd-{color}-{weight}`

Available colors: `red` `orange` `amber` `yellow` `lime` `green` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `pink` `rose` `slate` `gray` `zinc` + `white` / `black`

**Spacing classes:** `p-{n}`, `px-{n}`, `py-{n}`, `pt/pb/pl/pr-{n}`, `m-{n}`, `gap-{n}` (n = 0–32)

**Typography:** `fs-xs` → `fs-5xl`, `fw-3` → `fw-9`, `lh-tight/base/relaxed`, `ta-l/c/r`

**Border/radius:** `bw-1/2/4`, `br-none/sm/md/lg/xl/2xl/full`, `border`, `border-t/b/l/r`

**Layout:** `flex`, `flex-col`, `items-center`, `justify-between`, `hidden`, `w-full`, etc.

### Option B — CSS custom properties (for styled-components)

Use CSS vars directly inside `styled` blocks. Already done in Storybook's `preview.ts`.

```typescript
import styled from 'styled-components';

export const Stack = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap ?? 'var(--spacing-4)'};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--spacing-6);
  padding: var(--spacing-8);
`;
```

### Color tokens (CSS vars)

**Semantic aliases** — use these in components (they auto-adapt in dark mode)

| Token | Purpose |
|---|---|
| `--color-surface` | Card / modal background |
| `--color-bg` | Page background |
| `--color-text-primary` | Primary body text |
| `--color-text-secondary` | Muted / caption text |
| `--color-text-disabled` | Disabled state text |
| `--color-border` | Default border |
| `--color-border-strong` | Emphasized border |
| `--color-focus-ring` | Keyboard focus indicator |

**Full color palette** — `--{color}-{weight}` for all 18 colors × 10 weights

```css
background-color: var(--indigo-500);
color: var(--gray-700);
border-color: var(--red-200);
```

### Spacing tokens (CSS vars)

| Token | Value |
|---|---|
| `--spacing-1` | 4px |
| `--spacing-2` | 8px |
| `--spacing-4` | 16px |
| `--spacing-6` | 24px |
| `--spacing-8` | 32px |

### Typography tokens

| Token | Value |
|---|---|
| `--font-display` | 'Plus Jakarta Sans', sans-serif |
| `--font-text` | 'Inter', sans-serif |
| `--font-mono` | 'JetBrains Mono', monospace |
| `--fs-sm` | 14px |
| `--fs-md` | 16px |
| `--fs-lg` | 18px |
| `--fw-5` | 500 |
| `--fw-6` | 600 |

### Radius tokens

| Token | Value |
|---|---|
| `--br-sm` | 2px |
| `--br-md` | 4px |
| `--br-lg` | 8px |
| `--br-xl` | 12px |
| `--br-2xl` | 16px |
| `--br-full` | 9999px |

---

## Standards

These rules are enforced by `scripts/validate.mjs`. The script runs automatically before `pnpm storybook` and `pnpm dev`.

### File naming

- Component folders use PascalCase: `Button/`, `MyComponent/`
- Required files per component: `{Name}.tsx`, `{Name}.styles.ts`, `{Name}.types.ts`, `index.ts`
- Stories: `apps/storybook/stories/{Name}/{Name}.stories.tsx`
- Tests: `packages/ui/tests/{Name}/{Name}.test.tsx`

### No hardcoded hex colors

All colors in `*.styles.ts` files **must** use CSS custom properties.

```typescript
// ✗ Bad
color: '#4F46E5';
background: '#fff';

// ✓ Good
color: 'var(--color-brand-500)';
background: 'var(--color-white)';
```

The validator scans all `*.styles.ts` files under `packages/ui/src/` and fails if any hex literal (`#xxx` or `#xxxxxxxx`) is found.

### No raw spacing px (guideline)

Prefer spacing tokens over magic numbers. Where a value doesn't map cleanly to a token, a raw `px` value is acceptable but should be treated as technical debt.

### Barrel export rule

Every component directory in `packages/ui/src/components/` must appear in `packages/ui/src/index.ts`. Missing exports cause the validator to fail.

### React import style

Use named imports from React — never the default import:

```typescript
// ✗ Bad
import React from 'react';

// ✓ Good
import { forwardRef, useState } from 'react';
```

The project uses the new JSX transform (`"jsx": "react-jsx"` in tsconfig), so `React` does not need to be in scope for JSX.

---

## Running Validation

**Manually:**

```bash
pnpm validate
```

**Automatically** — the script runs as a pre-hook before:

```bash
pnpm storybook   # prestorybook hook
pnpm dev         # predev hook
```

If the validator finds errors, it prints each failure and exits with code `1`, preventing Storybook/dev from starting.

**Example passing output:**

```
✓ Button — all required files present
✓ Button — story present
✓ Button — test present
✓ Button — exported from src/index.ts
✓ No hardcoded hex colors in styles files
────────────────────────────────────────
✅ All standards pass — ready to run
```

**Example failing output:**

```
✗ Card — missing Card.styles.ts
✗ Card — missing story at apps/storybook/stories/Card/Card.stories.tsx
✗ Button.styles.ts — hardcoded hex on line 94: #fff
────────────────────────────────────────
❌ 3 standard(s) failed. Fix the above before running.
```

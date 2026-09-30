# @techv/design-system

A React component library and design token system. Single package — install once and get both UI components and design tokens.

## Requirements

| Peer dependency | Version |
|---|---|
| react | ^17.0.0 \| ^18.0.0 \| ^19.0.0 |
| react-dom | ^17.0.0 \| ^18.0.0 \| ^19.0.0 |
| styled-components | ^6.1.0 |

## Installation

```bash
npm install @techv/design-system styled-components
```
```bash
yarn add @techv/design-system styled-components
```
```bash
pnpm add @techv/design-system styled-components
```

## Setup

Import the global CSS in your app entry point. This loads the CSS custom properties (design tokens) and dark mode support.

```tsx
import '@techv/design-system/styles.css';
```

To use utility classes (className-based styling), also import:

```tsx
import '@techv/design-system/utility.css';
```

---

## Components

### Button

```tsx
import { Button } from '@techv/design-system';

export default function App() {
  return <Button>Click me</Button>;
}
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `solid` \| `outline` \| `ghost` \| `soft` \| `link` | `solid` | Visual style |
| `color` | `brand` \| `danger` \| `success` \| `warning` \| `neutral` | `brand` | Color scheme |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Button size |
| `isLoading` | `boolean` | `false` | Shows a spinner and disables the button |
| `leftIcon` | `ReactNode` | — | Icon rendered before the label |
| `rightIcon` | `ReactNode` | — | Icon rendered after the label |
| `disabled` | `boolean` | `false` | Disables the button |

Accepts all standard HTML `<button>` attributes.

#### Variants

```tsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
<Button variant="link">Link</Button>
```

#### Colors

```tsx
<Button color="brand">Brand</Button>
<Button color="danger">Danger</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="neutral">Neutral</Button>
```

#### Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

#### With icons

```tsx
<Button leftIcon={<SearchIcon />}>Search</Button>
<Button rightIcon={<ArrowRightIcon />}>Next</Button>
```

#### Loading state

```tsx
<Button isLoading>Saving...</Button>
```

---

### IconButton

A square button that holds a single icon. Requires `aria-label` for accessibility.

```tsx
import { IconButton } from '@techv/design-system';

<IconButton icon={<SearchIcon />} aria-label="Search" />
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | **required** | The icon to display |
| `aria-label` | `string` | **required** | Accessible label |
| `variant` | `solid` \| `outline` \| `ghost` \| `soft` \| `link` | `solid` | Visual style |
| `color` | `brand` \| `danger` \| `success` \| `warning` \| `neutral` | `brand` | Color scheme |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Button size |
| `isLoading` | `boolean` | `false` | Shows a spinner |
| `disabled` | `boolean` | `false` | Disables the button |

---

## Utility Classes

Import `@techv/design-system/utility.css` to style elements with classNames — no inline styles needed.

### Background colors

```tsx
<div>
  {/* Solid colors */}
  <div className="bg-indigo-500 p-4">Indigo 500</div>
  <div className="bg-red-500 p-4">Red 500</div>
  <div className="bg-green-500 p-4">Green 500</div>

  {/* Light tints — cards, badges, alerts */}
  <div className="bg-indigo-50 tx-indigo-700 p-4 br-lg">Indigo tint</div>
  <div className="bg-green-50 tx-green-700 p-4 br-lg">Success tint</div>
  <div className="bg-red-50 tx-red-700 p-4 br-lg">Danger tint</div>
  <div className="bg-amber-50 tx-amber-700 p-4 br-lg">Warning tint</div>

  {/* Neutral */}
  <div className="bg-gray-100 p-4">Light gray</div>
  <div className="bg-gray-800 tx-white p-4">Dark gray</div>
  <div className="bg-white p-4">White</div>
  <div className="bg-black tx-white p-4">Black</div>
</div>
```

**Color weight guide**

| Weight | Use case |
|---|---|
| `50` | Very light tint — backgrounds, alerts |
| `100–200` | Soft highlight |
| `300–400` | Muted fill |
| `500` | Primary color |
| `600–700` | Hover / pressed state |
| `800–900` | Dark / high contrast |

### Badge

```tsx
<span className="bg-indigo-50 tx-indigo-700 px-2 py-1 br-full fs-xs fw-5">
  New
</span>
```

### Alert / status banner

```tsx
type AlertType = 'success' | 'danger' | 'warning';

const alertStyles: Record<AlertType, string> = {
  success: 'bg-green-50 tx-green-700 bd-green-300 border bw-1',
  danger:  'bg-red-50 tx-red-700 bd-red-300 border bw-1',
  warning: 'bg-amber-50 tx-amber-700 bd-amber-300 border bw-1',
};

function Alert({ type, message }: { type: AlertType; message: string }) {
  return (
    <div role="alert" className={`${alertStyles[type]} px-4 py-2 br-md fs-sm`}>
      {message}
    </div>
  );
}

<Alert type="success" message="Profile saved!" />
<Alert type="danger"  message="Something went wrong." />
<Alert type="warning" message="Your session expires soon." />
```

### Card

```tsx
function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white bd-gray-200 border bw-1 br-2xl p-8 sh-3">
      <h2 className="fs-lg fw-6 tx-gray-900 mb-2">{title}</h2>
      <p className="fs-sm tx-gray-500 lh-relaxed">{body}</p>
    </div>
  );
}
```

### Tag

```tsx
function Tag({ label }: { label: string }) {
  return (
    <span className="bg-gray-100 tx-gray-700 px-2 py-1 br-md bd-gray-200 border bw-1 fs-xs fw-5">
      {label}
    </span>
  );
}
```

### Animated element

```tsx
function FadeInBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-indigo-50 br-xl p-6">
      {children}
    </div>
  );
}
```

### Flex layout

```tsx
<div className="flex items-center gap-4 px-4 py-2">
  <span className="fw-6 tx-gray-900">Title</span>
  <span className="tx-gray-500 fs-sm">Subtitle</span>
</div>
```

---

## Class Reference

### Colors

| Pattern | Example | Property |
|---|---|---|
| `bg-{color}-{weight}` | `bg-indigo-500` | `background-color` |
| `tx-{color}-{weight}` | `tx-gray-700` | `color` |
| `bd-{color}-{weight}` | `bd-gray-200` | `border-color` |
| `bg-white` / `bg-black` | — | `background-color` |
| `tx-white` / `tx-black` | — | `color` |

Available colors: `red` `orange` `amber` `yellow` `lime` `green` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `pink` `rose` `slate` `gray` `zinc`

Weights: `50` `100` `200` `300` `400` `500` `600` `700` `800` `900`

### Spacing

| Pattern | Example | Values |
|---|---|---|
| `p-{n}` | `p-4` → 16px | 0–32 |
| `px-{n}` | `px-2` → 8px | 0–32 |
| `py-{n}` | `py-1` → 4px | 0–32 |
| `pt/pb/pl/pr-{n}` | `pt-2` | 0–32 |
| `m-{n}` | `m-4` | 0–32 |
| `mx-{n}` / `my-{n}` | `mx-auto` | 0–32 + auto |
| `mt/mb/ml/mr-{n}` | `mb-2` | 0–32 |
| `gap-{n}` / `gap-x-{n}` / `gap-y-{n}` | `gap-4` | 0–32 |

Spacing values: 0=0px · 0.5=2px · 1=4px · 1.5=6px · 2=8px · 2.5=10px · 3=12px · 4=16px · 5=20px · 6=24px · 8=32px · 10=40px · 12=48px · 16=64px

### Typography

| Class | Value |
|---|---|
| `fs-xs` | 12px |
| `fs-sm` | 14px |
| `fs-md` | 16px |
| `fs-lg` | 18px |
| `fs-xl` | 20px |
| `fs-2xl` | 24px |
| `fs-3xl` | 30px |
| `fs-4xl` | 36px |
| `fs-5xl` | 48px |
| `fw-3` | 300 |
| `fw-4` | 400 |
| `fw-5` | 500 |
| `fw-6` | 600 |
| `fw-7` | 700 |
| `fw-8` | 800 |
| `fw-9` | 900 |
| `lh-tight` | 1.25 |
| `lh-base` | 1.5 |
| `lh-relaxed` | 1.625 |
| `ta-l` / `ta-c` / `ta-r` | text-align |

### Border

| Class | Value |
|---|---|
| `border` | `border-style: solid` |
| `border-t/b/l/r` | per-side solid border |
| `bw-1` | 1px |
| `bw-2` | 2px |
| `bw-4` | 4px |
| `br-none` | 0px |
| `br-sm` | 2px |
| `br-md` | 4px |
| `br-lg` | 8px |
| `br-xl` | 12px |
| `br-2xl` | 16px |
| `br-full` | 9999px |

### Shadow & Opacity

| Class | Description |
|---|---|
| `sh-1` – `sh-5` | Elevation levels |
| `sh-none` | No shadow |
| `op-0` – `op-100` | Opacity (0–1) |

### Layout

| Class | Value |
|---|---|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `block` | `display: block` |
| `hidden` | `display: none` |
| `flex-row` | `flex-direction: row` |
| `flex-col` | `flex-direction: column` |
| `flex-wrap` | `flex-wrap: wrap` |
| `items-center` | `align-items: center` |
| `items-start` | `align-items: flex-start` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `justify-end` | `justify-content: flex-end` |
| `relative` | `position: relative` |
| `absolute` | `position: absolute` |
| `w-full` | `width: 100%` |
| `h-full` | `height: 100%` |

---

## CSS Custom Properties

All tokens are also available as CSS variables:

```css
background-color: var(--indigo-500);
color: var(--gray-700);
border-color: var(--red-200);

padding: var(--spacing-4);           /* 16px */
gap: var(--spacing-2);               /* 8px  */

font-size: var(--fs-lg);             /* 18px */
font-weight: var(--fw-6);            /* 600  */

border-radius: var(--br-lg);         /* 8px  */
box-shadow: var(--sh-3);
```

---

## Using tokens in styled-components

Import token values for use in styled-components:

```tsx
import styled from 'styled-components';
import { bg, bd, tx, spacing, br, sh, fs, fw, bw } from '@techv/design-system';

const Card = styled.div`
  background:    ${bg.white};
  border:        ${bw[1]} solid ${bd.gray[200]};
  border-radius: ${br['2xl']};
  padding:       ${spacing[8]};
  box-shadow:    ${sh[3]};
`;

const Heading = styled.h2`
  font-size:   ${fs.lg};
  font-weight: ${fw[6]};
  color:       ${tx.gray[900]};
`;

const Body = styled.p`
  font-size: ${fs.sm};
  color:     ${tx.gray[500]};
`;
```

**Available token exports**

| Export | Example |
|---|---|
| `bg`, `tx`, `bd`, `fl`, `colors` | `bg.indigo[50]`, `tx.gray[700]` |
| `spacing` | `spacing[4]` → `'16px'` |
| `fs`, `fw`, `lh`, `ta` | `fs.sm`, `fw[6]` |
| `br`, `bw`, `sh`, `op` | `br.full`, `sh[3]` |
| `duration`, `ease` | `duration.normal`, `ease.standard` |

---

## Dark mode

The library ships with a built-in dark mode. Toggle it by setting `data-theme="dark"` on any ancestor element (typically `<html>` or `<body>`).

```tsx
document.documentElement.setAttribute('data-theme', 'dark');

document.documentElement.removeAttribute('data-theme');
```

All components and CSS custom properties respond automatically.

---

## TypeScript

Full TypeScript support is included. All component props and token types are exported.

```tsx
import type { ButtonProps, IconButtonProps } from '@techv/design-system';
```

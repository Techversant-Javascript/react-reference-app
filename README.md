# React Design System

A component library and design token system for React applications, built with styled-components.

## Packages

| Package | Description |
|---|---|
| `@techv/tokens` | CSS custom properties (design tokens) — colors, spacing, radius, shadows, motion |
| `@techv/ui` | React components built on top of `@techv/tokens` |

---

## Installation

```bash
npm install @techv/tokens @techv/ui styled-components
```

```bash
# or with yarn
yarn add @techv/tokens @techv/ui styled-components
```

**Peer dependencies** required by `@techv/ui`:

```json
"react": "^17.0.0 || ^18.0.0 || ^19.0.0",
"react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0",
"styled-components": "^6.1.0"
```

---

## Setup

Import the token CSS once at your app's entry point (e.g. `main.tsx`, `_app.tsx`, or a global CSS file). This loads all CSS custom properties into `:root`.

```tsx
// main.tsx
import '@techv/tokens/global.css';
import App from './App';
```

Without this import, components will render without colors, spacing, or any visual tokens.

---

## Components

### Button

A versatile button component with multiple visual variants, color schemes, sizes, and a built-in loading state.

```tsx
import { Button, IconButton } from '@techv/ui';
```

#### Basic usage

```tsx
<Button>Click me</Button>

<Button variant="outline" color="danger">
  Delete
</Button>

<Button size="lg" isLoading>
  Saving…
</Button>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `solid` \| `outline` \| `ghost` \| `soft` \| `link` | `solid` | Visual style |
| `color` | `brand` \| `danger` \| `success` \| `warning` \| `neutral` | `brand` | Color scheme |
| `size` | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` | Height and padding |
| `isLoading` | `boolean` | `false` | Shows spinner, disables button, sets `aria-busy` |
| `leftIcon` | `ReactNode` | — | Icon rendered before the label (hidden during loading) |
| `rightIcon` | `ReactNode` | — | Icon rendered after the label (hidden during loading) |
| `disabled` | `boolean` | — | Native disabled attribute |

All other native `<button>` attributes (`onClick`, `type`, `form`, etc.) are forwarded.

#### Variants

```tsx
<Button variant="solid">Solid</Button>      {/* filled background */}
<Button variant="outline">Outline</Button>  {/* transparent bg, colored border */}
<Button variant="soft">Soft</Button>        {/* tinted background */}
<Button variant="ghost">Ghost</Button>      {/* no bg, no border */}
<Button variant="link">Link</Button>        {/* underlined text, no bg */}
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

| Size | Height |
|---|---|
| `xs` | 28px |
| `sm` | 32px |
| `md` | 36px |
| `lg` | 42px |
| `xl` | 50px |

#### With icons

```tsx
import { PlusIcon, TrashIcon } from 'your-icon-library';

<Button leftIcon={<PlusIcon />}>New item</Button>
<Button rightIcon={<TrashIcon />} color="danger" variant="outline">Delete</Button>
```

#### Loading state

When `isLoading` is `true`, the button is disabled, `aria-busy="true"` is set, and a spinner replaces the left icon (or appears alone if no icon is provided).

```tsx
<Button isLoading>Saving</Button>
```

#### Ref forwarding

`Button` forwards its ref to the underlying `<button>` element.

```tsx
const ref = useRef<HTMLButtonElement>(null);
<Button ref={ref}>Button</Button>
```

---

### IconButton

A square button intended for icon-only actions. Requires an `aria-label` for accessibility.

```tsx
<IconButton icon={<CloseIcon />} aria-label="Close dialog" />

<IconButton
  icon={<TrashIcon />}
  aria-label="Delete item"
  color="danger"
  variant="outline"
  size="sm"
/>
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | **required** | The icon to render |
| `aria-label` | `string` | **required** | Accessible label (no visible text is rendered) |
| `variant` | same as Button | `solid` | Visual style |
| `color` | same as Button | `brand` | Color scheme |
| `size` | same as Button | `md` | Size |
| `isLoading` | `boolean` | `false` | Loading state |

---

## Using CSS Custom Properties

`@techv/tokens` exposes all design values as CSS custom properties. After importing `global.css`, you can use these variables anywhere in your own CSS or styled-components.

### Colors

#### Brand

```css
var(--color-brand-50)   /* #eef2ff — lightest tint */
var(--color-brand-100)
var(--color-brand-300)
var(--color-brand-500)  /* #4f46e5 — primary brand */
var(--color-brand-600)
var(--color-brand-700)
var(--color-brand-900)  /* darkest shade */
```

#### Status colors

```css
/* Success */
var(--color-success-50)
var(--color-success-500)  /* #10b981 */
var(--color-success-600)
var(--color-success-700)

/* Danger */
var(--color-danger-50)
var(--color-danger-500)   /* #ef4444 */
var(--color-danger-600)
var(--color-danger-700)

/* Warning */
var(--color-warning-50)
var(--color-warning-500)  /* #f59e0b */
var(--color-warning-600)
var(--color-warning-700)
```

#### Gray scale

```css
var(--color-gray-50)   /* #f9fafb */
var(--color-gray-100)
var(--color-gray-200)
var(--color-gray-300)
var(--color-gray-400)
var(--color-gray-500)
var(--color-gray-600)
var(--color-gray-700)
var(--color-gray-800)
var(--color-gray-900)  /* #111827 */
```

#### Semantic aliases

Prefer these over raw color scales in your components — they automatically update in dark mode.

```css
var(--color-surface)         /* card / modal background */
var(--color-bg)              /* page background */
var(--color-text-primary)    /* primary body text */
var(--color-text-secondary)  /* muted / caption text */
var(--color-text-disabled)   /* disabled text */
var(--color-border)          /* default border */
var(--color-border-strong)   /* emphasized border */
var(--color-focus-ring)      /* keyboard focus indicator */
```

#### Base

```css
var(--color-white)  /* #ffffff */
var(--color-black)  /* #000000 */
```

### Spacing

```css
var(--space-2xs)  /* 2px */
var(--space-xs)   /* 4px */
var(--space-sm)   /* 8px */
var(--space-md)   /* 16px */
var(--space-lg)   /* 24px */
var(--space-xl)   /* 32px */
var(--space-2xl)  /* 48px */
var(--space-3xl)  /* 64px */
```

### Border radius

```css
var(--radius-none)   /* 0 */
var(--radius-xs)     /* 2px */
var(--radius-sm)     /* 4px */
var(--radius-md)     /* 6px */
var(--radius-lg)     /* 8px */
var(--radius-xl)     /* 12px */
var(--radius-2xl)    /* 16px */
var(--radius-full)   /* 9999px */

/* Component-specific */
var(--radius-button) /* 8px */
var(--radius-card)   /* 12px */
var(--radius-modal)  /* 16px */
var(--radius-badge)  /* 9999px */
```

### Shadows

```css
var(--shadow-none)
var(--shadow-xs)   /* subtle lift */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
var(--shadow-xl)   /* deep elevation */
```

### Motion

```css
/* Durations */
var(--duration-instant)    /* 50ms */
var(--duration-fast)       /* 100ms */
var(--duration-normal)     /* 200ms */
var(--duration-slow)       /* 300ms */
var(--duration-deliberate) /* 500ms */

/* Easing */
var(--ease-standard)    /* cubic-bezier(0.4, 0, 0.2, 1) */
var(--ease-decelerate)  /* cubic-bezier(0, 0, 0.2, 1) */
var(--ease-accelerate)  /* cubic-bezier(0.4, 0, 1, 1) */
var(--ease-spring)      /* cubic-bezier(0.34, 1.56, 0.64, 1) */
```

### Typography

```css
var(--font-display)  /* 'Plus Jakarta Sans', sans-serif */
var(--font-text)     /* 'Inter', sans-serif */
var(--font-mono)     /* 'JetBrains Mono', monospace */
```

### Using tokens in styled-components

```tsx
import styled from 'styled-components';

const Card = styled.div`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  box-shadow: var(--shadow-sm);
`;

const Label = styled.span`
  color: var(--color-text-secondary);
  font-family: var(--font-text);
`;
```

### Using tokens in plain CSS

```css
.card {
  background: var(--color-surface);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
}

.badge {
  background: var(--color-brand-50);
  color: var(--color-brand-700);
  border-radius: var(--radius-badge);
  padding: var(--space-2xs) var(--space-sm);
}
```

---

## Dark mode

Dark mode is supported out of the box via the `[data-theme="dark"]` attribute and the `prefers-color-scheme: dark` media query.

**Attribute-based (explicit toggle):**

```tsx
// Set dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Revert to light
document.documentElement.setAttribute('data-theme', 'light');
```

**Media query (automatic):** If no `data-theme` attribute is set, the theme follows the user's OS preference.

The semantic alias tokens (`--color-surface`, `--color-bg`, `--color-text-primary`, etc.) automatically switch values in dark mode. Raw scale tokens (`--color-brand-500`, `--color-gray-200`, etc.) remain constant except for `--color-brand-500`, which shifts to a lighter indigo in dark mode for legibility.

---

## TypeScript

Both packages ship TypeScript declarations. All component props and token types are fully typed.

```tsx
import type { ButtonProps, ButtonVariant, ButtonColor, ButtonSize } from '@techv/ui';
```

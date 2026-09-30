# Design System Style Guide

> **Source of truth**: All design tokens live in `packages/tokens/src/`. Any style change must be applied consistently across the files listed in each section below.

---

## Table of Contents

1. [Typography](#typography)
2. [Colors](#colors)
3. [Spacing](#spacing)
4. [Border Radius](#border-radius)
5. [Border Width](#border-width)
6. [Shadows](#shadows)
7. [Opacity](#opacity)
8. [Layout & Positioning](#layout--positioning)
9. [Backgrounds](#backgrounds)
10. [Animation](#animation)
11. [Component Tokens](#component-tokens)
12. [Files to Update Reference](#files-to-update-reference)

---

## Typography

### Font Families

| Role       | Font                | CSS Variable          | JS Token                  |
|------------|---------------------|-----------------------|---------------------------|
| Display    | Plus Jakarta Sans   | `--font-display`      | `tokens.font.display`     |
| Body/UI    | Inter               | `--font-text`         | `tokens.font.text`        |
| Monospace  | JetBrains Mono      | `--font-mono`         | `tokens.font.mono`        |

### Font Sizes

| Token  | Value  | CSS Variable  | JS Export (`fs`) |
|--------|--------|---------------|------------------|
| xs     | 12px   | `--fs-xs`     | `fs.xs`          |
| sm     | 14px   | `--fs-sm`     | `fs.sm`          |
| md     | 16px   | `--fs-md`     | `fs.md`          |
| lg     | 18px   | `--fs-lg`     | `fs.lg`          |
| xl     | 20px   | `--fs-xl`     | `fs.xl`          |
| 2xl    | 24px   | `--fs-2xl`    | `fs['2xl']`      |
| 3xl    | 30px   | `--fs-3xl`    | `fs['3xl']`      |
| 4xl    | 36px   | `--fs-4xl`    | `fs['4xl']`      |
| 5xl    | 48px   | `--fs-5xl`    | `fs['5xl']`      |

### Semantic Font Sizes (for headings / body)

| Role      | Value  | JS Token               |
|-----------|--------|------------------------|
| h1        | 36px   | `tokens.fontSize.h1`   |
| h2        | 28px   | `tokens.fontSize.h2`   |
| h3        | 22px   | `tokens.fontSize.h3`   |
| h4        | 18px   | `tokens.fontSize.h4`   |
| h5        | 16px   | `tokens.fontSize.h5`   |
| Body LG   | 16px   | `tokens.fontSize.bodyLg` |
| Body MD   | 14px   | `tokens.fontSize.bodyMd` |
| Caption   | 12px   | `tokens.fontSize.caption` |
| Code      | 12px   | `tokens.fontSize.code` |

### Font Weights

| Token | Value | CSS Variable | JS Export (`fw`) |
|-------|-------|--------------|------------------|
| 3     | 300   | `--fw-3`     | `fw[3]`          |
| 4     | 400   | `--fw-4`     | `fw[4]`          |
| 5     | 500   | `--fw-5`     | `fw[5]`          |
| 6     | 600   | `--fw-6`     | `fw[6]`          |
| 7     | 700   | `--fw-7`     | `fw[7]`          |
| 8     | 800   | `--fw-8`     | `fw[8]`          |
| 9     | 900   | `--fw-9`     | `fw[9]`          |

### Line Heights

| Token    | Value | CSS Class  | JS Export (`lh`)  |
|----------|-------|------------|-------------------|
| none     | 1     | `lh-none`  | `lh.none`         |
| tight    | 1.25  | `lh-tight` | `lh.tight`        |
| snug     | 1.375 | `lh-snug`  | `lh.snug`         |
| base     | 1.5   | `lh-base`  | `lh.base`         |
| relaxed  | 1.625 | `lh-relaxed` | `lh.relaxed`    |
| loose    | 2     | `lh-loose` | `lh.loose`        |

### Text Alignment

| Token | Value   | CSS Class | JS Export (`ta`) |
|-------|---------|-----------|------------------|
| l     | left    | `ta-l`    | `ta.l`           |
| r     | right   | `ta-r`    | `ta.r`           |
| c     | center  | `ta-c`    | `ta.c`           |
| j     | justify | `ta-j`    | `ta.j`           |

**Files to update if typography changes:**
- `packages/tokens/src/index.ts` — `fs`, `fw`, `lh`, `ta`, `tokens.font`, `tokens.fontSize`
- `packages/tokens/src/global.css` — `--fs-*`, `--fw-*`, `--font-*` variables
- `packages/tokens/src/utility.css` — `.fs-*`, `.fw-*`, `.lh-*`, `.ta-*` classes

---

## Colors

### Semantic Colors (use these in components)

These are the tokens all UI components should reference. They remap automatically in dark mode.

| Token                  | Light Value | Dark Value | CSS Variable               |
|------------------------|-------------|------------|----------------------------|
| Surface                | `#FFFFFF`   | `#111827`  | `--color-surface`          |
| Background             | `#F9FAFB`   | `#1F2937`  | `--color-bg`               |
| Text Primary           | `#111827`   | `#F9FAFB`  | `--color-text-primary`     |
| Text Secondary         | `#6B7280`   | `#9CA3AF`  | `--color-text-secondary`   |
| Text Disabled          | `#D1D5DB`   | `#4B5563`  | `--color-text-disabled`    |
| Border                 | `#E5E7EB`   | `#374151`  | `--color-border`           |
| Border Strong          | `#D1D5DB`   | `#4B5563`  | `--color-border-strong`    |
| Focus Ring             | `#4F46E5`   | `#6366F1`  | `--color-focus-ring`       |

### Brand Palette (Indigo)

| Scale | Hex       | CSS Variable          |
|-------|-----------|-----------------------|
| 50    | `#EEF2FF` | `--color-brand-50`    |
| 100   | `#C7D2FE` | `--color-brand-100`   |
| 300   | `#A5B4FC` | `--color-brand-300`   |
| 500   | `#4F46E5` | `--color-brand-500`   |
| 600   | `#4338CA` | `--color-brand-600`   |
| 700   | `#3730A3` | `--color-brand-700`   |
| 900   | `#312E81` | `--color-brand-900`   |

### Status Palettes

**Success (Green)**

| Scale | Hex       | CSS Variable             |
|-------|-----------|--------------------------|
| 50    | `#ECFDF5` | `--color-success-50`     |
| 100   | `#D1FAE5` | `--color-success-100`    |
| 200   | `#A7F3D0` | `--color-success-200`    |
| 500   | `#10B981` | `--color-success-500`    |
| 600   | `#059669` | `--color-success-600`    |
| 700   | `#047857` | `--color-success-700`    |

**Danger (Red)**

| Scale | Hex       | CSS Variable            |
|-------|-----------|-------------------------|
| 50    | `#FEF2F2` | `--color-danger-50`     |
| 100   | `#FEE2E2` | `--color-danger-100`    |
| 200   | `#FECACA` | `--color-danger-200`    |
| 500   | `#EF4444` | `--color-danger-500`    |
| 600   | `#DC2626` | `--color-danger-600`    |
| 700   | `#B91C1C` | `--color-danger-700`    |

**Warning (Amber)**

| Scale | Hex       | CSS Variable             |
|-------|-----------|--------------------------|
| 50    | `#FFFBEB` | `--color-warning-50`     |
| 100   | `#FEF3C7` | `--color-warning-100`    |
| 200   | `#FDE68A` | `--color-warning-200`    |
| 500   | `#F59E0B` | `--color-warning-500`    |
| 600   | `#D97706` | `--color-warning-600`    |
| 700   | `#B45309` | `--color-warning-700`    |

**Info (Blue)**

| Scale | Hex       | CSS Variable          |
|-------|-----------|-----------------------|
| 50    | `#EFF6FF` | `--color-info-50`     |
| 500   | `#3B82F6` | `--color-info-500`    |

### Gray Scale

| Scale | Hex       | CSS Variable        |
|-------|-----------|---------------------|
| 50    | `#F9FAFB` | `--color-gray-50`   |
| 100   | `#F3F4F6` | `--color-gray-100`  |
| 200   | `#E5E7EB` | `--color-gray-200`  |
| 300   | `#D1D5DB` | `--color-gray-300`  |
| 400   | `#9CA3AF` | `--color-gray-400`  |
| 500   | `#6B7280` | `--color-gray-500`  |
| 600   | `#4B5563` | `--color-gray-600`  |
| 700   | `#374151` | `--color-gray-700`  |
| 800   | `#1F2937` | `--color-gray-800`  |
| 900   | `#111827` | `--color-gray-900`  |

### Full Raw Palette

The raw palette includes all color scales: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`. Each has shades 50–900.

Raw palette CSS variables use the pattern `--{color}-{shade}` (e.g. `--indigo-500`).
JS access: `colors.indigo[500]` or the alias exports `bg`, `tx`, `bd`, `fl`.

**Files to update if color changes:**
- `packages/tokens/src/index.ts` — `palette`, `tokens.color`, `tokens.semantic`
- `packages/tokens/src/global.css` — `--color-*` semantic vars + raw palette vars + dark mode overrides in `[data-theme='dark']` and `@media (prefers-color-scheme: dark)`
- `packages/tokens/src/utility.css` — `.bg-*`, `.tx-*`, `.bd-*`, `.fl-*` classes
- `packages/ui/src/components/Button/Button.styles.ts` — `colorMap` (uses CSS vars; only needs updates if semantic var names change)

---

## Spacing

| Token | Value   | CSS Variable      | JS Export (`spacing`) |
|-------|---------|-------------------|-----------------------|
| px    | 1px     | `--spacing-px`    | `spacing.px`          |
| 0     | 0px     | `--spacing-0`     | `spacing[0]`          |
| 0.5   | 2px     | `--spacing-0_5`   | `spacing[0.5]`        |
| 1     | 4px     | `--spacing-1`     | `spacing[1]`          |
| 1.5   | 6px     | `--spacing-1_5`   | `spacing[1.5]`        |
| 2     | 8px     | `--spacing-2`     | `spacing[2]`          |
| 2.5   | 10px    | `--spacing-2_5`   | `spacing[2.5]`        |
| 3     | 12px    | `--spacing-3`     | `spacing[3]`          |
| 3.5   | 14px    | `--spacing-3_5`   | `spacing[3.5]`        |
| 4     | 16px    | `--spacing-4`     | `spacing[4]`          |
| 5     | 20px    | `--spacing-5`     | `spacing[5]`          |
| 6     | 24px    | `--spacing-6`     | `spacing[6]`          |
| 7     | 28px    | `--spacing-7`     | `spacing[7]`          |
| 8     | 32px    | `--spacing-8`     | `spacing[8]`          |
| 9     | 36px    | `--spacing-9`     | `spacing[9]`          |
| 10    | 40px    | `--spacing-10`    | `spacing[10]`         |
| 12    | 48px    | `--spacing-12`    | `spacing[12]`         |
| 14    | 56px    | `--spacing-14`    | `spacing[14]`         |
| 16    | 64px    | `--spacing-16`    | `spacing[16]`         |
| 20    | 80px    | `--spacing-20`    | `spacing[20]`         |
| 24    | 96px    | `--spacing-24`    | `spacing[24]`         |
| 32    | 128px   | `--spacing-32`    | `spacing[32]`         |
| full  | 100%    | —                 | `spacing.full`        |
| auto  | auto    | —                 | `spacing.auto`        |

Semantic spacing aliases (also in `tokens.space`): `2xs`=2px, `xs`=4px, `sm`=8px, `md`=16px, `lg`=24px, `xl`=32px, `2xl`=48px, `3xl`=64px — exposed as `--space-*` CSS variables.

**Files to update if spacing changes:**
- `packages/tokens/src/index.ts` — `spacing`, `tokens.space`
- `packages/tokens/src/global.css` — `--spacing-*`, `--space-*` variables
- `packages/tokens/src/utility.css` — `.p-*`, `.px-*`, `.py-*`, `.pt-*`, `.pb-*`, `.pl-*`, `.pr-*`, `.m-*`, `.mx-*`, `.my-*`, `.mt-*`, `.mb-*`, `.ml-*`, `.mr-*`, `.g-*`, `.gx-*`, `.gy-*`, `.space-x-*`, `.space-y-*`, `.w-*`, `.h-*` classes

### Padding, Margin & Space Between Utilities

| Category | Classes | Scale / Values |
|----------|---------|----------------|
| **Padding** | `.p-*`, `.px-*`, `.py-*`, `.pt-*`, `.pr-*`, `.pb-*`, `.pl-*` | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 32 |
| **Margin** | `.m-*`, `.mx-*`, `.my-*`, `.mt-*`, `.mr-*`, `.mb-*`, `.ml-*` | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 32, `auto` |
| **Space Between** | `.space-x-*`, `.space-y-*` | 0, 1, 2, 3, 4, 5, 6, 8, 10, 12 (uses sibling margins) |

---

## Border Radius

| Token | Value   | CSS Variable  | Semantic Variable    | JS Export (`br`) |
|-------|---------|---------------|----------------------|------------------|
| none  | 0px     | `--br-none`   | `--radius-none`      | `br.none`        |
| sm    | 2px     | `--br-sm`     | `--radius-xs`        | `br.sm`          |
| md    | 4px     | `--br-md`     | `--radius-sm`        | `br.md`          |
| lg    | 8px     | `--br-lg`     | `--radius-lg`        | `br.lg`          |
| xl    | 12px    | `--br-xl`     | `--radius-xl`        | `br.xl`          |
| 2xl   | 16px    | `--br-2xl`    | `--radius-2xl`       | `br['2xl']`      |
| 3xl   | 24px    | `--br-3xl`    | —                    | `br['3xl']`      |
| full  | 9999px  | `--br-full`   | `--radius-full`      | `br.full`        |

Component-specific radius tokens:

| Token          | Value   | CSS Variable       |
|----------------|---------|--------------------|
| Button radius  | 8px     | `--radius-button`  |
| Card radius    | 12px    | `--radius-card`    |
| Modal radius   | 16px    | `--radius-modal`   |
| Badge radius   | 9999px  | `--radius-badge`   |

**Files to update if border radius changes:**
- `packages/tokens/src/index.ts` — `br`, `tokens.radius`, `tokens.component.radiusButton/radiusCard/radiusModal/radiusBadge`
- `packages/tokens/src/global.css` — `--br-*`, `--radius-*` variables
- `packages/tokens/src/utility.css` — `.br-*` classes
- `packages/ui/src/components/Button/Button.styles.ts` — hardcoded `border-radius: 8px` in `buttonBase` (matches `--radius-button`)

---

## Border Width

| Token | Value | CSS Variable | JS Export (`bw`) |
|-------|-------|--------------|------------------|
| 0     | 0px   | `--bw-0`     | `bw[0]`          |
| 1     | 1px   | `--bw-1`     | `bw[1]`          |
| 2     | 2px   | `--bw-2`     | `bw[2]`          |
| 4     | 4px   | `--bw-4`     | `bw[4]`          |
| 8     | 8px   | `--bw-8`     | `bw[8]`          |

**Files to update if border width changes:**
- `packages/tokens/src/index.ts` — `bw`
- `packages/tokens/src/global.css` — `--bw-*` variables
- `packages/tokens/src/utility.css` — `.bw-*` classes

---

## Shadows

| Token | Value                                                           | CSS Variable   | Semantic Variable | JS Export (`sh`) |
|-------|-----------------------------------------------------------------|----------------|-------------------|------------------|
| none  | none                                                            | `--sh-none`    | `--shadow-none`   | `sh.none`        |
| 1     | `0 1px 2px rgba(0,0,0,0.05)`                                   | `--sh-1`       | `--shadow-xs`     | `sh[1]`          |
| 2     | `0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)`      | `--sh-2`       | `--shadow-sm`     | `sh[2]`          |
| 3     | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)`      | `--sh-3`       | `--shadow-md`     | `sh[3]`          |
| 4     | `0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)`    | `--sh-4`       | `--shadow-lg`     | `sh[4]`          |
| 5     | `0 20px 25px rgba(0,0,0,0.10), 0 8px 10px rgba(0,0,0,0.04)`   | `--sh-5`       | `--shadow-xl`     | `sh[5]`          |

**Files to update if shadows change:**
- `packages/tokens/src/index.ts` — `sh`, `tokens.shadow`
- `packages/tokens/src/global.css` — `--sh-*`, `--shadow-*` variables
- `packages/tokens/src/utility.css` — `.sh-*` classes

---

## Opacity

| Token | Value | CSS Class  | JS Export (`op`) |
|-------|-------|------------|------------------|
| 0     | 0     | `op-0`     | `op[0]`          |
| 5     | 0.05  | `op-5`     | `op[5]`          |
| 10    | 0.1   | `op-10`    | `op[10]`         |
| 20    | 0.2   | `op-20`    | `op[20]`         |
| 25    | 0.25  | `op-25`    | `op[25]`         |
| 30    | 0.3   | `op-30`    | `op[30]`         |
| 40    | 0.4   | `op-40`    | `op[40]`         |
| 50    | 0.5   | `op-50`    | `op[50]`         |
| 60    | 0.6   | `op-60`    | `op[60]`         |
| 70    | 0.7   | `op-70`    | `op[70]`         |
| 75    | 0.75  | `op-75`    | `op[75]`         |
| 80    | 0.8   | `op-80`    | `op[80]`         |
| 90    | 0.9   | `op-90`    | `op[90]`         |
| 95    | 0.95  | `op-95`    | `op[95]`         |
| 100   | 1     | `op-100`   | `op[100]`        |

Note: Disabled buttons use `opacity: 0.45` (hardcoded in Button component).

**Files to update if opacity scale changes:**
- `packages/tokens/src/index.ts` — `op`
- `packages/tokens/src/utility.css` — `.op-*` classes

---

## 8. Layout & Positioning

### Container
| Class | Description | CSS Reference |
|-------|-------------|---------------|
| `.container` | Center aligned container with 100% width | `width: 100%`, `margin: auto` |
| `.{sm\|md\|lg\|xl\|2xl}:container` | Responsive containers with max-widths | `max-width: var(--screen-*)` |

### Columns
| Class | Description | CSS Property |
|-------|-------------|--------------|
| `.cols-{1-4\|none}` | Number of columns | `column-count` |
| `.cols-gap-{0-8}` | Gap between columns | `column-gap` |
| `.column-fill-{auto\|balance}` | How content fills columns | `column-fill` |
| `.column-span-{all\|none}` | Whether element spans all columns | `column-span` |

### Display & Box Sizing
| Category | Class Names |
|----------|-------------|
| **Display** | `.block`, `.inline-block`, `.inline`, `.flex`, `.inline-flex`, `.grid`, `.inline-grid`, `.contents`, `.table`, `.hidden`, `.flow-root`, `.list-item` |
| **Box Sizing** | `.box-border`, `.box-content` |
| **Isolation** | `.isolate`, `.isolation-auto` |
| **Visibility** | `.visible`, `.invisible`, `.visibility-collapse` |

### Floats & Clear
| Category | Class Names |
|----------|-------------|
| **Floats** | `.float-left`, `.float-right`, `.float-none` |
| **Clear** | `.clear-left`, `.clear-right`, `.clear-both`, `.clear-none` |

### Flexbox & Grid Alignment
| Category | Class Names | CSS Property |
|----------|-------------|--------------|
| **Display** | `.flex`, `.inline-flex`, `.grid`, `.inline-grid` | `display` |
| **Flex Direction** | `.flex-row`, `.flex-col`, `.flex-row-reverse`, `.flex-col-reverse` | `flex-direction` |
| **Flex Wrap** | `.flex-wrap`, `.flex-nowrap`, `.flex-wrap-reverse` | `flex-wrap` |
| **Flex Grow** | `.flex-grow` (1), `.flex-grow-0` (0) | `flex-grow` |
| **Flex Shrink** | `.flex-shrink`, `.flex-shrink-0` | `flex-shrink` |
| **Flex Basis** | `.basis-0`, `.basis-auto`, `.basis-full` | `flex-basis` |
| **Flex Sizing** | `.flex-1`, `.flex-auto`, `.flex-initial`, `.flex-none` | `flex` |
| **Order** | `.order-first`, `.order-last`, `.order-none`, `.order-{1-12}` | `order` |
| **Grid Columns** | `.grid-cols-{1-12\|none}` | `grid-template-columns` |
| **Grid Rows** | `.grid-rows-{1-6\|none}` | `grid-template-rows` |
| **Gap (Spacing)** | `.g-{0-12}`, `.gx-*`, `.gy-*` | `gap`, `column-gap`, `row-gap` |
| **Items Align** | `.items-{start\|center\|end\|stretch\|baseline}` | `align-items` |
| **Justify Content** | `.justify-{start\|center\|end\|between\|around\|evenly}` | `justify-content` |
| **Align Content** | `.content-{start\|center\|end\|between\|around\|evenly\|stretch}` | `align-content` |
| **Self Align** | `.self-{start\|center\|end\|stretch\|auto}` | `align-self` |
| **Place Content/Items** | `.place-content-*`, `.place-items-*`, `.place-self-*` | `place-content`, `place-items`, `place-self` |


### Object Fit & Position
| Category | Class Names |
|----------|-------------|
| **Object Fit** | `.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down` |
| **Object Position**| `.object-center`, `.object-top`, `.object-bottom`, `.object-left`, `.object-right`, `.object-left-top`, `.object-right-top`, `.object-left-bottom`, `.object-right-bottom` |

### Overflow & Overscroll Behavior
| Category | Class Names |
|----------|-------------|
| **Overflow** | `.overflow-{auto\|hidden\|clip\|visible\|scroll}` (also `-x` and `-y` variants) |
| **Overscroll**| `.overscroll-{auto\|contain\|none}` (also `-x` and `-y` variants) |

### Positioning
| Category | Class Names | CSS Variable / Reference |
|----------|-------------|-------------------------|
| **Position** | `.static`, `.fixed`, `.absolute`, `.relative`, `.sticky` | `position` |
| **Placement** | `.top-{0-8\|auto\|full}`, `.right-*`, `.bottom-*`, `.left-*`, `.inset-*`, `.inset-x-*`, `.inset-y-*` | `top`, `right`, `bottom`, `left`, `inset` |
| **Z-Index** | `.z-0`, `.z-10`, `.z-20`, `.z-30`, `.z-40`, `.z-50`, `.z-max`, `.z-auto` | `var(--z-*)` |

### Break Properties
| Category | Class Names |
|----------|-------------|
| **Break After** | `.break-after-{auto\|avoid\|all\|page\|left\|right\|column}` |
| **Break Before**| `.break-before-{auto\|avoid\|all\|page\|left\|right\|column}` |
| **Break Inside**| `.break-inside-{auto\|avoid\|avoid-page\|avoid-column}` |
| **Box Decoration**| `.box-decoration-clone`, `.box-decoration-slice` |

---

## 9. Backgrounds

### Background Color
| Pattern | Examples | Values |
|---------|----------|--------|
| `.bg-{palette}-{shade}` | `.bg-blue-500`, `.bg-red-50` | `palette`: red, orange, amber, yellow, lime, green, teal, cyan, sky, blue, indigo, violet, purple, pink, rose, slate, gray, zinc, neutral, stone. `shade`: 50-900. |
| `.bg-{color}` | `.bg-white`, `.bg-black` | `white`, `black` |

### Background Image (Gradients)
| Class | Description | CSS Reference |
|-------|-------------|---------------|
| `.bg-none` | Remove background image | `background-image: none` |
| `.bg-gradient-to-{dir}` | Linear gradient to direction | `to-t` (top), `to-tr`, `to-r` (right), `to-br`, `to-b`, `to-bl`, `to-l`, `to-tl` |

### Gradient Color Stops
Combine these with `.bg-gradient-*` classes to define start, middle, and end colors.

| Pattern | Description |
|---------|-------------|
| `.from-{color}-{shade}` | Start color stop |
| `.via-{color}-{shade}` | Middle (optional) color stop |
| `.to-{color}-{shade}` | End color stop |

**Example usage:**
```html
<div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
```

### Other Background Utilities
| Category | Class Names |
|----------|-------------|
| **Attachment** | `.bg-fixed`, `.bg-local`, `.bg-scroll` |
| **Clip** | `.bg-clip-border`, `.bg-clip-padding`, `.bg-clip-content`, `.bg-clip-text` |
| **Origin** | `.bg-origin-border`, `.bg-origin-padding`, `.bg-origin-content` |
| **Position** | `.bg-top`, `.bg-bottom`, `.bg-left`, `.bg-right`, `.bg-center`, `.bg-left-top`, `.bg-left-bottom`, `.bg-right-top`, `.bg-right-bottom` |
| **Repeat** | `.bg-repeat`, `.bg-no-repeat`, `.bg-repeat-x`, `.bg-repeat-y`, `.bg-round`, `.bg-space` |
| **Size** | `.bg-auto`, `.bg-cover`, `.bg-contain` |

---

## 10. Animation

### Duration

| Token      | Value  | CSS Variable           | JS Token                      |
|------------|--------|------------------------|-------------------------------|
| instant    | 50ms   | `--duration-instant`   | `tokens.duration.instant`     |
| fast       | 100ms  | `--duration-fast`      | `tokens.duration.fast`        |
| normal     | 200ms  | `--duration-normal`    | `tokens.duration.normal`      |
| slow       | 300ms  | `--duration-slow`      | `tokens.duration.slow`        |
| deliberate | 500ms  | `--duration-deliberate`| `tokens.duration.deliberate`  |

### Easing

| Token      | Value                           | CSS Variable         | JS Export (`ease`)    |
|------------|---------------------------------|----------------------|-----------------------|
| standard   | `cubic-bezier(0.4, 0, 0.2, 1)` | `--ease-standard`    | `ease.standard`       |
| decelerate | `cubic-bezier(0, 0, 0.2, 1)`   | `--ease-decelerate`  | `ease.decelerate`     |
| accelerate | `cubic-bezier(0.4, 0, 1, 1)`   | `--ease-accelerate`  | `ease.accelerate`     |
| spring     | `cubic-bezier(0.34, 1.56, 0.64, 1)` | `--ease-spring` | `ease.spring`         |

**Files to update if animation values change:**
- `packages/tokens/src/index.ts` — `duration`, `ease`, `tokens.duration`, `tokens.ease`
- `packages/tokens/src/global.css` — `--duration-*`, `--ease-*` variables
- `packages/ui/src/components/Button/Button.styles.ts` — hardcoded transition durations/easings in `buttonBase` (currently uses raw values matching these tokens)

---

## 11. Component Tokens

### Button Heights

| Size | Height | CSS Variable            | JS Token                             |
|------|--------|-------------------------|--------------------------------------|
| xs   | 28px   | `--button-height-xs`    | `tokens.component.buttonHeight.xs`   |
| sm   | 32px   | `--button-height-sm`    | `tokens.component.buttonHeight.sm`   |
| md   | 36px   | `--button-height-md`    | `tokens.component.buttonHeight.md`   |
| lg   | 42px   | `--button-height-lg`    | `tokens.component.buttonHeight.lg`   |
| xl   | 50px   | `--button-height-xl`    | `tokens.component.buttonHeight.xl`   |

### Button Padding & Font Size (per size)

| Size | Padding  | Font Size |
|------|----------|-----------|
| xs   | 0 10px   | 12px      |
| sm   | 0 12px   | 13px      |
| md   | 0 14px   | 13px      |
| lg   | 0 18px   | 15px      |
| xl   | 0 24px   | 16px      |

### Focus Ring

| Token        | Value | CSS Variable          | JS Token                            |
|--------------|-------|-----------------------|-------------------------------------|
| Ring width   | 3px   | `--focus-ring-width`  | `tokens.component.focusRingWidth`   |
| Ring offset  | 2px   | `--focus-ring-offset` | `tokens.component.focusRingOffset`  |

**Files to update if component tokens change:**
- `packages/tokens/src/index.ts` — `tokens.component`
- `packages/tokens/src/global.css` — `--button-height-*`, `--focus-ring-*` variables
- `packages/ui/src/components/Button/Button.styles.ts` — `sizeMap` (heights, padding, font sizes) and focus-visible styles

---

## 12. Files to Update Reference

A quick summary of which file to edit for each type of change:

| What changed             | Files to update                                                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Color value**          | `packages/tokens/src/index.ts`, `packages/tokens/src/global.css`, `packages/tokens/src/utility.css`                                    |
| **Semantic color**       | Above + `packages/ui/src/components/Button/Button.styles.ts` if the CSS var name changed                                                |
| **Dark mode color**      | `packages/tokens/src/global.css` (`[data-theme='dark']` block and `@media (prefers-color-scheme: dark)` block)                          |
| **Font family**          | `packages/tokens/src/index.ts` (`tokens.font`), `packages/tokens/src/global.css` (`--font-*`)                                           |
| **Font size**            | `packages/tokens/src/index.ts` (`fs`, `tokens.fontSize`), `packages/tokens/src/global.css` (`--fs-*`), `packages/tokens/src/utility.css` |
| **Font weight**          | `packages/tokens/src/index.ts` (`fw`), `packages/tokens/src/global.css` (`--fw-*`), `packages/tokens/src/utility.css`                   |
| **Spacing**              | `packages/tokens/src/index.ts` (`spacing`, `tokens.space`), `packages/tokens/src/global.css`, `packages/tokens/src/utility.css`         |
| **Border radius**        | `packages/tokens/src/index.ts` (`br`, `tokens.radius`, `tokens.component`), `packages/tokens/src/global.css`, `packages/tokens/src/utility.css`, `packages/ui/src/components/Button/Button.styles.ts` |
| **Shadow**               | `packages/tokens/src/index.ts` (`sh`, `tokens.shadow`), `packages/tokens/src/global.css`, `packages/tokens/src/utility.css`             |
| **Animation / easing**   | `packages/tokens/src/index.ts` (`duration`, `ease`), `packages/tokens/src/global.css`, `packages/ui/src/components/Button/Button.styles.ts` |
| **Layout / Positioning** | `packages/tokens/src/global.css` (`--screen-*`, `--spacing-*`, `--z-*`), `packages/tokens/src/utility.css` |
| **Button size / height** | `packages/tokens/src/index.ts` (`tokens.component.buttonHeight`), `packages/tokens/src/global.css`, `packages/ui/src/components/Button/Button.styles.ts` (`sizeMap`) |
| **Button colors**        | `packages/ui/src/components/Button/Button.styles.ts` (`colorMap`) — only if CSS var names change                                         |

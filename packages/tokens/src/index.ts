const palette = {
  red:     { 50:'#FEF2F2', 100:'#FEE2E2', 200:'#FECACA', 300:'#FCA5A5', 400:'#F87171', 500:'#EF4444', 600:'#DC2626', 700:'#B91C1C', 800:'#991B1B', 900:'#7F1D1D' },
  orange:  { 50:'#FFF7ED', 100:'#FFEDD5', 200:'#FED7AA', 300:'#FDBA74', 400:'#FB923C', 500:'#F97316', 600:'#EA580C', 700:'#C2410C', 800:'#9A3412', 900:'#7C2D12' },
  amber:   { 50:'#FFFBEB', 100:'#FEF3C7', 200:'#FDE68A', 300:'#FCD34D', 400:'#FBBF24', 500:'#F59E0B', 600:'#D97706', 700:'#B45309', 800:'#92400E', 900:'#78350F' },
  yellow:  { 50:'#FEFCE8', 100:'#FEF9C3', 200:'#FEF08A', 300:'#FDE047', 400:'#FACC15', 500:'#EAB308', 600:'#CA8A04', 700:'#A16207', 800:'#854D0E', 900:'#713F12' },
  lime:    { 50:'#F7FEE7', 100:'#ECFCCB', 200:'#D9F99D', 300:'#BEF264', 400:'#A3E635', 500:'#84CC16', 600:'#65A30D', 700:'#4D7C0F', 800:'#3F6212', 900:'#365314' },
  green:   { 50:'#F0FDF4', 100:'#DCFCE7', 200:'#BBF7D0', 300:'#86EFAC', 400:'#4ADE80', 500:'#22C55E', 600:'#16A34A', 700:'#15803D', 800:'#166534', 900:'#14532D' },
  teal:    { 50:'#F0FDFA', 100:'#CCFBF1', 200:'#99F6E4', 300:'#5EEAD4', 400:'#2DD4BF', 500:'#14B8A6', 600:'#0D9488', 700:'#0F766E', 800:'#115E59', 900:'#134E4A' },
  cyan:    { 50:'#ECFEFF', 100:'#CFFAFE', 200:'#A5F3FC', 300:'#67E8F9', 400:'#22D3EE', 500:'#06B6D4', 600:'#0891B2', 700:'#0E7490', 800:'#155E75', 900:'#164E63' },
  sky:     { 50:'#F0F9FF', 100:'#E0F2FE', 200:'#BAE6FD', 300:'#7DD3FC', 400:'#38BDF8', 500:'#0EA5E9', 600:'#0284C7', 700:'#0369A1', 800:'#075985', 900:'#0C4A6E' },
  blue:    { 50:'#EFF6FF', 100:'#DBEAFE', 200:'#BFDBFE', 300:'#93C5FD', 400:'#60A5FA', 500:'#3B82F6', 600:'#2563EB', 700:'#1D4ED8', 800:'#1E40AF', 900:'#1E3A8A' },
  indigo:  { 50:'#EEF2FF', 100:'#E0E7FF', 200:'#C7D2FE', 300:'#A5B4FC', 400:'#818CF8', 500:'#6366F1', 600:'#4F46E5', 700:'#4338CA', 800:'#3730A3', 900:'#312E81' },
  violet:  { 50:'#F5F3FF', 100:'#EDE9FE', 200:'#DDD6FE', 300:'#C4B5FD', 400:'#A78BFA', 500:'#8B5CF6', 600:'#7C3AED', 700:'#6D28D9', 800:'#5B21B6', 900:'#4C1D95' },
  purple:  { 50:'#FAF5FF', 100:'#F3E8FF', 200:'#E9D5FF', 300:'#D8B4FE', 400:'#C084FC', 500:'#A855F7', 600:'#9333EA', 700:'#7E22CE', 800:'#6B21A8', 900:'#581C87' },
  fuchsia: { 50:'#FDF4FF', 100:'#FAE8FF', 200:'#F5D0FE', 300:'#F0ABFC', 400:'#E879F9', 500:'#D946EF', 600:'#C026D3', 700:'#A21CAF', 800:'#86198F', 900:'#701A75' },
  pink:    { 50:'#FDF2F8', 100:'#FCE7F3', 200:'#FBCFE8', 300:'#F9A8D4', 400:'#F472B6', 500:'#EC4899', 600:'#DB2777', 700:'#BE185D', 800:'#9D174D', 900:'#831843' },
  rose:    { 50:'#FFF1F2', 100:'#FFE4E6', 200:'#FECDD3', 300:'#FDA4AF', 400:'#FB7185', 500:'#F43F5E', 600:'#E11D48', 700:'#BE123C', 800:'#9F1239', 900:'#881337' },
  slate:   { 50:'#F8FAFC', 100:'#F1F5F9', 200:'#E2E8F0', 300:'#CBD5E1', 400:'#94A3B8', 500:'#64748B', 600:'#475569', 700:'#334155', 800:'#1E293B', 900:'#0F172A' },
  gray:    { 50:'#F9FAFB', 100:'#F3F4F6', 200:'#E5E7EB', 300:'#D1D5DB', 400:'#9CA3AF', 500:'#6B7280', 600:'#4B5563', 700:'#374151', 800:'#1F2937', 900:'#111827' },
  zinc:    { 50:'#FAFAFA', 100:'#F4F4F5', 200:'#E4E4E7', 300:'#D4D4D8', 400:'#A1A1AA', 500:'#71717A', 600:'#52525B', 700:'#3F3F46', 800:'#27272A', 900:'#18181B' },
  neutral: { 50:'#FAFAFA', 100:'#F5F5F5', 200:'#E5E5E5', 300:'#D4D4D4', 400:'#A3A3A3', 500:'#737373', 600:'#525252', 700:'#404040', 800:'#262626', 900:'#171717' },
  stone:   { 50:'#FAFAF9', 100:'#F5F5F4', 200:'#E7E5E4', 300:'#D6D3D1', 400:'#A8A29E', 500:'#78716C', 600:'#57534E', 700:'#44403C', 800:'#292524', 900:'#1C1917' },
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const colors = palette;
export const bg = palette;
export const tx = palette;
export const bd = palette;
export const fl = palette;

export const spacing = {
  px:  '1px',
  0:   '0px',
  0.5: '2px',
  1:   '4px',
  1.5: '6px',
  2:   '8px',
  2.5: '10px',
  3:   '12px',
  3.5: '14px',
  4:   '16px',
  5:   '20px',
  6:   '24px',
  7:   '28px',
  8:   '32px',
  9:   '36px',
  10:  '40px',
  11:  '44px',
  12:  '48px',
  14:  '56px',
  16:  '64px',
  20:  '80px',
  24:  '96px',
  28:  '112px',
  32:  '128px',
  36:  '144px',
  40:  '160px',
  48:  '192px',
  56:  '224px',
  64:  '256px',
  full: '100%',
  auto: 'auto',
} as const;

export const fs = {
  xs:    '12px',
  sm:    '14px',
  md:    '16px',
  lg:    '18px',
  xl:    '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
} as const;

export const fw = {
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  8: '800',
  9: '900',
} as const;

export const lh = {
  none:    1,
  tight:   1.25,
  snug:    1.375,
  base:    1.5,
  relaxed: 1.625,
  loose:   2,
} as const;

export const ta = {
  l: 'left',
  r: 'right',
  c: 'center',
  j: 'justify',
} as const;

export const br = {
  none:  '0px',
  sm:    '2px',
  md:    '4px',
  lg:    '8px',
  xl:    '12px',
  '2xl': '16px',
  '3xl': '24px',
  full:  '9999px',
} as const;

export const bw = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const;

export const sh = {
  none: 'none',
  1: '0 1px 2px rgba(0,0,0,0.05)',
  2: '0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)',
  3: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
  4: '0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)',
  5: '0 20px 25px rgba(0,0,0,0.10), 0 8px 10px rgba(0,0,0,0.04)',
} as const;

export const op = {
  0:   '0',
  5:   '0.05',
  10:  '0.1',
  20:  '0.2',
  25:  '0.25',
  30:  '0.3',
  40:  '0.4',
  50:  '0.5',
  60:  '0.6',
  70:  '0.7',
  75:  '0.75',
  80:  '0.8',
  90:  '0.9',
  95:  '0.95',
  100: '1',
} as const;

export const duration = {
  instant:    '50ms',
  fast:       '100ms',
  normal:     '200ms',
  slow:       '300ms',
  deliberate: '500ms',
} as const;

export const ease = {
  standard:   'cubic-bezier(0.4, 0, 0.2, 1)',
  decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
  spring:     'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const radii = br;

export const tokens = {
  color: {
    brand:   palette.indigo,
    success: palette.green,
    danger:  palette.red,
    warning: palette.amber,
    info:    palette.blue,
    gray:    palette.gray,
  },
  semantic: {
    surface:       '#FFFFFF',
    bg:            '#F9FAFB',
    textPrimary:   '#111827',
    textSecondary: '#6B7280',
    textDisabled:  '#D1D5DB',
    border:        '#E5E7EB',
    borderStrong:  '#D1D5DB',
    focusRing:     '#4F46E5',
  },
  space: {
    '2xs': 2, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, '2xl': 48, '3xl': 64,
  },
  radius: {
    none: 0, xs: 2, sm: 4, md: 6, lg: 8, xl: 12, '2xl': 16, full: 9999,
  },
  shadow: {
    none: 'none',
    xs:   sh[1],
    sm:   sh[2],
    md:   sh[3],
    lg:   sh[4],
    xl:   sh[5],
  },
  duration: { instant: 50, fast: 100, normal: 200, slow: 300, deliberate: 500 },
  ease,
  font: { display: 'Plus Jakarta Sans', text: 'Inter', mono: 'JetBrains Mono' },
  fontSize: {
    h1: '36px', h2: '28px', h3: '22px', h4: '18px', h5: '16px',
    bodyLg: '16px', bodyMd: '14px', caption: '12px', code: '12px',
  },
  component: {
    buttonHeight: { xs: '28px', sm: '32px', md: '36px', lg: '42px', xl: '50px' },
    radiusButton: '8px', radiusCard: '12px', radiusModal: '16px', radiusBadge: '9999px',
    focusRingWidth: '3px', focusRingOffset: '2px',
  },
} as const;

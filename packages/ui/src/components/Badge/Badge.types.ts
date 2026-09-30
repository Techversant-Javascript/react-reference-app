export type BadgeVariant = 'solid' | 'outline' | 'soft' | 'ghost' ;

export type BadgeColor =
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'
  | 'info';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  children: React.ReactNode;
  isLive?: boolean;
  count?: number;
  dot?: boolean;
  max?: number; // like 99+
}
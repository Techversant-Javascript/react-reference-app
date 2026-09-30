import { HTMLAttributes, ReactNode } from 'react';

export type ProgressVariant = 'linear' | 'circular' | 'text';

export interface ProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  formatLabel?: (value: number, max: number) => string;
  size?: number;
  strokeWidth?: number;
  label?: ReactNode;
}
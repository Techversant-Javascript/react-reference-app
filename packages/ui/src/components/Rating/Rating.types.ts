import { ReactNode } from 'react';

export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;

  size?: RatingSize;

  readOnly?: boolean;
  disabled?: boolean;

  icon?: ReactNode;

  onChange?: (value: number) => void;

  className?: string;
}
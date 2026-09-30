import { InputHTMLAttributes } from 'react';

export type ColorPickerVariant = 'basic' | 'inline';

export interface ColorPickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange'> {
  value?: string;
  variant?: ColorPickerVariant;

  onValueChange?: (value: string) => void;

  label?: string;
  helperText?: string;
  error?: boolean;
}
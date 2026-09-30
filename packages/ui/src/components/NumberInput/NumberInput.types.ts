import { InputHTMLAttributes } from 'react';

export interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value?: number;
  onValueChange?: (value: number) => void;

  variant?: 'default' | 'stepper' | 'currency';

  currencySymbol?: string;

  min?: number;
  max?: number;
  step?: number;

  disabled?: boolean;
  error?: boolean;
}
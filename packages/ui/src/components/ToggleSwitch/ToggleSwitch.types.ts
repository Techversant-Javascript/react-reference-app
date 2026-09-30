import React from 'react';

export type ToggleSize =
  | 'sm'
  | 'md'
  | 'lg';

export interface ToggleSwitchProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onChange'
  > {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: ToggleSize;

  checkedText?: React.ReactNode;
  uncheckedText?: React.ReactNode;

  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;

  onChange?: (
    checked: boolean
  ) => void;
}
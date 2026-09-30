import React from 'react';

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search';

export type InputSize =
  | 'sm'
  | 'md'
  | 'lg';

export type InputVariant =
  | 'outline'
  | 'filled'
  | 'borderless'
  | 'underlined';

export type InputStatus =
  | 'default'
  | 'error'
  | 'success'
  | 'warning';

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'prefix'
  > {
  label?: string;
  helperText?: string;
  status?: InputStatus;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: InputSize;
  variant?: InputVariant;
  type?: InputType;
  allowClear?: boolean;
  count?: boolean;
  width?: string | number;
  onSearch?: (
    value: string
  ) => void | Promise<void>;
}
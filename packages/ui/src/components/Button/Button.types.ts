import type React from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft' | 'link';
export type ButtonColor = 'brand' | 'danger' | 'success' | 'warning' | 'neutral';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  'aria-label': string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  isLoading?: boolean;
}


import React from 'react';

export type TagVariant = 'solid' | 'outline' | 'soft' | 'ghost';

export type TagColor =
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'
  | 'info';

export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  children: React.ReactNode;
  onRemove?: () => void;
  icon?: React.ReactNode;
  checkable?: boolean;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  loading?: boolean;
}

import { HTMLAttributes } from 'react';

export interface ScrollAreaProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'custom';
  maxHeight?: string;
}
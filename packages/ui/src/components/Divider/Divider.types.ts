import { HTMLAttributes } from 'react';

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  text?: string;
  textAlign?: 'left' | 'center' | 'right';
}
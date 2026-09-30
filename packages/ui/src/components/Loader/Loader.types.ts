import type { ReactNode } from 'react';

export type LoaderVariant = 'spinner' | 'skeleton' | 'progress' | 'dots';
export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
export type SkeletonShape = 'rect' | 'circle' | 'text';

export interface LoaderProps {
 
  variant?: LoaderVariant;
  size?: LoaderSize;
  color?: string;
  className?: string;
 'aria-label'?: string;
  width?: string | number;
  height?: string | number;
  shape?: SkeletonShape;
  animation?: 'pulse' | 'shimmer' | 'none';
  value?: number;
  max?: number;
  showValue?: boolean;
  label?: ReactNode;
}

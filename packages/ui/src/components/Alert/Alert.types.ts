import type { ReactNode } from 'react';

export type AlertVariant = 'success' | 'error' | 'warning' | 'info';
export interface AlertProps {
  variant?: AlertVariant;
  children: ReactNode;
  title?: string;
  isDismissible?: boolean;
  onClose?: () => void;
  icon?: ReactNode;
}
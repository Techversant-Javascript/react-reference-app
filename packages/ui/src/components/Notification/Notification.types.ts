import { ReactNode } from 'react';

export type NotificationVariant = | 'success'| 'info'| 'warning'| 'error';

export type NotificationConfig = Omit<NotificationProps,'id' | 'variant'>;

export interface NotificationProps {
  id: string;
  variant: NotificationVariant;
  title: string;
  message: ReactNode;
  duration?: number;
}

export interface NotificationContextValue {
  success: (
    config: Omit<NotificationProps, 'id' | 'variant'>
  ) => void;

  error: (
    config: Omit<NotificationProps, 'id' | 'variant'>
  ) => void;

  warning: (
    config: Omit<NotificationProps, 'id' | 'variant'>
  ) => void;

  info: (
    config: Omit<NotificationProps, 'id' | 'variant'>
  ) => void;
}
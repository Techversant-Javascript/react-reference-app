import React from "react";

export type ToastVariant =
  | "success"
  | "info"
  | "warning"
  | "error"
  | "loading"
  | "offline"
  | "custom";

export type ToastPosition =
  | "topLeft"
  | "top"
  | "topRight"
  | "bottomLeft"
  | "bottom"
  | "bottomRight";

export interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  message?: string;
  duration?: number;
  closable?: boolean;
  visible?: boolean;
  icon?: React.ReactNode;
  position?: ToastPosition;
  showProgress?: boolean;
  pauseOnHover?: boolean;
  onClose?: () => void;
}

import { ReactNode } from "react";

export type DialogSize = "sm" | "md" | "lg";

export interface DialogProps {
  open: boolean;
  title?: string;
  children?: ReactNode;
  size?: DialogSize;
  fullscreen?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  footer?: ReactNode;
}
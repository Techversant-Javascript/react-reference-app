import { ReactNode } from "react";

export type DrawerPlacement = | "left" | "right" | "top" | "bottom";

export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  children: ReactNode;
  placement?: DrawerPlacement;
  overlay?: boolean;
  closeOnOverlayClick?: boolean;
  defaultOpen?: boolean;
  title?: string;
  footer?: ReactNode;
  showCloseButton?: boolean;
}
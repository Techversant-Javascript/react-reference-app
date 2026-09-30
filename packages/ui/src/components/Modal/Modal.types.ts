import React from 'react';

export type ModalVariant = 'standard' | 'alert' | 'form' | 'destructive';
export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalAction {
  label: string;
  onClick: () => void;
  /** Defaults to 'button' */
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
}

export type FormModalArgs = ModalProps & {
  nameLabel: string;
  emailLabel: string;
  roleLabel: string;
  bioLabel: string;
};

export interface ModalProps {
  open: boolean;
  /** Called when the modal requests to be closed (backdrop click, Esc key, close button) */
  onClose: () => void;
  /** Visual variant of the modal */
  variant?: ModalVariant;
  /** Size of the modal dialog */
  size?: ModalSize;
  /** Modal title shown in the header */
  title?: React.ReactNode;
  /** Modal subtitle / description shown below the title */
  description?: React.ReactNode;
  /** Body content of the modal */
  children?: React.ReactNode;
  /** Primary action button (right-most / most prominent) */
  primaryAction?: ModalAction;
  /** Secondary action button */
  secondaryAction?: ModalAction;
  /** Whether clicking outside (backdrop) closes the modal. Default: true */
  closeOnBackdropClick?: boolean;
  /** Whether pressing Escape closes the modal. Default: true */
  closeOnEsc?: boolean;
  /** Hide the close (×) button in the header */
  hideCloseButton?: boolean;
  /** Extra class applied to the dialog panel */
  className?: string;
  
}

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from './Modal.types';
import {
  Backdrop,
  DialogPanel,
  ModalHeader,
  IconCircle,
  HeaderTextGroup,
  ModalTitle,
  ModalDescription,
  CloseButton,
  ModalBody,
  ModalFooter,
  PrimaryButton,
  SecondaryButton,
  Spinner,
} from './Modal.styles';

// ─── Built-in icons per variant ──────────────────────────────────────────────

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const DestructiveIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" />
    <rect x="11.2" y="9" width="1.6" height="5" rx="0.8" fill="white" />
    <rect x="11.2" y="16" width="1.6" height="1.6" rx="0.8" fill="white" />
  </svg>
);

const FormIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const variantIcon = {
  standard:    <InfoIcon />,
  alert:       <AlertTriangleIcon />,
  form:        <FormIcon />,
  destructive: <DestructiveIcon />,
} as const;

// ─── Component ───────────────────────────────────────────────────────────────

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  variant = 'standard',
  size = 'md',
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  hideCloseButton = false,
  className,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc key handler
  useEffect(() => {
    if (!open || !closeOnEsc) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, closeOnEsc, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Focus trap — move focus into dialog when it opens
  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  const hasFooter = primaryAction || secondaryAction;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modal = (
    <Backdrop onClick={handleBackdropClick} role="presentation">
      <DialogPanel
        ref={panelRef}
        $size={size}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
        tabIndex={-1}
        className={className}
      >
        {/* ── Header ── */}
        {(title || description || !hideCloseButton) && (
          <ModalHeader $variant={variant}>
            <IconCircle $variant={variant} aria-hidden="true">
              {variantIcon[variant]}
            </IconCircle>

            <HeaderTextGroup $variant={variant}>
              {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
              {description && (
                <ModalDescription id="modal-description">{description}</ModalDescription>
              )}
            </HeaderTextGroup>

            {!hideCloseButton && (
              <CloseButton $variant={variant} onClick={onClose} aria-label="Close modal">
                <CloseIcon />
              </CloseButton>
            )}
          </ModalHeader>
        )}

        {/* ── Body ── */}
        {children && <ModalBody $variant={variant}>{children}</ModalBody>}

        {/* ── Footer ── */}
        {hasFooter && (
          <ModalFooter $variant={variant}>
            {secondaryAction && (
              <SecondaryButton
                $variant={variant}
                type={secondaryAction.type ?? 'button'}
                onClick={secondaryAction.onClick}
                disabled={secondaryAction.disabled || secondaryAction.loading}
              >
                {secondaryAction.loading && <Spinner />}
                {secondaryAction.label}
              </SecondaryButton>
            )}

            {primaryAction && (
              <PrimaryButton
                $variant={variant}
                type={primaryAction.type ?? 'button'}
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled || primaryAction.loading}
              >
                {primaryAction.loading && <Spinner />}
                {primaryAction.label}
              </PrimaryButton>
            )}
          </ModalFooter>
        )}
      </DialogPanel>
    </Backdrop>
  );

  return ReactDOM.createPortal(modal, document.body);
};

Modal.displayName = 'Modal';

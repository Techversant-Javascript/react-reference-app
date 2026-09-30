import styled, { css, keyframes } from 'styled-components';
import type { ModalVariant, ModalSize } from './Modal.types';

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)     scale(1);    }
`;

// ─── Backdrop ────────────────────────────────────────────────────────────────

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--color-black) 45%, transparent);
  backdrop-filter: blur(2px);
  padding: 16px;
  animation: ${fadeIn} 0.18s ease;
`;

// ─── Size map ─────────────────────────────────────────────────────────────────

const sizeMap: Record<ModalSize, string> = {
  sm: '400px',
  md: '520px',
  lg: '680px',
};

// ─── Variant accent colours ───────────────────────────────────────────────────

const variantHeaderBg: Record<ModalVariant, ReturnType<typeof css>> = {
  standard: css`background: var(--color-white);`,
  alert: css`background: var(--color-warning-50);`,
  form: css`background: var(--color-brand-50);`,
  destructive: css`background: var(--color-white);`,
};

const variantIconColor: Record<ModalVariant, string> = {
  standard: 'var(--color-brand-500)',
  alert: 'var(--color-warning-500)',
  form: 'var(--color-brand-600)',
  destructive: 'var(--color-danger-500)',
};

const variantPrimaryBtn: Record<ModalVariant, ReturnType<typeof css>> = {
  standard: css`
    background: var(--color-brand-600);
    color: var(--color-white);
    &:hover:not(:disabled) { background: var(--color-brand-700); }
  `,
  alert: css`
    background: var(--color-warning-500);
    color: var(--color-white);
    &:hover:not(:disabled) { background: var(--color-warning-600); }
  `,
  form: css`
    background: var(--color-brand-600);
    color: var(--color-white);
    &:hover:not(:disabled) { background: var(--color-brand-700); }
  `,
  destructive: css`
    background: var(--color-danger-600);
    color: var(--color-white);
    &:hover:not(:disabled) { background: var(--color-danger-700); }
  `,
};

// ─── Dialog panel ─────────────────────────────────────────────────────────────

export const DialogPanel = styled.div<{ $size: ModalSize }>`
  position: relative;
  width: 100%;
  max-width: ${({ $size }) => sizeMap[$size]};
  max-height: calc(100vh - 48px);
  background: var(--color-white);
  border-radius: 12px;
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.22s cubic-bezier(0.16, 1, 0.3, 1);
`;

// ─── Header ──────────────────────────────────────────────────────────────────

export const ModalHeader = styled.div<{ $variant: ModalVariant }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 24px 24px 16px;
  ${({ $variant }) => variantHeaderBg[$variant]};
  border-bottom: 1px solid var(--color-gray-100);

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      flex-direction: column;
      align-items: center;
      padding: 32px 32px 8px;
      border-bottom: none;
    `}
`;

export const IconCircle = styled.span<{ $variant: ModalVariant }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $variant }) => variantIconColor[$variant]}1a; /* 10 % opacity */
  color: ${({ $variant }) => variantIconColor[$variant]};

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      width: 48px;
      height: 48px;
      background: var(--color-danger-50);
      margin-bottom: 8px;
    `}

  svg {
    width: 20px;
    height: 20px;
    ${({ $variant }) =>
      $variant === 'destructive' &&
      css`
        width: 24px;
        height: 24px;
      `}
  }
`;

export const HeaderTextGroup = styled.div<{ $variant: ModalVariant }>`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: inherit;

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      text-align: center;
    `}
`;

export const ModalTitle = styled.h2`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-gray-900);
  line-height: 1.4;
  font-family: var(--font-display, sans-serif);
`;

export const ModalDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-gray-500);
  line-height: 1.5;
  font-family: var(--font-text, sans-serif);
`;

export const CloseButton = styled.button<{ $variant?: ModalVariant }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-gray-400);
  transition: background 0.15s ease, color 0.15s ease;
  padding: 0;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: var(--color-gray-100);
    color: var(--color-gray-600);
  }
  &:focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }

  position: absolute;
  top: 16px;
  right: 16px;

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      background: var(--color-danger-500);
      color: var(--color-white);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: 12px;
      right: 12px;

      svg {
        width: 10px;
        height: 10px;
        stroke-width: 3.5;
      }

      &:hover {
        background: var(--color-danger-600);
        color: var(--color-white);
      }
    `}
`;

// ─── Body ─────────────────────────────────────────────────────────────────────

export const ModalBody = styled.div<{ $variant?: ModalVariant }>`
  flex: 1;
  padding: 20px 24px;
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 1.6;
  overflow-y: auto;

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      text-align: center;
      padding: 8px 32px 24px;
    `}
`;

// ─── Footer ──────────────────────────────────────────────────────────────────

export const ModalFooter = styled.div<{ $variant?: ModalVariant }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px 24px;
  border-top: 1px solid var(--color-gray-100);
  background: var(--color-gray-50);

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      justify-content: center;
      border-top: none;
      background: var(--color-white);
      padding: 8px 32px 32px;
    `}
`;

// ─── Action buttons ──────────────────────────────────────────────────────────

const baseBtn = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, opacity 0.15s ease, box-shadow 0.15s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled.button<{ $variant: ModalVariant }>`
  ${baseBtn}
  ${({ $variant }) => variantPrimaryBtn[$variant]}
`;

export const SecondaryButton = styled.button<{ $variant?: ModalVariant }>`
  ${baseBtn}
  background: transparent;
  color: var(--color-black);
  border: 1px solid var(--color-gray-300);

  &:hover:not(:disabled) {
    background: var(--color-gray-100);
  }

  ${({ $variant }) =>
    $variant === 'destructive' &&
    css`
      background: var(--color-danger-50);
      color: var(--color-danger-600);
      border: none;
      &:hover:not(:disabled) {
        background: var(--color-danger-100);
      }
    `}
`;

// ─── Loading spinner (inside buttons) ────────────────────────────────────────

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid var(--color-gray-500);
  border-top-color:var(--color-white);
  border-radius: 50%;
  animation: ${spin} 0.65s linear infinite;
`;

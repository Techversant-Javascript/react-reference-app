import styled, { css } from "styled-components";

interface StyledDialogProps {
  $size: "sm" | "md" | "lg";
  $fullscreen?: boolean;
}

const sizeStyles = {
  sm: css`
    width: 400px;
  `,
  md: css`
    width: 600px;
  `,
  lg: css`
    width: 900px;
  `,
};

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-overlay);

  z-index: var(--z-index-dialog);
`;

export const DialogContainer = styled.div<StyledDialogProps>`
  background: var(--color-gray-500);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-xxl);
  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;

  max-height: 90vh;

  ${({ $fullscreen }) =>
    $fullscreen
      ? css`
          width: 100vw;
          height: 100vh;
          max-height: none;
          border-radius: 0;
        `
      : css`
          ${sizeStyles.sm}
        `}

  ${({ $size, $fullscreen }) =>
    !$fullscreen &&
    css`
      ${sizeStyles[$size]}
    `}
`;

export const Header = styled.div`
  padding: var(--spacing-4);

  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  margin: 0;

  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  color: var(--color-text-secondary);

  font-size: var(--font-size-lg);
`;

export const Body = styled.div`
  padding: var(--spacing-4);

  overflow-y: auto;

  flex: 1;
`;

export const Footer = styled.div`
  padding: var(--spacing-4);

  border-top: 1px solid var(--color-border);

  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-2);
`;
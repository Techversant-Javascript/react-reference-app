import styled, { css, keyframes } from "styled-components";

const progress = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

const positions = {
  topLeft: css`
    top: 24px;
    left: 24px;
  `,

  top: css`
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
  `,

  topRight: css`
    top: 24px;
    right: 24px;
  `,

  bottomLeft: css`
    bottom: 24px;
    left: 24px;
  `,

  bottom: css`
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  `,

  bottomRight: css`
    bottom: 24px;
    right: 24px;
  `,
};

const variantColors = {
  success: "var(--color-success-500)",
  info: "var(--color-brand-500)",
  warning: "var(--color-warning-500)",
  error: "var(--color-danger-500)",
  loading: "var(--color-brand-500)",
};

export const ToastWrapper = styled.div<{
  $variant: string;
  $position: string;
}>`
  position: fixed;
  z-index: 9999;
  min-width: 320px;
  max-width: 420px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  background: white;
  border: 1px solid var(--color-gray-200);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  ${({ $position }) => positions[$position as keyof typeof positions]}
`;

export const IconWrap = styled.div<{
  $variant: string;
}>`
  flex-shrink: 0;
  color: ${({ $variant }) =>
    variantColors[$variant as keyof typeof variantColors]};
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-gray-900);
  margin-bottom: 4px;
`;

export const Message = styled.div`
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-gray-600);
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-gray-500);
  font-size: 18px;
  padding: 0;
  line-height: 1;
  &:hover {
    color: var(--color-gray-900);
  }
`;

export const ProgressBar = styled.div<{
  $variant: string;
  $duration: number;
  $paused: boolean;
}>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  background: ${({ $variant }) =>
    variantColors[$variant as keyof typeof variantColors]};
  animation: ${progress} linear forwards;
  animation-duration: ${({ $duration }) => `${$duration}ms`};
  animation-play-state: ${({ $paused }) =>
      $paused
        ? 'paused'
        : 'running'};
`;

export const StyledSpinner = styled.svg`
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

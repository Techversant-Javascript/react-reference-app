import styled, { css } from 'styled-components';
import { AlertVariant } from './Alert.types';

const variantStyles = (variant: AlertVariant) => {
  switch (variant) {
    case 'success':
      return css`
        background: var(--color-success-50);
        border: 1px solid var(--color-success-200);
        color: var(--color-success-700);
      `;
    case 'error':
      return css`
        background: var(--color-danger-50);
        border: 1px solid var(--color-danger-200);
        color: var(--color-danger-700);
      `;
    case 'warning':
      return css`
        background: var(--color-warning-50);
        border: 1px solid var(--color-warning-200);
        color: var(--color-warning-700);
      `;
    case 'info':
    default:
      return css`
        background: var(--color-brand-50);
        border: 1px solid var(--color-brand-200);
        color: var(--color-brand-700);
      `;
  }
};

export const Wrapper = styled.div<{ $variant: AlertVariant }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;

  ${({ $variant }) => variantStyles($variant)}
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
`;
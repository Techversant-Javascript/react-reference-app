import styled, { css } from 'styled-components';

interface ContainerProps {
  $variant: 'success' | 'info' | 'warning' | 'error';
}

const variantStyles = {
  success: css`
    border-left: 10px solid var(--color-success-600);
  `,

  info: css`
    border-left: 10px solid var(--color-info-500);
  `,

  warning: css`
    border-left: 10px solid var(--color-warning-500);
  `,

  error: css`
    border-left: 10px solid var(--color-danger-500);
  `,
};

export const NotificationViewport = styled.div`
  position: fixed;

  top: 0;
  right: 24px;

  display: flex;
  flex-direction: column;

  gap: 12px;

  z-index: 9999;
`;

export const NotificationContainer =
  styled.div<ContainerProps>`
    min-width: 360px;
    max-width: 420px;

    padding: 16px;

    background: var( --color-gray-500);
    color: var( --color-white);

    border-radius: var(--radius-md);

    box-shadow: var(--shadow-lg);

    display: flex;
    align-items: flex-start;
    gap: 12px;

    ${props => variantStyles[props.$variant]}
  `;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Message = styled.div`
  line-height: 1.5;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
`;
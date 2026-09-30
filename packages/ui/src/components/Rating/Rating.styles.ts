import styled, { css } from 'styled-components';

interface RatingContainerProps {
  $size: 'sm' | 'md' | 'lg';
  $disabled?: boolean;
}

const sizeStyles = {
  sm: css`
    --rating-icon-size: var(--fs-sm);
  `,
  md: css`
    --rating-icon-size: var(--fs-md);
  `,
  lg: css`
    --rating-icon-size: var(--fs-lg);
  `,
};

export const RatingContainer = styled.div<RatingContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);

  ${({ $size }) => sizeStyles[$size]}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

interface RatingItemProps {
  $active: boolean;
  $readOnly?: boolean;
}

export const RatingItem = styled.button<RatingItemProps>`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ $readOnly }) =>
    $readOnly ? 'default' : 'pointer'};

  color: ${({ $active }) =>
    $active
      ? 'var(--color-warning-500)'
      : 'var(--color-gray-400)'};

  font-size: var(--rating-icon-size);

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: ${({ $readOnly }) =>
      $readOnly ? 'none' : 'scale(1.1)'};
  }

  &:focus-visible {
    outline: .ow-2 var(--blue-700);
    outline-offset: var(oo-2);
    border-radius: var(--radius-sm);
  }
`;
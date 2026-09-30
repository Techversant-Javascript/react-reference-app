import styled, {
  css,
  keyframes,
} from 'styled-components';

import type {
  InputSize,
  InputStatus,
  InputVariant,
} from './Input.types';

/* -------------------------------- */
/* Spinner */
/* -------------------------------- */

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

/* -------------------------------- */
/* Size */
/* -------------------------------- */

const sizeStyles = {
  sm: css`
    min-height: 34px;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 6px;
  `,

  md: css`
    min-height: 42px;
    font-size: 14px;
    padding: 0 12px;
    border-radius: 8px;
  `,

  lg: css`
    min-height: 50px;
    font-size: 16px;
    padding: 0 14px;
    border-radius: 10px;
  `,
};

/* -------------------------------- */
/* Status */
/* -------------------------------- */

const statusStyles = {
  default: css`
    --input-border: var(--color-gray-300);
    --input-hover: var(--color-brand-500);
    --input-focus: var(--color-brand-500);
    --input-shadow: rgba(79, 70, 229, 0.12);
    --input-text: var(--color-gray-900);
    --input-message: var(--color-gray-500);
  `,

  error: css`
    --input-border: var(--color-danger-500);
    --input-hover: var(--color-danger-500);
    --input-focus: var(--color-danger-500);
    --input-shadow: rgba(239, 68, 68, 0.12);
    --input-text: var(--color-gray-900);
    --input-message: var(--color-danger-600);
  `,

  success: css`
    --input-border: var(--color-success-500);
    --input-hover: var(--color-success-500);
    --input-focus: var(--color-success-500);
    --input-shadow: rgba(16, 185, 129, 0.12);
    --input-text: var(--color-gray-900);
    --input-message: var(--color-success-600);
  `,

  warning: css`
    --input-border: var(--color-warning-500);
    --input-hover: var(--color-warning-500);
    --input-focus: var(--color-warning-500);
    --input-shadow: rgba(245, 158, 11, 0.12);
    --input-text: var(--color-gray-900);
    --input-message: var(--color-warning-600);
  `,
};

/* -------------------------------- */
/* Variant */
/* -------------------------------- */

const variantStyles = {
  outline: css`
    background: white;
    border: 1px solid var(--input-border);
  `,

  filled: css`
    background: var(--color-gray-50);
    border: 1px solid transparent;
  `,

  borderless: css`
    background: white;
    border: 1px solid transparent;
  `,

  underlined: css`
    background: white;
    border: none;
    border-bottom: 1px solid var(--input-border);
    border-radius: 0;
  `,
};

/* -------------------------------- */
/* Components */
/* -------------------------------- */
export const Wrapper = styled.div<{
  $width?: string | number;
}>`
  width: ${({ $width }) =>
    typeof $width === 'number'
      ? `${$width}px`
      : $width || '100%'};

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label =
  styled.label`
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-primary);
  `;

export const InputWrap =
  styled.div<{
    $size: InputSize;
    $status: InputStatus;
    $variant: InputVariant;
    $disabled?: boolean;
  }>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: 0.2s;

    ${({ $size }) =>
      sizeStyles[$size]}

    ${({ $status }) =>
      statusStyles[$status]}

    ${({ $variant }) =>
      variantStyles[$variant]}

    ${({ $disabled }) =>
      $disabled &&
      css`
        background: var(--color-gray-100);
        opacity: 0.7;
        cursor: not-allowed;
      `}

    &:hover {
      border-color: var(--input-hover);
    }

    &:focus-within {
      border-color: var(--input-focus);
      box-shadow: 0 0 0 3px
        var(--input-shadow);
    }
  `;

export const StyledInput =
  styled.input`
    flex: 1;
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: inherit;
    color: var(--input-text);

    &::placeholder {
      color: var(--color-gray-400);
    }

    &:disabled {
      cursor: not-allowed;
    }
  `;

export const Prefix =
  styled.span`
    display: flex;
    align-items: center;
    color: var(--color-gray-500);
  `;

export const Suffix =
  styled.span`
    display: flex;
    align-items: center;
    color: var(--color-gray-500);
  `;

export const ClearButton =
  styled.button`
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    font-size: 12px;
    background: var(--color-gray-300);
    color: white;

    &:hover {
      background: var(--color-gray-500);
    }
  `;

export const SearchButton =
  styled.button`
    border: none;
    height: 30px;
    padding: 0 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    background: var(--color-brand-500);
    color: white;

    &:hover:not(:disabled) {
      background: var(--color-brand-600);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `;

export const Spinner =
  styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid
      rgba(255, 255, 255, 0.35);
    border-top-color: white;
    animation: ${spin} 0.8s linear infinite;
  `;

export const HelperText =
  styled.div<{
    $status: InputStatus;
  }>`
    ${({ $status }) =>
      statusStyles[$status]}

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    min-height: 18px;
    font-size: 12px;
    color: var(--input-message);
    font-weight: 500;
  `;

export const CountText =
  styled.span`
    color: var(--color-gray-500);
    font-weight: 400;
  `;
  export const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  color: var(--color-gray-500);

  &:hover {
    color: var(--color-gray-700);
  }
`;

import styled, { css, keyframes } from 'styled-components';
import type { AutocompleteSize, AutocompleteVariant } from './SearchableSelect.types';

interface StyledProps {
  $variant: AutocompleteVariant;
  $size: AutocompleteSize;
  $isOpen: boolean;
  $disabled?: boolean;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles = {
  sm: css`
    min-height: 2rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  `,
  md: css`
    min-height: 2.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  `,
  lg: css`
    min-height: 3rem;
    padding: 0.75rem 1rem;
    font-size: 1.125rem;
  `,
};

const variantStyles = {
  filled: css`
    background: var(--color-gray-100);
    border: 1px solid transparent;

    &:focus-within {
      border-color: var(--color-brand-500);
      background: var(--color-neutral-white);
    }
  `,

  outlined: css`
    border: 1px solid var(--color-gray-300);
    background: var(--color-neutral-white);

    &:focus-within {
      border-color: var(--color-brand-500);
    }
  `,

  underlined: css`
    border-bottom: 1px solid var(--color-gray-300);
    border-radius: 0;
    background: transparent;

    &:focus-within {
      border-bottom-color: var(--color-brand-500);
    }
  `,
};

export const Wrapper = styled.div`
  position: relative;
  width: 50%;
`;

export const InputWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  width: 50%;
  flex-wrap: wrap;
  gap: 0.25rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: text;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background: var(--color-gray-100);
    `}
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--color-text-primary);
  min-width: 5rem;
  font: inherit;

  &::placeholder {
    color: var(--color-gray-400);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  width: 100%;
  max-height: 16rem;
  overflow-y: auto;
  margin: 0;
  padding: 0.25rem;
  list-style: none;
  border-radius: var(--radius-md);
  background: var(--color-neutral-white);
  border: 1px solid var(--color-gray-200);
  box-shadow: var(--shadow-md);
  z-index: 1000;
`;

interface OptionProps {
  $active: boolean;
  $disabled?: boolean;
}

export const Option = styled.li<OptionProps>`
  padding: 0.625rem 0.75rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.2s ease;

  background: ${({ $active }) =>
    $active ? 'var(--stone-400)' : 'transparent'};

  color: ${({ $disabled }) =>
    $disabled ? 'var(--color-gray-400)' : 'var(--color-text-primary)'};

  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:hover {
    background: var(--color-text-secondary);
  }
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-full);
  background: var(--color-gray-100);
  color: var(--color-text-primary);
  font-size: 0.875rem;
`;

export const ChipRemove = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
`;

export const ClearButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-gray-500);
  display: flex;
  align-items: center;
`;

export const EmptyState = styled.li`
  padding: 0.75rem;
  text-align: center;
  color: var(--color-gray-500);
`;

export const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  border: 2px solid var(--color-gray-300);
  border-top-color: var(--color-brand-500);
  animation: ${spin} 0.7s linear infinite;
`;
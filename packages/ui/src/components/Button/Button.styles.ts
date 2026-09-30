import styled, { css, keyframes } from 'styled-components';
import type { ButtonColor, ButtonSize, ButtonVariant } from './Button.types';

interface ColorTokens {
  bg: string;
  bgHover: string;
  bgPressed: string;
  tint: string;
  tintHover: string;
  tintText: string;
  border: string;
  text: string;
}

interface SizeTokens {
  height: string;
  padding: string;
  fontSize: string;
}

export interface StyledButtonProps {
  $variant: ButtonVariant;
  $color: ButtonColor;
  $size: ButtonSize;
  $isLoading: boolean;
}

const colorMap: Record<ButtonColor, ColorTokens> = {
  brand: {
    bg: 'var(--color-brand-500)',
    bgHover: 'var(--color-brand-600)',
    bgPressed: 'var(--color-brand-700)',
    tint: 'var(--color-brand-50)',
    tintHover: 'var(--color-brand-100)',
    tintText: 'var(--color-brand-700)',
    border: 'var(--color-brand-500)',
    text: 'var(--color-brand-500)',
  },
  danger: {
    bg: 'var(--color-danger-500)',
    bgHover: 'var(--color-danger-600)',
    bgPressed: 'var(--color-danger-700)',
    tint: 'var(--color-danger-50)',
    tintHover: 'var(--color-danger-200)',
    tintText: 'var(--color-danger-700)',
    border: 'var(--color-danger-500)',
    text: 'var(--color-danger-500)',
  },
  success: {
    bg: 'var(--color-success-500)',
    bgHover: 'var(--color-success-600)',
    bgPressed: 'var(--color-success-700)',
    tint: 'var(--color-success-50)',
    tintHover: 'var(--color-success-200)',
    tintText: 'var(--color-success-700)',
    border: 'var(--color-success-500)',
    text: 'var(--color-success-500)',
  },
  warning: {
    bg: 'var(--color-warning-500)',
    bgHover: 'var(--color-warning-600)',
    bgPressed: 'var(--color-warning-700)',
    tint: 'var(--color-warning-50)',
    tintHover: 'var(--color-warning-200)',
    tintText: 'var(--color-warning-700)',
    border: 'var(--color-warning-500)',
    text: 'var(--color-warning-600)',
  },
  neutral: {
    bg: 'var(--color-gray-600)',
    bgHover: 'var(--color-gray-700)',
    bgPressed: 'var(--color-gray-800)',
    tint: 'var(--color-gray-100)',
    tintHover: 'var(--color-gray-200)',
    tintText: 'var(--color-gray-700)',
    border: 'var(--color-gray-500)',
    text: 'var(--color-gray-600)',
  },
};

const sizeMap: Record<ButtonSize, SizeTokens> = {
  xs: { height: '28px', padding: '0 10px', fontSize: '12px' },
  sm: { height: '32px', padding: '0 12px', fontSize: '13px' },
  md: { height: '36px', padding: '0 14px', fontSize: '13px' },
  lg: { height: '42px', padding: '0 18px', fontSize: '15px' },
  xl: { height: '50px', padding: '0 24px', fontSize: '16px' },
};

function variantStyles(c: ColorTokens, variant: ButtonVariant) {
  switch (variant) {
    case 'solid':
      return css`
        background: ${c.bg};
        color: var(--color-white);
        border: 1px solid transparent;
        &:hover:not(:disabled) {
          background: ${c.bgHover};
        }
      `;
    case 'outline':
      return css`
        background: transparent;
        border: 1px solid ${c.border};
        color: ${c.text};
        &:hover:not(:disabled) {
          background: ${c.tint};
        }
      `;
    case 'soft':
      return css`
        background: ${c.tint};
        border: 1px solid transparent;
        color: ${c.tintText};
        &:hover:not(:disabled) {
          background: ${c.tintHover};
        }
      `;
    case 'link':
      return css`
        background: transparent;
        border: none;
        color: ${c.text};
        text-decoration: underline;
        &:hover:not(:disabled) {
          opacity: 0.8;
        }
      `;
  }
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const buttonBase = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  line-height: 1;
  height: ${({ $size, $variant }) => ($variant === 'link' ? 'auto' : sizeMap[$size].height)};
  padding: ${({ $size, $variant }) => ($variant === 'link' ? '0' : sizeMap[$size].padding)};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};
  ${({ $color, $variant }) => variantStyles(colorMap[$color], $variant)}
  &:active:not(:disabled) {
    transform: ${({ $variant }) => ($variant !== 'link' ? 'scale(0.97)' : 'none')};
  }
  &:focus-visible {
    outline: 3px solid ${({ $color }) => colorMap[$color].border};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.45;
    pointer-events: none;
    cursor: not-allowed;
  }
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
    `}
  @media (prefers-reduced-motion: no-preference) {
    transition:
      background 100ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 50ms cubic-bezier(0.4, 0, 0.2, 1),
      color 100ms cubic-bezier(0.4, 0, 0.2, 1),
      border-color 100ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonBase}
`;

export const StyledIconButton = styled.button<StyledButtonProps>`
  ${buttonBase}
`;

export const StyledSpinner = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  animation: ${spin} 0.75s linear infinite;
`;

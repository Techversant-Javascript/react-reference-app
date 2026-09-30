import styled, { css, keyframes } from 'styled-components';
import { TagVariant, TagColor, TagSize } from './Tag.types';

interface StyledTagProps {
  $variant: TagVariant;
  $color: TagColor;
  $size: TagSize;
}

const sizeStyles = {
  sm: css`
    font-size: 11px;
    height: 20px;
    padding: 0 6px;
    gap: 4px;
  `,
  md: css`
    font-size: 12px;
    height: 24px;
    padding: 0 8px;
    gap: 6px;
  `,
  lg: css`
    font-size: 14px;
    height: 32px;
    padding: 0 12px;
    gap: 8px;
  `,
};

const colorMap = {
  brand: {
    bg: 'var(--color-brand-500)',
    softBg: 'var(--color-brand-50)',
    text: 'var(--color-white)',
    softText: 'var(--color-brand-500)',
    border: 'var(--color-brand-500)',
  },
  success: {
    bg: 'var(--green-500)',
    softBg: 'var(--green-50)',
    text: 'var(--color-white)',
    softText: 'var(--green-700)',
    border: 'var(--green-500)',
  },
  warning: {
    bg: 'var(--amber-500)',
    softBg: 'var(--amber-50)',
    text: 'var(--color-black)',
    softText: 'var(--amber-700)',
    border: 'var(--amber-500)',
  },
  danger: {
    bg: 'var(--red-500)',
    softBg: 'var(--red-50)',
    text: 'var(--color-white)',
    softText: 'var(--red-700)',
    border: 'var(--red-500)',
  },
  neutral: {
    bg: 'var(--gray-500)',
    softBg: 'var(--gray-100)',
    text: 'var(--color-white)',
    softText: 'var(--gray-700)',
    border: 'var(--gray-400)',
  },
  info: {
    bg: 'var(--blue-500)',
    softBg: 'var(--blue-50)',
    text: 'var(--color-white)',
    softText: 'var(--blue-700)',
    border: 'var(--blue-500)',
  },
};

const variantStyles = (variant: TagVariant, color: TagColor) => {
  const c = colorMap[color];

  switch (variant) {
    case 'solid':
      return css`
        background: ${c.bg};
        color: ${c.text};
      `;

    case 'outline':
      return css`
        background: transparent;
        color: ${c.border};
        border: 1px solid ${c.border};
      `;

    case 'soft':
      return css`
        background: ${c.softBg};
        color: ${c.softText};
      `;

    case 'ghost':
      return css`
        background: transparent;
        color: ${c.softText};
      `;
  }
};

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledTag = styled.span<StyledTagProps & { $checkable?: boolean; $checked?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant, $color }) => variantStyles($variant, $color)}

  ${({ $checkable, $checked, $color }) =>
    $checkable &&
    css`
      cursor: pointer;
      user-select: none;
      ${!$checked &&
      css`
        background: transparent;
        color: var(--gray-500);
        border: 1px transparent;
        &:hover {
          color: ${colorMap[$color].softText};
          background: ${colorMap[$color].softBg};
        }
      `}
      ${$checked &&
      css`
        background: ${colorMap[$color].bg};
        color: ${colorMap[$color].text};
        &:hover {
          opacity: 0.9;
        }
      `}
    `}
`;

export const IconWrapper = styled.span<{ $isProcessing?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.1em;
    height: 1.1em;
    ${({ $isProcessing }) =>
      $isProcessing &&
      css`
        animation: ${spin} 2s linear infinite;
      `}
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.6;
  transition: opacity 0.2s ease, background 0.2s ease;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;

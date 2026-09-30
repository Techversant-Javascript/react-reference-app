import styled, { css, keyframes } from 'styled-components';
import { BadgeVariant, BadgeColor, BadgeSize } from './Badge.types';

interface StyledBadgeProps {
  $variant: BadgeVariant;
  $color: BadgeColor;
  $size: BadgeSize;
}

const sizeStyles = {
    sm: css`
      font-size: 12px;
      padding: 2px 6px;
    `,
    md: css`
      font-size: 13px;
      padding: 4px 8px;
    `,
    lg: css`
      font-size: 14px;
      padding: 6px 10px;
    `,
  };

  const colorMap = {
    brand: {
      bg: 'var(--color-brand-500)',
      softBg: 'var(--color-brand-50)',
      text: 'var(--color-white)',
      softText: 'var(--color-brand-700)',
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
      softText: 'var(--color-text-secondary)',
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

  const variantStyles = (
    variant: BadgeVariant,
    color: BadgeColor
  ) => {
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

  export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-weight: 500;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant, $color }) => variantStyles($variant, $color)}
`;

// for animation
const pulse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.4);
    opacity: 0;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`;

export const Dot = styled.span<{ $color: BadgeColor }>`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;

  background: ${({ $color }) => colorMap[$color].softBg};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ $color }) => colorMap[$color].bg};
    animation: ${pulse} 1.5s infinite;
  }
`;

export const StyledBadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledBadgeBubble = styled.div<{ $color?: string; $dot?: boolean }>`
  position: absolute;
  top: -4px;
  right: -4px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ $dot }) => ($dot ? '8px' : '16px')};
  height: ${({ $dot }) => ($dot ? '8px' : '16px')};

  padding: ${({ $dot }) => ($dot ? '0' : '0 4px')};

  border-radius: 999px;

  background: var(--color-danger-500);
  color: var(--color-white);

  font-size: 10px;
  line-height: 1;

  box-sizing: border-box;
  white-space: nowrap;
`;
export const DemoBox = styled.div`
  width: 40px;
  height: 40px;
  background: var(--color-gray-400);
  border-radius: 6px;
  border: 1px solid var(--color-gray-400);
`;
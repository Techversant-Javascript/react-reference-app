import styled, { css } from 'styled-components';
import type { AvatarSize, AvatarStatus } from './Avatar.types';

const sizeMap: Record<AvatarSize, string> = {
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '56px',
  xl: '72px',
};

const fontSizeMap: Record<AvatarSize, string> = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '24px',
};

export const AvatarWrapper = styled.div<{ $size: AvatarSize }>`
  position: relative;
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-100);
  font-weight: 500;
  color: var(--color-text-secondary);
  overflow: visible;
  flex-shrink: 0;
`;
export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; 
`;

export const AvatarFallback = styled.span<{ $size: AvatarSize }>`
  font-size: ${({ $size }) => fontSizeMap[$size]};
  line-height: 1;
  text-transform: uppercase;
`;

export const StatusDot = styled.span<{ $status: AvatarStatus }>`
  position: absolute;
  bottom: 1px;
  right: 2px;
  width: 25%;
  height: 25%;
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  border: 2px solid var(--color-surface);
  box-shadow: var(--sh-1);

  ${({ $status }) => {
    switch ($status) {
      case 'online':
        return css`background: var(--color-success-500);`;
      case 'offline':
        return css`background: var(--color-gray-400);`;
      case 'away':
        return css`background: var(--color-warning-500);`;
    }
  }}
`;

export const GroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupItem = styled.div<{ $index: number }>`
  margin-left: -12px;
  position: relative;
  z-index: ${({ $index }) => 100 - $index};
  border: 2px solid var(--color-surface);
  border-radius: 50%;
  background: var(--color-surface);


  &:first-child {
    margin-left: 0;
  }
`;
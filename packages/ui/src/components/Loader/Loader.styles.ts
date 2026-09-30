import styled, { keyframes, css } from 'styled-components';
import type { LoaderSize, SkeletonShape } from './Loader.types';

// Animations
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`;

// Helper for sizes
const getSize = (size: LoaderSize) => {
  switch (size) {
    case 'xs': return '12px';
    case 'sm': return '16px';
    case 'md': return '24px';
    case 'lg': return '32px';
    case 'xl': return '48px';
    default: return size;
  }
};

// Spinner Styles
export const SpinnerRoot = styled.div<{ $size: LoaderSize; $color?: string }>`
  display: inline-block;
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  border: 2px solid ${({ $color }) => $color || 'var(--color-gray-200)'};
  border-top-color: ${({ $color }) => $color || 'var(--color-brand-500)'};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

// Skeleton Styles
export const SkeletonRoot = styled.div<{
  $width?: string | number;
  $height?: string | number;
  $shape: SkeletonShape;
  $animation: 'pulse' | 'shimmer' | 'none';
}>`
  display: block;
  background-color: var(--color-gray-200);
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width || '100%')};
  height: ${({ $height, $shape }) => {
    if ($height) return typeof $height === 'number' ? `${$height}px` : $height;
    if ($shape === 'circle') return 'auto'; 
    if ($shape === 'text') return '1em';
    return '1.25rem';
  }};
  
  border-radius: ${({ $shape }) => ($shape === 'circle' ? '50%' : 'var(--radius-md)')};
  
  ${({ $shape, $width }) => $shape === 'circle' && css`
    aspect-ratio: 1 / 1;
    width: ${$width ? (typeof $width === 'number' ? `${$width}px` : $width) : '3rem'};
  `}

  ${({ $animation }) => $animation === 'pulse' && css`
    animation: ${pulse} 1.5s ease-in-out infinite;
  `}

  ${({ $animation }) => $animation === 'shimmer' && css`
    background: linear-gradient(
      90deg,
      var(--color-gray-200) 25%,
      var(--color-gray-100) 37%,
      var(--color-gray-200) 63%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;
  `}
`;

// Progress Bar Styles
export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
`;

export const ProgressBarRoot = styled.div<{ $height?: string | number }>`
  width: 100%;
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height || '8px')};
  background-color: var(--color-gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $percent: number; $color?: string }>`
  height: 100%;
  width: ${({ $percent }) => `${$percent}%`};
  background-color: ${({ $color }) => $color || 'var(--color-brand-500)'};
  border-radius: var(--radius-full);
  transition: width 0.3s ease-out;
`;

// Dots Loader Styles
export const DotsRoot = styled.div<{ $size: LoaderSize; $color?: string }>`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.span<{ $size: LoaderSize; $color?: string; $delay: string }>`
  width: ${({ $size }) => {
    const s = getSize($size);
    return `calc(${s} / 3)`;
  }};
  height: ${({ $size }) => {
    const s = getSize($size);
    return `calc(${s} / 3)`;
  }};
  background-color: ${({ $color }) => $color || 'var(--color-brand-500)'};
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${({ $delay }) => $delay};
`;

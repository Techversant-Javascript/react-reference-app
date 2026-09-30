import React from 'react';
import type { LoaderProps } from './Loader.types';
import {
  SpinnerRoot,
  SkeletonRoot,
  ProgressWrapper,
  ProgressHeader,
  ProgressBarRoot,
  ProgressFill,
  DotsRoot,
  Dot
} from './Loader.styles';

export const Loader: React.FC<LoaderProps> = ({
  variant = 'spinner',
  size = 'md',
  color,
  className,
  'aria-label': ariaLabel,
  width,
  height,
  shape = 'rect',
  animation = 'shimmer',
  value = 0,
  max = 100,
  showValue = false,
  label,
}) => {
const safeMax = max > 0 ? max : 1;
const clampedValue = Math.min(Math.max(value, 0), safeMax);
const percent = (clampedValue / safeMax) * 100;

  switch (variant) {
    case 'skeleton':
      return (
        <SkeletonRoot
           $width={width}
          $height={height}
          $shape={shape}
          $animation={animation}
          className={className}
          aria-hidden="true"
        />
      );

    case 'progress':
      return (
        <ProgressWrapper className={className}>
          {(label || showValue) && (
            <ProgressHeader>
              {label && <span>{label}</span>}
              {showValue && <span>{Math.round(percent)}%</span>}
            </ProgressHeader>
          )}
          <ProgressBarRoot   
                $height={height}
                role="progressbar"
                aria-valuenow={clampedValue}
                aria-valuemin={0}
                aria-valuemax={safeMax}>
            <ProgressFill $percent={percent} $color={color} />
          </ProgressBarRoot>
        </ProgressWrapper>
      );

    case 'dots':
      return (
        <DotsRoot $size={size} className={className} role="status" aria-label={ariaLabel || 'Loading...'}>
          <Dot $size={size} $color={color} $delay="-0.32s" />
          <Dot $size={size} $color={color} $delay="-0.16s" />
          <Dot $size={size} $color={color} $delay="0s" />
        </DotsRoot>
      );

    case 'spinner':
    default:
      return (
        <SpinnerRoot
          $size={size}
          $color={color}
          className={className}
          role="status"
          aria-label={ariaLabel || 'Loading...'}
        />
      );
  }
};

Loader.displayName = 'Loader';

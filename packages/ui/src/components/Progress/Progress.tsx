import { forwardRef } from 'react';
import { CircularLabel, CircularWrapper, LinearFill, LinearTrack, ProgressWrapper, TextProgress, } from './Progress.styles';
import { ProgressProps } from './Progress.types';

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      variant = 'linear',
      label,
      formatLabel,
      size = 120,
      strokeWidth = 10,
      ...rest
    },
    ref,
  ) => {
    const percentage = Math.min(
      Math.max((value / max) * 100, 0),
      100,
    );

    const computedLabel = formatLabel
      ? formatLabel(value, max)
      : `${Math.round(percentage)}%`;

    const displayLabel = label ?? computedLabel;

    if (variant === 'text') {
      return (
        <TextProgress ref={ref} {...rest}>
          {displayLabel}
        </TextProgress>
      );
    }

    if (variant === 'circular') {
      const radius = (size - strokeWidth) / 2;

      const circumference = 2 * Math.PI * radius;

      const dashOffset =
        circumference - (percentage / 100) * circumference;

      return (
        <CircularWrapper ref={ref} {...rest}>
          <svg
            width={size}
            height={size}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="var(--blue-50)"
              strokeWidth={strokeWidth}
              fill="none"
            />

            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="var(--blue-700)"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>

          <CircularLabel>{displayLabel}</CircularLabel>
        </CircularWrapper>
      );
    }

    return (
      <ProgressWrapper
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...rest}
      >
        <LinearTrack className='h-8'>
          <LinearFill $percentage={percentage} />
        </LinearTrack>

        <TextProgress>{displayLabel}</TextProgress>
      </ProgressWrapper>
    );
  },
);

Progress.displayName = 'Progress';
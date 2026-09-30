import { forwardRef } from 'react';
import type { ButtonProps, IconButtonProps } from './Button.types';
import { StyledButton, StyledIconButton, StyledSpinner } from './Button.styles';

function Spinner() {
  return (
    <StyledSpinner viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="10"
        opacity="0.3"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </StyledSpinner>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'brand',
      size = 'md',
      isLoading = false,
      children,
      leftIcon,
      rightIcon,
      disabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $color={color}
        $size={size}
        $isLoading={isLoading}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...rest}
      >
        {isLoading ? <Spinner /> : leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      'aria-label': ariaLabel,
      size = 'md',
      variant = 'solid',
      color = 'brand',
      isLoading = false,
      disabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledIconButton
        ref={ref}
        $variant={variant}
        $color={color}
        $size={size}
        $isLoading={isLoading}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        aria-label={ariaLabel}
        {...rest}
      >
        {isLoading ? <Spinner /> : icon}
      </StyledIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';

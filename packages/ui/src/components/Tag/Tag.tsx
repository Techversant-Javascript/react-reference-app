

import React, { forwardRef } from 'react';
import { StyledTag, CloseButton, IconWrapper } from './Tag.styles';
import { TagProps, TagVariant, TagColor, TagSize } from './Tag.types';

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = 'soft',
      color = 'brand',
      size = 'md',
      icon,
      checkable,
      checked,
      onCheck,
      loading,
      children,
      onRemove,
      onClick,
      ...rest
    },
    ref
  ) => {
    const renderIcon = () => {
      if (loading) {
        return (
          <IconWrapper $isProcessing className={children ? 'mr-1' : 'mr-0'}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6"></path>
              <path d="M1 20v-6h6"></path>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          </IconWrapper>
        );
      }

      if (icon && React.isValidElement(icon)) {
        return (
          <IconWrapper className={children ? 'mr-1' : 'mr-0'}>
            {icon}
          </IconWrapper>
        );
      }

      return null;
    };

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      if (checkable && onCheck) {
        onCheck(!checked);
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <StyledTag
        ref={ref}
        {...rest}
        $variant={variant as TagVariant}
        $color={color as TagColor}
        $size={size as TagSize}
        $checkable={checkable}
        $checked={checked}
        onClick={handleClick}
      >
        {renderIcon()}
        {children}
        {onRemove && (
          <CloseButton
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-1"
            aria-label="Remove tag"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </CloseButton>
        )}
      </StyledTag>
    );
  }
);

Tag.displayName = 'Tag';

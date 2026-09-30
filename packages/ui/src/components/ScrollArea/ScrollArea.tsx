import React, { forwardRef } from 'react';
import { StyledScrollArea } from './ScrollArea.styles';
import { ScrollAreaProps } from './ScrollArea.types';

export const ScrollArea = forwardRef<
  HTMLDivElement,
  ScrollAreaProps
>(
  (
    {
      variant = 'default',
      maxHeight,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledScrollArea
        ref={ref}
        $variant={variant}
        $maxHeight={maxHeight}
        {...props}
      >
        {children}
      </StyledScrollArea>
    );
  },
);

ScrollArea.displayName = 'ScrollArea';
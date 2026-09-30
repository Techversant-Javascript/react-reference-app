import { forwardRef } from 'react';
import { StyledBadge, Dot, StyledBadgeWrapper, StyledBadgeBubble } from './Badge.styles';
import { BadgeProps } from './Badge.types';

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({
    variant = 'solid',
    color = 'brand',
    size = 'md',
    isLive = false,
    children,
    max,
    count,
    dot,
    ...rest
  },
    ref,
  ) => {

    const displayCount =
    count !== undefined &&
    max !== undefined &&
    count > max
      ? `${max}+`
      : count;

    const isNotification = dot || typeof count === 'number';

    if (isNotification) {
      return (
        <StyledBadgeWrapper ref={ref}>
          {children}

          <StyledBadgeBubble $color={color} $dot={dot}>
            {dot ? '' : displayCount}
          </StyledBadgeBubble>
        </StyledBadgeWrapper>
      );
    }
    return (
      <StyledBadge
        ref={ref}
        $variant={variant}
        $color={color}
        $size={size}
        {...rest}>
        {isLive && <Dot $color={color} />}
        {children}
      </StyledBadge>
    );

  }
);

Badge.displayName = 'Badge';
import { forwardRef } from "react";
import { MarqueeContent, MarqueeRoot, MarqueeTrack, } from "./Marquee.styles";
import { MarqueeProps } from "./Marquee.types";

export const Marquee = forwardRef<
  HTMLDivElement,
  MarqueeProps
>(
  (
    {
      variant = "basic",
      duration = "20s",
      gap = "2rem",
      pauseOnHover = true,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <MarqueeRoot
        ref={ref}
        $variant={variant}
        $duration={duration}
        $gap={gap}
        $pauseOnHover={pauseOnHover}
        {...rest}
      >
        <MarqueeTrack
          $variant={variant}
          $duration={duration}
          $gap={gap}
          $pauseOnHover={pauseOnHover}
          aria-hidden="true"
        >
          <MarqueeContent>{children}</MarqueeContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <MarqueeContent
              key={index}
              aria-hidden="true"
            >
              {children}
            </MarqueeContent>
          ))}
        </MarqueeTrack>
      </MarqueeRoot>
    );
  }
);

Marquee.displayName = "Marquee";
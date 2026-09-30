import styled, { css, keyframes } from "styled-components";

const horizontalScroll = keyframes`
  from {
    transform: translateX(0);
}

  to {
    transform: translateX(-20%);
  }
`;

const horizontalReverseScroll = keyframes`
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
`;

const verticalScroll = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-20%);
  }
`;

interface StyledProps {
    $variant: "basic" | "reverse" | "vertical";
    $duration: string;
    $gap: string;
    $pauseOnHover: boolean;
}

export const MarqueeRoot = styled.div<StyledProps>`
  --marquee-duration: ${({ $duration }) => $duration};
  --marquee-gap: ${({ $gap }) => $gap};

  overflow: hidden;
  width: 100%;
  position: relative;
`;

export const MarqueeTrack = styled.div<StyledProps>`
  display: flex;
  gap: var(--marquee-gap);
  flex-wrap: nowrap;
  width: max-content;
  ${({ $variant }) =>
        $variant === "vertical"
            ? css`
          flex-direction: column;
          animation: ${verticalScroll}
            var(--marquee-duration)
            linear
            infinite;
        `
            : $variant === "reverse"
                ? css`
          flex-direction: row;
          animation: ${horizontalReverseScroll}
            var(--marquee-duration)
            linear
            infinite;
        `
                : css`
          flex-direction: row;
          animation: ${horizontalScroll}
            var(--marquee-duration)
            linear
            infinite;
        `}

  ${({ $pauseOnHover }) =>
        $pauseOnHover &&
        css`
      &:hover {
        animation-play-state: paused;
      }
    `}
`;

export const MarqueeContent = styled.div`
  flex-shrink: 0;
`;
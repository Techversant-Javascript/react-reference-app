import styled, { css } from "styled-components";
import { SliderVariant,SliderSize } from "./RangeSlider.types";

interface StyledProps {
    variant: SliderVariant;
    size?: SliderSize;
    orientation: "horizontal" | "vertical";
}

const sizeStyles = {
  sm: {
    track: "4px",
    thumb: "12px",
  },
  md: {
    track: "6px",
    thumb: "16px",
  },
  lg: {
    track: "8px",
    thumb: "20px",
  },
};

const variantStyles = {
    primary: css`
    --track-color: var(--color-gray-500);
    --thumb-color: var(--color-info-500);
  `,
    secondary: css`
    --track-color: var(--color-gray-400);
    --thumb-color: var(--blue-400);
  `,
};

export const SliderInner = styled.div<{ orientation: "horizontal" | "vertical" }>`
  position: relative;
  width: 100%;

  ${({ orientation }) =>
    orientation === "vertical" &&
    css`
      width: auto; 
      
    `}
`;

export const SliderWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 50%;

  ${({ orientation }) =>
        orientation === "vertical" &&
        css`
      flex-direction: column;
      height: 200px;
      justify-content: center;
      align-items: center;
      gap: 12px;

      width: fit-content;
      margin: 0 auto;   
    `}
`;

export const StyledRange = styled.input<StyledProps>`
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
 height: ${({ size = "md" }) => sizeStyles[size].track}; 
  border-radius: 4px;
  outline: none;

  ${({ variant }) => variantStyles[variant]}

  background: var(--track-color);

  ${({ orientation }) =>
        orientation === "vertical" &&
        css`
      transform: rotate(-90deg);
      width: 150px;
    `}
    
 background: ${({ value = 0, min = 0, max = 100, orientation }) => {
  const percentage =
    ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;

  if (orientation === "vertical") {
    return `linear-gradient(
      to top,
      var(--thumb-color) 0%,
      var(--thumb-color) ${percentage}%,
      var(--track-color) ${percentage}%,
      var(--track-color) 100%
    )`;
  }

  return `linear-gradient(
    to right,
    var(--thumb-color) 0%,
    var(--thumb-color) ${percentage}%,
    var(--track-color) ${percentage}%,
    var(--track-color) 100%
  )`;
}};

  /* Track */
&::-webkit-slider-runnable-track {
  height: ${({ size = "md" }) => sizeStyles[size].track};
  border-radius: 999px;
}

&::-moz-range-track {
  height: ${({ size = "md" }) => sizeStyles[size].track};
  border-radius: 999px;
}

  /* Thumb */
  &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;

 height: ${({ size = "md" }) => sizeStyles[size].thumb};
width: ${({ size = "md" }) => sizeStyles[size].thumb};
  border-radius: 50%;

  background: var(--thumb-color);
  border: 2px solid white;
  box-shadow: 0 0 0 1px var(--thumb-color);

  cursor: pointer;
  margin-top: -5px;
}

&::-moz-range-thumb {
 height: ${({ size = "md" }) => sizeStyles[size].thumb};
 width: ${({ size = "md" }) => sizeStyles[size].thumb};
  border-radius: 50%;

  background: var(--thumb-color);
  border: 2px solid white;

  cursor: pointer;
}
`;

export const ValueLabel = styled.span<{ orientation: "horizontal" | "vertical" }>`
  font-size: 12px;
  color: var(--color-text-primary);

  ${({ orientation }) =>
    orientation === "vertical" &&
    css`
    margin-top: 8px;  
    text-align: center;
    `}
`;

export const Tooltip = styled.div<{ $left?: string }>`
  position: absolute;
  top: -35px;

  transform: translateX(-50%);
  padding: 4px 8px;

  font-size: 12px;
  border-radius: 4px;

  background: var(--color-gray-800);
  color: white;

  white-space: nowrap;
  pointer-events: none;
  z-index: 10;

&::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 4px;
  border-style: solid;
  border-color: var(--color-gray-800) transparent transparent transparent;
}
   left: ${props => props.$left ?? '0'};
`;

export const VerticalContainer = styled.div`
  position: relative;
  height: 150px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

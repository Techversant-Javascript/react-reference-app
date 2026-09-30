import React, { useState } from "react";
import { RangeSliderProps } from "./RangeSlider.types";
import {
    SliderInner,
    SliderWrapper,
    StyledRange,
    Tooltip,
    ValueLabel,
    VerticalContainer,
} from "./RangeSlider.styles";

export const RangeSlider = React.forwardRef<
    HTMLInputElement,
    RangeSliderProps
>(
    (
        {
            variant = "primary",
            size = "md",
            orientation = "horizontal",
            showValue = false,
            value,
            defaultValue = 0,
            onChange,
            showTooltip = false,
            ...rest
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = useState(
            value ?? defaultValue
        );

        const [isDragging, setIsDragging] = useState(false);
        const [isHovering, setIsHovering] = useState(false);

        const isControlled = value !== undefined;
        const currentValue = isControlled ? value : internalValue;

        const minValue = Number(rest.min ?? 0);
        const maxValue = Number(rest.max ?? 100);

        const percentage =
            ((Number(currentValue) - minValue) / (maxValue - minValue)) * 100;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!isControlled) {
                setInternalValue(Number(e.target.value));
            }
            onChange?.(e);
        };
        return (
            <SliderWrapper
              size={size}
              variant={variant}
              orientation={orientation}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {orientation === "vertical" ? (
                <VerticalContainer>
                  <StyledRange
                    size={size}
                    ref={ref}
                    type="range"
                    value={currentValue}
                    min={rest.min}
                    max={rest.max}
                    onChange={handleChange}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    variant={variant}
                    orientation={orientation}
                    {...rest}
                  />
          
                  {showTooltip && (isDragging || isHovering) && (
                    <Tooltip $left={`${percentage}%`}>
                    {currentValue}
                  </Tooltip>
                  )}
                </VerticalContainer>
              ) : (
                <SliderInner orientation={orientation}>
                  <StyledRange
                    size={size}
                    ref={ref}
                    type="range"
                    value={currentValue}
                    min={rest.min}
                    max={rest.max}
                    onChange={handleChange}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    variant={variant}
                    orientation={orientation}
                    {...rest}
                  />
          
                  {showTooltip && (isDragging || isHovering) && (
                    <Tooltip $left={`${percentage}%`}>
                    {currentValue}
                  </Tooltip>
                  )}
                </SliderInner>
              )}
          
              {/*COMMON VALUE LABEL (works for both) */}
              {showValue && !showTooltip && (
                <ValueLabel orientation={orientation}>
                  {currentValue}
                </ValueLabel>
              )}
            </SliderWrapper>
          );
    }
);

RangeSlider.displayName = "RangeSlider";
import {forwardRef,useState,} from 'react';
import { RatingContainer, RatingItem } from './Rating.styles';
import { RatingProps } from './Rating.types';
  
  const DefaultStar = () => <>★</>;
  
  export const Rating = forwardRef<HTMLDivElement, RatingProps>(
    (
      {
        value,
        defaultValue = 0,
        max = 5,
        size = 'md',
        readOnly = false,
        disabled = false,
        icon,
        onChange,
        className,
      },
      ref,
    ) => {
      const [internalValue, setInternalValue] =
        useState(defaultValue);
  
      const currentValue =
        value !== undefined ? value : internalValue;
  
      const handleSelect = (rating: number) => {
        if (readOnly || disabled) return;
  
        if (value === undefined) {
          setInternalValue(rating);
        }
  
        onChange?.(rating);
      };
  
      return (
        <RatingContainer
          ref={ref}
          className={className}
          $size={size}
          $disabled={disabled}
          role="radiogroup"
          aria-label="Rating"
        >
          {Array.from({ length: max }, (_, index) => {
            const ratingValue = index + 1;
  
            return (
              <RatingItem
                key={ratingValue}
                type="button"
                role="radio"
                aria-checked={
                  currentValue === ratingValue
                }
                aria-label={`${ratingValue} Star`}
                $active={ratingValue <= currentValue}
                $readOnly={readOnly}
                onClick={() =>
                  handleSelect(ratingValue)
                }
              >
                {icon ?? <DefaultStar />}
              </RatingItem>
            );
          })}
        </RatingContainer>
      );
    },
  );
  
  Rating.displayName = 'Rating';
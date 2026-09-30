import React, { forwardRef } from 'react';
import { Wrapper,Label,InlineContainer,StyledInput,ColorValue,HelperText,} from './ColorPicker.styles';
import { ColorPickerProps } from './ColorPicker.types';

export const ColorPicker = forwardRef<HTMLInputElement,ColorPickerProps>(
  (
    {
      value = '#000000',
      variant = 'basic',
      label,
      helperText,
      error = false,
      id,
      onValueChange,
      ...rest
    },
    ref,
  ) => {
    const helperId = helperText
      ? `${id}-helper`
      : undefined;

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      onValueChange?.(event.target.value);
    };

    const input = (
      <StyledInput
        {...rest}
        ref={ref}
        id={id}
        type="color"
        value={value}
        onChange={handleChange}
        aria-invalid={error}
        aria-describedby={helperId}
      />
    );

    return (
      <Wrapper>
        {label && (
          <Label htmlFor={id}>
            {label}
          </Label>
        )}

        {variant === 'inline' ? (
          <InlineContainer>
            {input}
            <ColorValue>{value}</ColorValue>
          </InlineContainer>
        ) : (
          input
        )}

        {helperText && (
          <HelperText
            id={helperId}
            $error={error}
          >
            {helperText}
          </HelperText>
        )}
      </Wrapper>
    );
  },
);

ColorPicker.displayName = 'ColorPicker';
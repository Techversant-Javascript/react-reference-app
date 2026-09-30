import { forwardRef } from "react";
import { RadioProps } from "./Radio.types";
import { Wrapper, HiddenRadio, StyledRadio, LabelText, sizeStyles } from "./Radio.styles";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      checked = false,
      disabled = false,
      variant = "default",
      size = "medium",
      inputRef,
      ...rest
    },
    ref
    
  ) => {
    const { onChange, ...inputProps } = rest;
    return (
      
      <Wrapper $disabled={disabled}>
        <HiddenRadio
          ref={(el) => {
            if (typeof ref === "function") ref(el);
            else if (ref)
              (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
          
            if (inputRef) inputRef(el);
          }}
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={onChange}  
          {...inputProps}
        />

        <StyledRadio
          $checked={checked}
          $disabled={disabled}
          $variant={variant}
          $size={sizeStyles[size]}
        />

        {label && <LabelText>{label}</LabelText>}
      </Wrapper>
    );
  }
);

Radio.displayName = "Radio";
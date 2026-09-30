import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { CheckboxProps } from "./Checkbox.types";
import { Box, HiddenInput, LabelText, Wrapper } from "./Checkbox.styles";


export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
      {
        label,
        checked,
        indeterminate = false,
        disabled = false,
        onChange,
        ...rest
      },
      ref
    ) => {
      const internalRef = useRef<HTMLInputElement>(null);
  
      //expose internal ref to parent
      useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);
  
      //Handle indeterminate state
      useEffect(() => {
        if (internalRef.current) {
          internalRef.current.indeterminate = indeterminate;
        }
      }, [indeterminate]);
  
      return (
        <Wrapper>
          <HiddenInput
            type="checkbox"
            checked={checked}
            disabled={disabled}
            ref={internalRef} 
            onChange={onChange}
            {...rest}
          />
  
          <Box
            $checked={checked}
            $indeterminate={indeterminate}
            $disabled={disabled}
          >
            {checked && "✓"}
            {!checked && indeterminate && "—"}
          </Box>
  
          {label && <LabelText>{label}</LabelText>}
        </Wrapper>
      );
    }
  );
  
  Checkbox.displayName = "Checkbox";
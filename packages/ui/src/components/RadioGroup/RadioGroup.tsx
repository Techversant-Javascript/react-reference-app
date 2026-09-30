import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { RadioGroupProps } from "./RadioGroup.types";
import { GroupWrapper, OptionWrapper } from "./RadioGroup.styles";
import { RadioProps } from "../Radio/Radio.types";

export const RadioGroup = ({
  value,
  onChange,
  name,
  children,
  direction = "column",
  buttonStyle = "outline",
  options,
}: RadioGroupProps) => {
  const radiosRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (!options) return;
    const index = options.findIndex((opt) => opt.value === value);
    if (index !== -1) setFocusedIndex(index);
  }, [value, options]);

  const [focusedIndex, setFocusedIndex] = useState(0);

  const isOptionsMode = !!options;

  const items = isOptionsMode
  ? options.map((opt, index) => {
      const checked = value === opt.value;
      const isFocused = index === focusedIndex;

      return (
        <OptionWrapper
          key={opt.value}
          role="radio"
          aria-checked={checked}
          tabIndex={isFocused ? 0 : -1}
          $checked={checked}
          $focused={isFocused}
          $buttonStyle={buttonStyle}
          onClick={() => {
            if (!opt.disabled) {
              setFocusedIndex(index);
              onChange(opt.value);
            }
          }}
        >
          {opt.label}
        </OptionWrapper>
      );
    })
  : Children.map(children, (child, index) => {
      if (!isValidElement<RadioProps>(child)) return child;

      return cloneElement(child, {
        name,
        checked: child.props.value === value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value),
        inputRef: (el: HTMLInputElement | null) => {
          if (el) radiosRef.current[index] = el;
        },
      });
    });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!options) return;
  
    let nextIndex = focusedIndex;
  
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIndex = (focusedIndex + 1) % options.length;
    }
  
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIndex = (focusedIndex - 1 + options.length) % options.length;
    }
  
    if (nextIndex !== focusedIndex) {
      e.preventDefault();
      setFocusedIndex(nextIndex);         
      onChange(options[nextIndex].value);
    }
  
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFocusedIndex(focusedIndex); 
      onChange(options[focusedIndex].value);
    }
  };

  return (
    <GroupWrapper role="radiogroup" $direction={direction} onKeyDown={handleKeyDown}>
      {items}
    </GroupWrapper>
  );
};
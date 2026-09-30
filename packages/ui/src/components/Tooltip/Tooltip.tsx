import React, { useState, useRef, useEffect, cloneElement, useId } from "react";
import type { TooltipProps } from "./Tooltip.types";
import { Wrapper, TooltipBox, Arrow } from "./Tooltip.styles";

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = "top",
  disabled = false,
  showArrow = true,
  open,
  defaultOpen = false,
  delay = 100,
}) => {
  const id = useId();
  const [visible, setVisible] = useState(defaultOpen);
  const timeoutRef = useRef<number>();
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : visible;

  const show = () => {
    if (disabled) return;

    timeoutRef.current = window.setTimeout(() => {
      if (!isControlled) setVisible(true);
    }, delay);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);

    if (!isControlled) setVisible(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Wrapper onMouseEnter={show} onMouseLeave={hide}>
      {cloneElement(children, {
        "aria-describedby": isOpen ? id : undefined,
      })}

      <TooltipBox
        role="tooltip"
        id={id}
        $placement={placement}
        $visible={!!isOpen}
      >
        {content}

        {showArrow && <Arrow $placement={placement} />}
      </TooltipBox>
    </Wrapper>
  );
};

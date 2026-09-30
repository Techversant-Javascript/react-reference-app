import styled, { css } from "styled-components";
import { AccordionVariant, AccordionSize } from "./Accordion.types";

/* Size styles */
const sizeStyles = {
  sm: css`
    padding: 8px 12px;
    font-size: 12px;
  `,
  md: css`
    padding: 12px 16px;
    font-size: 14px;
  `,
  lg: css`
    padding: 16px 20px;
    font-size: 16px;
  `,
};

export const AccordionWrapper = styled.div`
  width: 100%;
`;

export const Item = styled.div<{ variant: AccordionVariant }>`
  border-bottom: 1px solid var(--color-gray-300);

  ${({ variant }) =>
    variant === "bordered" &&
    css`
      border: 1px solid var(--color-gray-300);
      border-radius: 6px;
      margin-bottom: 8px;
    `}

  ${({ variant }) =>
    variant === "ghost" &&
    css`
      border: none;
      margin-bottom: 0;
    `}
`;

export const Header = styled.button<{
  size: AccordionSize;
  variant: AccordionVariant;
  disabled?: boolean;
}>`
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;

  color: var(--color-text-primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ size }) => sizeStyles[size]}

  &:hover {
    ${({ variant }) =>
        variant !== "ghost" &&
        css`
          background: var(--color-bg);
        `}
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

export const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;

  &[data-open="true"] {
    transform: rotate(180deg);
  }

  &[data-open="false"] {
    transform: rotate(0deg);
  }
`;

export const ContentWrapper = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  transition: max-height 0.3s ease;
`;

export const Content = styled.div<{ size: AccordionSize }>`
  color: var(--color-text-secondary);

  ${({ size }) => sizeStyles[size]}
`;
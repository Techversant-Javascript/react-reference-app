import styled, { css } from "styled-components";

interface StyledProps {
  $checked?: boolean;
  $disabled?: boolean;
  $variant?: "default" | "primary" | "error";
  $size?: string;
}

export const Wrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  position: relative; 
`;

export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const variantStyles = {
  default: css`
    border-color: var(--color-gray-400);
  `,
  primary: css`
    border-color: var(--color-info-500);
  `,
  error: css`
    border-color: var(--color-danger-500);
  `,
};
const dotColor = {
  default: "var(--color-text-primary)",
  primary: "var(--color-info-500)",
  error: "var(--color-danger-500)",
};

export const StyledRadio = styled.span<StyledProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  border: 2px solid transparent;;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ $variant = "default" }) => variantStyles[$variant]}

  ${({ $checked, $variant = "default" }) =>
    $checked &&
    css`
      border-color: ${dotColor[$variant]};
  
      &::after {
        content: "";
        width: 50%;
        height: 50%;
        border-radius: 50%;
        background-color: ${dotColor[$variant]};
      }
    `}
      `;


export const ButtonRadio = styled.span<StyledProps>`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid;

  ${({ $variant = "default" }) => variantStyles[$variant]}

`;

export const LabelText = styled.span`
  font-size: 14px;
  color: var(--color-text-primary);
`;

export const sizeStyles = {
  small: "12px",
  medium: "16px",
  large: "20px",
};

export const RadioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
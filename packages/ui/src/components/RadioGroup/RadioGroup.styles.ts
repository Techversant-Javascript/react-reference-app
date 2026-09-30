import styled, { css } from "styled-components";

export const GroupWrapper = styled.div<{ $direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 12px;
`;

export const OptionWrapper = styled.label<{
  $checked?: boolean;
  $disabled?: boolean;
  $buttonStyle?: "solid" | "outline";
  $focused?: boolean;
}>`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid var(--color-gray-400);
  cursor: pointer;

  ${({ $focused }) =>
    $focused &&
    css`
      outline: 2px solid var(--color-info-500);
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${({ $checked, $buttonStyle }) =>
    $checked &&
    ($buttonStyle === "solid"
      ? css`
          background-color: var(--color-info-500);
          color: white;
          border-color: var(--color-info-500);
        `
      : css`
          border-color: var(--color-info-500);
        `)}
`;
import styled, { css } from "styled-components";

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
 position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Box = styled.span<{
  $checked?: boolean;
  $indeterminate?: boolean;
  $disabled?: boolean;
}>`
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-gray-400);
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: var(--color-white);

  ${({ $checked }) =>
    $checked &&
    css`
      background: var(--color-brand-500);
      border-color: var(--color-brand-500);
    `}

  ${({ $indeterminate }) =>
    $indeterminate &&
    css`
      background: var(--color-brand-500);
      border-color: var(--color-brand-500);
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      background: var(--color-gray-200);
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

export const LabelText = styled.span`
  font-size: 14px;
  color: var(--color-text-primary);
`;
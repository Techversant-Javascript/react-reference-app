import styled from 'styled-components';

export const Wrapper = styled.div<{
  $disabled?: boolean;
  $error?: boolean;
}>`
  display: inline-flex;
  align-items: center;

  border: 1px solid
    ${({ $error }) =>
      $error
        ? 'var(--color-danger-500)'
        : 'var(--color-gray-400)'};

  border-radius: 6px;
  background: var(--color-white);

  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: var(--blue-400);
  }

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 12px;
  background: transparent;
  color: var(--color-black);
`;

export const StepButton = styled.button`
  border: none;
  background: transparent;

  width: 32px;
  height: 32px;

  cursor: pointer;

  color: var(--color-gray-500);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-gray-100);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const CurrencyPrefix = styled.span`
  padding-left: 12px;

  color: var(--color-gray-500);

  font-size: 14px;
`;
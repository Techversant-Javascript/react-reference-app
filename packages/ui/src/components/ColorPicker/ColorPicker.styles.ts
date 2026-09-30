import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

`;

export const Label = styled.label`
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
`;

export const InlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`;

export const StyledInput = styled.input`
  width: 110px;
  height: 88px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-gray-700);
  }

  &::-moz-color-swatch {
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-gray-500);
  }

  &:focus-visible {
    outline: 2px solid var(--color-focus-ring);
    outline-offset: 2px;
  }
`;

export const ColorValue = styled.span`
  font-size: var(--fs-md);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-gray-300);
  padding: --spacing-5;
`;

export const HelperText = styled.span<{
  $error?: boolean;
}>`
  font-size: var(--font-size-xs);

  color: ${({ $error }) =>
    $error
      ? 'var(--color-danger)'
      : 'var(--color-text-secondary)'};
`;
import styled, { css } from 'styled-components';
import type { TextareaResize, TextareaSize, TextareaVariant } from './Textarea.types';

interface SizeTokens {
  padding: string;
  fontSize: string;
  minHeight: string;
}

export interface StyledTextareaProps {
  $variant: TextareaVariant;
  $size: TextareaSize;
  $resize: TextareaResize;
  $hasError: boolean;
}

const sizeMap: Record<TextareaSize, SizeTokens> = {
  sm: { padding: '8px 12px', fontSize: '13px', minHeight: '80px' },
  md: { padding: '10px 14px', fontSize: '14px', minHeight: '100px' },
  lg: { padding: '12px 16px', fontSize: '16px', minHeight: '120px' },
};

const variantStyles = (variant: TextareaVariant, hasError: boolean) => {
  const errorColor = 'var(--color-danger-500)';
  
  switch (variant) {
    case 'outline':
      return css`
        background: transparent;
        color: var(--color-text-primary);
        border: 1px solid ${hasError ? errorColor : 'var(--color-text-secondary)'};
        &:focus { border-color: ${hasError ? errorColor : 'var(--color-brand-500)'}; }
      `;
    case 'soft':
      return css`
        background: var(--color-gray-100);
        border: 1px solid transparent;
        &:focus { background: var(--color-white); border-color: var(--color-brand-500); }
      `;
    case 'neutral':
      return css`
        background: var(--color-white);
        border: 1px solid var(--color-gray-200);
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      `;
  }
};

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  position: relative;
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  font-family: inherit;
  border-radius: 8px;
  outline: none;
  transition: all 150ms ease;
  resize: ${({ $resize }) => $resize};
  
  padding: ${({ $size }) => sizeMap[$size].padding};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};
  min-height: ${({ $size }) => sizeMap[$size].minHeight};
  
  ${({ $variant, $hasError }) => variantStyles($variant, $hasError)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--color-gray-50);
  }

  &::placeholder {
    color: var(--color-gray-400);
  }
`;

export const CharacterCount = styled.span<{ $isMax: boolean }>`
  align-self: flex-end;
  font-size: 12px;
  color: ${({ $isMax }) => ($isMax ? 'var(--color-danger-500)' : 'var(--color-gray-500)')};
  margin-top: 2px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: var(--color-danger-500);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  

`;

export const Spacer = styled.div`
  flex: 1;
`;
import { selectSize, SelectVariant } from "./Select.types";
import styled, { css } from 'styled-components';

interface StyledSelectProps {
  $size: selectSize
  $variant: SelectVariant;
}

const sizeMap = {
  sm: {
    height: '32px',
    fontSize: '13px',
    padding: '0 10px'
  },
  md: {
    height: '36px',
    fontSize: '14px',
    padding: '0 12px',
  },
  lg: {
    height: '42px',
    fontSize: '15px',
    padding: '0 14px',
  },
}

export const StyledSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelectTrigger = styled.div<StyledSelectProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${({ $size }) => sizeMap[$size].height};
  padding: ${({ $size }) => sizeMap[$size].padding};
  font-size: ${({ $size }) => sizeMap[$size].fontSize};

  border-radius: 8px;
  cursor: pointer;

  border: 1px solid var(--color-gray-300);
  background: var(--color-white);
  color: var(--color-black);

  ${({ $variant }) => variantStyles($variant)}

  &:focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }
`;

export const StyledDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;

  background: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 100;

  max-height: 200px;
  overflow-y: auto;

  color: var(--color-black);
`;

export const StyledOption = styled.div<{ $active?: boolean }>`
  padding: 10px 12px;
  cursor: pointer;

  background: ${({ $active }) =>
    $active ? 'var(--color-gray-200)' : 'transparent'};

  &:hover {
    background: var(--color-gray-100);
  }
`;

export const StyledChipsContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
  overflow-x: auto; 
`;

export const StyledChip = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 2px 8px;
  border-radius: 6px;

  background: var(--color-gray-100);
  font-size: 12px;
  cursor: pointer;
`;

export const variantStyles = (variant: SelectVariant) => {
  switch (variant) {
    case 'outline':
      return css`
        border: 1px solid var(--color-gray-300);
        background: var(--color-white);
      `;

    case 'filled':
      return css`
        border: 1px solid transparent;
        background: var(--color-gray-100);
      `;

    case 'borderless':
      return css`
        border: none;
        background: var(--color-white);
      `;

    case 'underlined':
      return css`
        border: none;
        border-bottom: 1px solid var(--color-info-500);
        border-radius: 0;
        background: var(--color-white);
      `;
  }
};
import styled, { css } from 'styled-components';

interface StyledScrollAreaProps {
  $variant: 'default' | 'custom';
  $maxHeight?: string;
}

export const StyledScrollArea = styled.div<StyledScrollAreaProps>`
  overflow: auto;
  width: 100%;
  max-height: ${({ $maxHeight }) =>
    $maxHeight || '300px'};

  ${({ $variant }) =>
    $variant === 'custom' &&
    css`
      scrollbar-width: thin;
      scrollbar-color: var(--color-scroll-thumb)
        var(--color-scroll-track);

      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      &::-webkit-scrollbar-track {
        background: var(--purple-900);
        border-radius: var(--radius-sm);
      }

      &::-webkit-scrollbar-thumb {
        background: var( --color-gray-600);
        border-radius: var(--radius-sm);
      }

      &::-webkit-scrollbar-thumb:hover {
        background: var( --color-gray-600);
      }
    `}
`;
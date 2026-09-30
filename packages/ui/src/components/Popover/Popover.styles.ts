import styled from 'styled-components';

export const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const PopoverContent = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + var(--spacing-2));
  left: 0;
  min-width: 200px;
  padding: var(--spacing-3);
  background: var(--color-gray-400);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: var(--z-index-popover);
  visibility: ${({ $open }) =>
    $open ? 'visible' : 'hidden'};

  opacity: ${({ $open }) =>
    ($open ? 1 : 0)};

  pointer-events: ${({ $open }) =>
    ($open ? 'auto' : 'none')};

  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
`;
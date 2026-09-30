import styled, { css } from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 320px;
  padding: var(--spacing-2) var(--spacing-3);

  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);

  background: var(--color-base-white);
  color: var(--color-text-primary);

  font-size: var(--font-size-sm);

  outline: none;

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: 0 0 0 1px var(--color-brand-500);
  }
`;

export const TableContainer = styled.div`
  width: 100%;

  overflow-x: auto;
  overflow-y: auto;

  max-height: 400px;

  border: 1px solid var(--color-text-primary);
  border-radius: var(--radius-lg);
`;

export const StyledTable = styled.table`
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  background: var(--color-base-white);
`;

interface StyledThProps {
  $sortable?: boolean;
  $stickyHeader?: boolean;
}

export const StyledTh = styled.th<StyledThProps>`
  padding: var(--spacing-3) var(--spacing-4);
  text-align: left;

  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);

  color: var(--color-text-secondary);
  background: var(--color-gray-50);

  border-bottom: 1px solid var(--color-text-primary);

  white-space: nowrap;

  ${({ $sortable }) =>
    $sortable &&
    css`
      cursor: pointer;
      user-select: none;
    `}

  ${({ $stickyHeader }) =>
    $stickyHeader &&
    css`
      position: sticky;
      top: 0;
      z-index: 1;
    `}
`;

export const StyledTd = styled.td`
  padding: var(--spacing-3) var(--spacing-4);

  font-size: var(--font-size-sm);
  color: var(--color-text-primary);

  border-bottom: 1px solid var(--color-text-secondary);

  white-space: nowrap;
`;

export const EmptyState = styled.td`
  padding: var(--spacing-6);
  text-align: center;
  color: var(--color-gray-500);
`;

export const EditableInput = styled.input`
  width: 100%;

  padding: var(--spacing-2);

  border: 1px solid var(--color-brand-400);
  border-radius: var(--radius-sm);

  background: var(--color-base-white);

  outline: none;

  font-size: var(--font-size-sm);
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: var(--spacing-2);
`;

export const PaginationButton = styled.button`
  padding: var(--spacing-2) var(--spacing-3);

  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);

  background: var(--color-base-white);

  cursor: pointer;

  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--color-gray-100);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationText = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
`;
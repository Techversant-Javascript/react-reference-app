import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownItem = styled.button<{
  $disabled?: boolean;
}>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--spacing-2) var(--spacing-3);

  background: transparent;
  border: none;

  color: ${({ $disabled }) =>
    $disabled
      ? 'var(--color-text-disabled)'
      : 'var(--blue-700)'};

  cursor: ${({ $disabled }) =>
    $disabled ? 'not-allowed' : 'pointer'};

  border-radius: var(--radius-sm);

  &:hover {
    background: ${({ $disabled }) =>
      $disabled
        ? 'transparent'
        : 'var(--gray-200)'};
  }
`;

export const DropdownButton = styled.button`
  padding: var(--spacing-2) var(--spacing-4);
  border: 1px solid var(--blue-300);
  border-radius: var(--radius-md);
  background: var(--color-white);
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;

  min-width: 220px;
  background: var(--color-white);
  border: 1px solid var(--blue-200);
  border-radius: var(--radius-md);

  box-shadow: var(--shadow-md);
  z-index: 10;
`;

export const DropdownLink = styled.a`
  display: block;
  padding: var(--spacing-2) var(--spacing-3);
  text-decoration: none;
  color: var(--blue-700);

  &:hover {
    background: var(--blue-50);
  }
`;

export const SubmenuContainer = styled.div`
  position: relative;
`;

export const SubmenuMenu = styled.div`
  position: absolute;
  left: 100%;
  top: 0;

  min-width: 200px;

  border: 1px solid var(--blue-200);
  border-radius: var(--radius-md);
  background: var(--color-white);

  box-shadow: var(--shadow-md);
`;
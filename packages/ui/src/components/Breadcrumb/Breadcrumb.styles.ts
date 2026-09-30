import styled, { css } from 'styled-components';

export const BreadcrumbNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
`;

export const BreadcrumbListItem = styled.li`
  display: flex;
  align-items: center;
`;

const sizeStyles = {
  sm: css`
    font-size: 12px;
    line-height: 1.4;
  `,
  md: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  lg: css`
    font-size: 16px;
    line-height: 1.6;
  `,
};

export const BreadcrumbLink = styled.a<{ $size: 'sm' | 'md' | 'lg'; $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  font-weight: 400;
  border-radius: 4px;
  padding: 1px 4px;
  transition: color 0.15s ease, background 0.15s ease;
  cursor: pointer;

  ${({ $size }) => sizeStyles[$size]}

  ${({ $active }) =>
    $active
      ? css`
          color: var(--color-text-primary);
          font-weight: 600;
          cursor: default;
          pointer-events: none;
          background: transparent;
        `
      : css`
          color: var(--color-gray-500);

          &:hover {
            color: var(--color-brand-600);
            background: var(--color-brand-50);
          }
          &:focus-visible {
            outline: 2px solid var(--color-brand-500);
            outline-offset: 2px;
          }
        `}
`;

export const BreadcrumbSeparatorWrapper = styled.span<{ $size: 'sm' | 'md' | 'lg' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-400);
  margin: 0 4px;
  flex-shrink: 0;
  user-select: none;

  ${({ $size }) => sizeStyles[$size]}

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const ItemIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 1em;
    height: 1em;
  }
`;

/* ── Dropdown ──────────────────────────────────────────────────────────── */

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const DropdownTrigger = styled.button<{ $size: 'sm' | 'md' | 'lg' }>`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: none;
  border: none;
  padding: 1px 4px;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 400;
  color: var(--color-gray-500);
  transition: color 0.15s ease, background 0.15s ease;

  ${({ $size }) => sizeStyles[$size]}

  &:hover {
    color: var(--color-brand-600);
    background: var(--color-brand-50);
  }
  &:focus-visible {
    outline: 2px solid var(--color-brand-500);
    outline-offset: 2px;
  }

  svg {
    width: 0.85em;
    height: 0.85em;
    transition: transform 0.15s ease;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 100;
  min-width: 120px;
  margin: 0;
  padding: 4px 0;
  list-style: none;
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const DropdownMenuItem = styled.li`
  a, span {
    display: block;
    padding: 6px 14px;
    font-size: 13px;
    color: var(--color-gray-700);
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.1s ease, color 0.1s ease;

    &:hover {
      background: var(--color-brand-50);
      color: var(--color-brand-700);
    }
  }
`;


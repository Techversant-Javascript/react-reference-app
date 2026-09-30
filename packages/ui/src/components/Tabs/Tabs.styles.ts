import styled, { css } from "styled-components";
import { TabsVariant, TabsOrientation } from "./Tabs.types";

export const TabsContainer = styled.div<{
  orientation: TabsOrientation;
}>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === "vertical" ? "row" : "column"};
`;

export const TabListContainer = styled.div<{
  orientation: TabsOrientation;
  $scrollable?: boolean;
}>`
  display: flex;
  felx:1;      
  min-width: 0;

  ${({ orientation }) =>
    orientation === "vertical"
      ? css`
          flex-direction: column;
          overflow-y: auto;
        `
      : css`
          flex-direction: row;
          overflow-x: auto;
          white-space: nowrap;
        `}

  ${({ $scrollable }) =>
    $scrollable &&
    css`
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
`;

export const TabButton = styled.button<{
  $active: boolean;
  variant: TabsVariant;
}>`
  flex-shrink: 0;
  min-width: max-content;
  padding: var(--spacing-2) var(--spacing-4);
  border: none;
  cursor: pointer;
  background: none;
  color: var(--color-text-primary);

  ${({ variant, $active }) =>
    variant === "underline" &&
    css`
      border-bottom: 2px solid
        ${$active ? "var(--color-info-500)" : "transparent"};
  `}

  ${({ variant, $active }) =>
    variant === "pill" &&
    css`
      background: ${$active
        ? "var(--indigo-500)"
        : "transparent"};
      color: ${$active ? "white" : "var(--color-gray-700)"};
      border-radius: var(--radius-full);
  `}

  ${({ variant, $active }) =>
    variant === "box" &&
    css`
      background: ${$active
        ? "var(--purple-300)"
        : "transparent"};
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const TabPanelContainer = styled.div`
  padding: var(--spacing-4)
`;

export const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  width:100%;
  overflow: hidden;
`;

export const ScrollButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  font-size: var(--fs-md);
  color: var(--color-text-primary);
`;
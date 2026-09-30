import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 40;
`;

export const SidebarContainer = styled.aside<{
  $isCollapsed: boolean;
  $isFloating: boolean;
  $isOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-900);
  color: var(--color-white);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s var(--ease-standard);
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 50;
  box-shadow:var(--sh-3);

  ${({ $isFloating, $isOpen }) =>
    $isFloating
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          transform: ${$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
          width: 280px;
        `
      : css<{ $isCollapsed: boolean }>`
          position: relative;
          width: ${({ $isCollapsed }) => ($isCollapsed ? '88px' : '280px')};
        `}

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  height: 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 0.5rem;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.25rem;
  flex: 1;
`;

export const SidebarNavItem = styled.button<{
  $depth: number;
  $isActive: boolean;
  $isCollapsed: boolean;
}>`
  display: flex;
  align-items: center;
  width: calc(100% - 1rem);
  margin: 0 0.5rem;
  padding: 0.875rem 1rem;
  padding-left: ${({ $depth, $isCollapsed }) => ($isCollapsed ? '1rem' : `${$depth * 1.5 + 1}rem`)};
  border: none;
  border-radius: 12px;
  background: ${({ $isActive }) => 
    $isActive 
      ? 'var(--color-brand-900)' 
      : 'transparent'};
  color: ${({ $isActive }) => ($isActive ? 'var(--color-white)' : 'var(--color-gray-400)')};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  text-align: left;
  cursor: pointer;
  transition: all 0.2s var(--ease-standard);
  text-decoration: none;
  position: relative;
  overflow: hidden;



  &:hover {
    background: ${({ $isActive }) => 
      $isActive 
        ? 'linear-gradient(90deg, var(--color-brand-500) 0%, var(--color-brand-600) 100%)' 
        : 'rgba(255, 255, 255, 0.05)'};
    color: var(--color-white);
    transform: translateX(4px);
  }

  &:active {
    transform: scale(0.98);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: ${({ $isActive }) => ($isActive ? '60%' : '0')};
    background: var(--color-white);
    border-radius: 0 4px 4px 0;
    transition: height 0.3s ease;
  }
`;

export const SidebarIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  ${SidebarNavItem}:hover & {
    transform: scale(1.1);
  }
`;

export const SidebarLabel = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9375rem;
  letter-spacing: 0.01em;
`;

export const ChevronIcon = styled.svg.attrs({
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
})<{ $isExpanded: boolean }>`
  transform: ${({ $isExpanded }) => ($isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s var(--ease-standard);
  flex-shrink: 0;
  opacity: 0.7;
`;

export const NestedNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.02);
  margin: 0.25rem 0.5rem;
  border-radius: 12px;
  padding: 0.25rem 0;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  color: var(--color-gray-400);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    transform: rotate(90deg);
  }
`;

export const ToggleIcon = styled.svg.attrs({
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
})<{ $isCollapsed: boolean }>`
  transform: ${({ $isCollapsed }) => ($isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.4s var(--ease-standard);
`;


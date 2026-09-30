import styled, { css } from "styled-components";

interface NavbarContainerProps {
  $sticky?: boolean;
  $variant?: string;
}

interface MobileMenuProps {
  $isOpen?: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`

  box-sizing: border-box;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--spacing-4) var(--spacing-6);

  background-color: var(--color-brand-500);

  border: 1px solid var(--color-gray-300);

  z-index: 1000;

  ${({ $sticky }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
    `}

    ${({ $variant }) =>
        $variant === "transparent" &&
        css`
          background-color: transparent;
          border: 1px solid var(--color-gray-100);
      
          width: 100%;
          box-sizing: border-box;
      
          backdrop-filter: blur(8px);
        `}
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.25rem;
  font-weight: 600;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: var(--spacing-5);

  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-text-primary);

  font-size: 0.95rem;
  font-weight: 500;

  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary-500);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  padding: var(--spacing-2) var(--spacing-3);

  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);

  outline: none;

  &:focus {
    border-color: var(--color-primary-500);
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  background: transparent;
  border: none;

  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const HamburgerLine = styled.span`
  width: 24px;
  height: 2px;

  background-color: var(--color-gray-900);

  border-radius: var(--radius-sm);
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;

    flex-direction: column;
    gap: var(--spacing-4);

    padding: var(--spacing-4);

    background-color: var(--color-white);

    border-bottom: 1px solid var(--color-gray-200);
  }
`;

export const MobileNavLink = styled.a`
  text-decoration: none;
  color: var(--color-white);

  font-size: 1rem;
  font-weight: 500;
`;

export const MegaMenuContainer = styled.div`
  position: absolute;

  top: calc(100% + 12px);
  left: 0;

  min-width: 320px;

  display: none;

  padding: var(--spacing-5);

  background-color: var(--color-white);

  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  ${NavItem}:hover & {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-4);
  }
`;

export const MegaMenuItem = styled.a`
  text-decoration: none;
  color: var(--color-white);

  font-size: 0.9rem;

  &:hover {
    color: var(--color-primary-500);
  }
`;
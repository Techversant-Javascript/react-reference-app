import { useState } from "react";
import {
  HamburgerButton,
  HamburgerLine,
  LeftSection,
  LogoWrapper,
  MegaMenuContainer,
  MegaMenuItem,
  MobileMenu,
  MobileNavLink,
  NavItem,
  NavItems,
  NavLink,
  NavbarContainer,
  SearchInput,
  SearchWrapper,
} from "./Navbar.styles";
import { NavbarProps } from "./Navbar.types";

export const Navbar = ({
  logo,
  items,
  variant = "default",
  sticky = false,
  showSearch = false,
  className,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <NavbarContainer
      className={className}
      $sticky={sticky}
      $variant={variant}
    >
      <LeftSection>
        <LogoWrapper>{logo}</LogoWrapper>

        <NavItems>
          {items.map((item) => (
            <NavItem key={item.label}>
              <NavLink href={item.href}>{item.label}</NavLink>

              {variant === "mega-menu" && item.children?.length ? (
                <MegaMenuContainer>
                  {item.children.map((child) => (
                    <MegaMenuItem
                      key={child.label}
                      href={child.href}
                    >
                      {child.label}
                    </MegaMenuItem>
                  ))}
                </MegaMenuContainer>
              ) : null}
            </NavItem>
          ))}
        </NavItems>
      </LeftSection>

      {showSearch && (
        <SearchWrapper>
          <SearchInput placeholder="Search..." />
        </SearchWrapper>
      )}

      <HamburgerButton
        aria-label="Toggle Menu"
        onClick={toggleMobileMenu}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerButton>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {items.map((item) => (
          <MobileNavLink
            key={item.label}
            href={item.href}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
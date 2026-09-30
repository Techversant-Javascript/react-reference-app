import { ReactNode } from "react";

export type NavbarVariant =
  | "default"
  | "sticky"
  | "transparent"
  | "search"
  | "mega-menu";

export interface NavbarItem {
  label: string;
  href?: string;
  children?: NavbarItem[];
}

export interface NavbarProps {
  logo?: ReactNode;
  items: NavbarItem[];
  variant?: NavbarVariant;
  sticky?: boolean;
  showSearch?: boolean;
  mobileBreakpoint?: string;
  className?: string;
}
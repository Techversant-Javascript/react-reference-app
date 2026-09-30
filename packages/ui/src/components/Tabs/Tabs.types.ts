import { ReactNode } from "react";

export type TabsVariant = "underline" | "pill" | "box";
export type TabsOrientation = "horizontal" | "vertical";

export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  variant?: TabsVariant;
  orientation?: TabsOrientation;
  scrollable?: boolean;
  children: ReactNode;
}

export interface TabListProps {
    children: React.ReactNode;
    orientation?: TabsOrientation;
    scrollable?: boolean;
  }

export interface TabProps {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface TabPanelProps {
  value: string;
  children: ReactNode;
}
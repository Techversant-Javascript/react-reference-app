import { ReactNode } from "react";

export type AccordionVariant = "default" | "bordered" | "ghost";
export type AccordionSize = "sm" | "md" | "lg";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}
export interface AccordionProps {
  items: AccordionItem[];
  variant?: AccordionVariant;
  size?: AccordionSize;
  
  /** controlled */
  activeItems?: string[];

  /** uncontrolled */
  defaultExpanded?: string[];
  onChange?: (activeItems: string[]) => void;
  multiple?: boolean;
}
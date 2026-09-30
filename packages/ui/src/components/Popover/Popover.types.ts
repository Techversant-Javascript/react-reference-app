import { ReactNode } from 'react';

export type PopoverTrigger = 'click' | 'hover' | 'focus';

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right' ;

export interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
  trigger?: PopoverTrigger;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  placement?: PopoverPlacement;
}
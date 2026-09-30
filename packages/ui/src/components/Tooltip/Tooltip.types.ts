export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: TooltipPlacement;
  disabled?: boolean;
  showArrow?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  delay?: number; 
}
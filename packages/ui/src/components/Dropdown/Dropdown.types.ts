export type DropdownVariant = | 'basic'| 'submenu'| 'link';

export interface DropdownItemData {
  id: string;
  label: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  children?: DropdownItemData[];
}

export interface DropdownProps {
  label: string;
  items: DropdownItemData[];
  variant?: DropdownVariant;
}

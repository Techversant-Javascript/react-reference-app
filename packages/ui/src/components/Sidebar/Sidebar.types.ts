import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  children?: SidebarItem[];
}

export interface SidebarProps {
  /**
   * The list of items to display in the sidebar.
   */
  items: SidebarItem[];
  /**
   * Header content (e.g., logo or title).
   */
  header?: React.ReactNode;
  /**
   * If true, the sidebar is collapsed to show only icons.
   */
  isCollapsed?: boolean;
  /**
   * Callback when the expand/collapse toggle is clicked.
   */
  onToggle?: (collapsed: boolean) => void;
  /**
   * If true, the sidebar appears as a floating drawer over content.
   */
  isFloating?: boolean;
  /**
   * Controls the open state of the floating drawer.
   */
  isOpen?: boolean;
  /**
   * Callback when the floating drawer overlay is clicked.
   */
  onClose?: () => void;
  /**
   * Active item ID.
   */
  activeId?: string;
  className?: string;
}

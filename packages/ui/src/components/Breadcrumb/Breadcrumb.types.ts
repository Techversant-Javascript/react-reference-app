import React from 'react';

export type BreadcrumbSeparator = 'chevron' | 'slash' | 'dot' | 'arrow';

export interface BreadcrumbItem {
  id?: string | number;
  label: string;
  href?: string;
  /** When true this item renders as the active/current page */
  active?: boolean;
  icon?: React.ReactNode;
  /** When provided the item renders as a dropdown trigger */
  dropdown?: Array<{ id?: string | number; label: string; href?: string }>;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Icon used between items. Default: 'chevron' */
  separator?: BreadcrumbSeparator;
  /** Custom separator node — overrides `separator` if provided */
  customSeparator?: React.ReactNode;
  /** Visual size of the breadcrumb trail */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

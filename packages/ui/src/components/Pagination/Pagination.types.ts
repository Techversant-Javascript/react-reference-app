import React from 'react';

export type PaginationVariant =
  | 'numbered'
  | 'simple'
  | 'infinite';

export type PaginationAlign =
  | 'left'
  | 'center'
  | 'right';

export interface PaginationProps {
  variant?: PaginationVariant;
  currentPage?: number;
  totalPages?: number;
  pageSize?: number;
  totalItems?: number;
  loadedItems?: number;
  hasMore?: boolean;
  align?: PaginationAlign;
  loading?: boolean;
  onPageChange?: (
    page: number
  ) => void;
  onLoadMore?: () => void;
}
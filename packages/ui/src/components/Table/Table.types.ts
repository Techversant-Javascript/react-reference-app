import type React from 'react';

export interface TableColumn<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  editable?: boolean;
  width?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: readonly TableColumn<T>[];
  data: T[];

  sortable?: boolean;
  searchable?: boolean;
  pagination?: boolean;
  stickyHeader?: boolean;
  editable?: boolean;

  pageSize?: number;
  searchPlaceholder?: string;

  onEdit?: (
    rowIndex: number,
    columnKey: keyof T,
    value: string,
  ) => void;
}
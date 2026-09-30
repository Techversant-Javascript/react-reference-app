import { useMemo, useState } from 'react';
import type { TableProps } from './Table.types';

import {
  EditableInput,
  EmptyState,
  PaginationButton,
  PaginationText,
  PaginationWrapper,
  SearchInput,
  StyledTable,
  StyledTd,
  StyledTh,
  TableContainer,
  TableWrapper,
} from './Table.styles';

type SortDirection = 'asc' | 'desc';

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  sortable = false,
  searchable = false,
  pagination = false,
  stickyHeader = false,
  editable = false,
  pageSize = 10,
  searchPlaceholder = 'Search...',
  onEdit,
}: TableProps<T>) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: SortDirection;
  } | null>(null);

  const [editingCell, setEditingCell] = useState<{
    rowIndex: number;
    columnKey: keyof T;
  } | null>(null);

  const [tableData, setTableData] = useState(data);

  const filteredData = useMemo(() => {
    if (!searchable || !search) {
      return tableData;
    }

    return tableData.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, searchable, tableData]);

  const sortedData = useMemo(() => {
    if (!sortable || !sortConfig) {
      return filteredData;
    }

    const sorted = [...filteredData];

    sorted.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }

      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig, sortable]);

  const paginatedData = useMemo(() => {
    if (!pagination) {
      return sortedData;
    }

    const start = (page - 1) * pageSize;

    return sortedData.slice(start, start + pageSize);
  }, [page, pageSize, pagination, sortedData]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  const handleSort = (key: keyof T) => {
    if (!sortable) {
      return;
    }

    setSortConfig(prev => {
      if (prev?.key === key && prev.direction === 'asc') {
        return {
          key,
          direction: 'desc',
        };
      }

      return {
        key,
        direction: 'asc',
      };
    });
  };

  const handleEdit = (
    rowIndex: number,
    columnKey: keyof T,
    value: string,
  ) => {
    const updatedData = [...tableData];

    updatedData[rowIndex] = {
      ...updatedData[rowIndex],
      [columnKey]: value,
    };

    setTableData(updatedData);

    onEdit?.(rowIndex, columnKey, value);

    setEditingCell(null);
  };

  return (
    <TableWrapper>
      {searchable && (
        <SearchInput
          type="text"
          placeholder={searchPlaceholder}
          value={search}
          onChange={event => {
            setSearch(event.target.value);
            setPage(1);
          }}
          aria-label="Search table"
        />
      )}

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {columns.map(column => (
                <StyledTh
                  key={String(column.key)}
                  $sortable={sortable && column.sortable}
                  $stickyHeader={stickyHeader}
                  onClick={() => {
                    if (column.sortable) {
                      handleSort(column.key);
                    }
                  }}
                  aria-sort={
                    sortConfig?.key === column.key
                      ? sortConfig.direction === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : 'none'
                  }
                  style={
                    column.width
                      ? { width: column.width }
                      : undefined
                  }
                >
                  {column.title}
                </StyledTh>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map(column => {
                    const value = row[column.key];

                    const isEditing =
                      editingCell?.rowIndex === rowIndex &&
                      editingCell.columnKey === column.key;

                    return (
                      <StyledTd
                        key={String(column.key)}
                        onClick={() => {
                          if (editable && column.editable) {
                            setEditingCell({
                              rowIndex,
                              columnKey: column.key,
                            });
                          }
                        }}
                      >
                        {isEditing ? (
                          <EditableInput
                            autoFocus
                            defaultValue={String(value)}
                            onBlur={event =>
                              handleEdit(
                                rowIndex,
                                column.key,
                                event.target.value,
                              )
                            }
                            onKeyDown={event => {
                              if (event.key === 'Enter') {
                                handleEdit(
                                  rowIndex,
                                  column.key,
                                  (
                                    event.target as HTMLInputElement
                                  ).value,
                                );
                              }
                            }}
                          />
                        ) : column.render ? (
                          column.render(value, row)
                        ) : (
                          String(value)
                        )}
                      </StyledTd>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <EmptyState colSpan={columns.length}>
                  No data found
                </EmptyState>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableContainer>

      {pagination && totalPages > 1 && (
        <PaginationWrapper>
          <PaginationButton
            onClick={() => setPage(prev => prev - 1)}
            disabled={page === 1}
          >
            Previous
          </PaginationButton>

          <PaginationText>
            {page} / {totalPages}
          </PaginationText>

          <PaginationButton
            onClick={() => setPage(prev => prev + 1)}
            disabled={page === totalPages}
          >
            Next
          </PaginationButton>
        </PaginationWrapper>
      )}
    </TableWrapper>
  );
}
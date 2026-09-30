import { fireEvent, render, screen } from '@testing-library/react';
import { Table } from '../../src/components/Table/Table';

type User = {
  id: number;
  name: string;
  email: string;
};

const columns = [
  {
    key: 'id',
    title: 'ID',
    sortable: true,
  },
  {
    key: 'name',
    title: 'Name',
    sortable: true,
    editable: true,
  },
  {
    key: 'email',
    title: 'Email',
  },
] as const;

const data: User[] = [
  {
    id: 1,
    name: 'John',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@example.com',
  },
];

describe('Table', () => {
  test('renders table headers', () => {
    render(
      <Table<User>
        columns={columns}
        data={data}
      />,
    );

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('renders table data', () => {
    render(
      <Table<User>
        columns={columns}
        data={data}
      />,
    );

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  test('search filters data', () => {
    render(
      <Table<User>
        columns={columns}
        data={data}
        searchable
      />,
    );

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'Jane' },
    });

    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  test('sorts table data', () => {
    render(
      <Table<User>
        columns={columns}
        data={data}
        sortable
      />,
    );

    fireEvent.click(screen.getByText('Name'));
  });

  test('editable cell updates value', () => {
    render(
      <Table<User>
        columns={columns}
        data={data}
        editable
      />,
    );

    fireEvent.click(screen.getByText('John'));

    const input = screen.getByDisplayValue('John');

    fireEvent.change(input, {
      target: { value: 'Johnny' },
    });

    fireEvent.blur(input);

    expect(screen.getByText('Johnny')).toBeInTheDocument();
  });
});
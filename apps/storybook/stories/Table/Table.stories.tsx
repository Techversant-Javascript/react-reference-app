import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@techv/ui';


type User = {
  id: number;
  name: string;
  email: string;
  role: string;
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
    editable: true,
  },
  {
    key: 'role',
    title: 'Role',
    sortable: true,
  },
] as const;

const data: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'User',
  },
];

const largeData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 2 === 0 ? 'Admin' : 'User',
}));

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],

  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],

  args: {
    columns,
    data,
  },

};

export default meta;

type Story = StoryObj<typeof Table<User>>;
  
  export const Basic: Story = {};

  export const Sortable: Story = {
    args: {
      sortable: true,
    },
  };

  export const Searchable: Story = {
    args: {
      searchable: true,
    },
  };

  export const Pagination: Story = {
    args: {
      data: [...data, ...data, ...data, ...data],
      pagination: true,
      pageSize: 5,
    },
  };

  export const StickyHeader: Story = {
    args: {
      data: largeData,
      stickyHeader: true,
    },
  };
  

  export const EditableGrid: Story = {
    args: {
      editable: true,
    },
  };
  

  export const FullFeatured: Story = {
    args: {
      data: [...data, ...data, ...data],
      sortable: true,
      searchable: true,
      pagination: true,
      stickyHeader: true,
      editable: true,
      pageSize: 5,
    },
  };

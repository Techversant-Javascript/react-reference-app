import type { Meta, StoryObj } from '@storybook/react';
import { SearchableSelect } from '@techv/ui';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Next.js', value: 'next' },
  { label: 'Svelte', value: 'svelte' },
];

const meta: Meta<typeof SearchableSelect> = {
  title: 'Components/SearchableSelect',
  component: SearchableSelect,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='min-h-32 p-1'>
        <Story />
      </div>
    ),
  ],

  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'underlined'],
    },

    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },

    multiple: {
      control: 'boolean',
    },

    clearable: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    isLoading: {
      control: 'boolean',
    },
  },

  args: {
    options,
    variant: 'outlined',
    size: 'md',
    placeholder: 'Search framework...',
  },
};

export default meta;

type Story = StoryObj<typeof SearchableSelect>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Underlined: Story = {
  args: {
    variant: 'underlined',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};

export const Clearable: Story = {
  args: {
    clearable: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const EmptyState: Story = {
  args: {
    options: [],
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@techv/ui';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='p-10 h-32'>
        <Story />
      </div>
    ),
  ],

  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
    },
    isMulti: {
      control: 'boolean',
      description: 'Enable multi-select',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'borderless', 'underlined'],
    },
  },
  args: {
    options,
    size: 'md',
    isMulti: false,
    disabled: false,
    placeholder: 'Select option',
    variant: 'outline',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const MultiSelect: Story = {
  args: {
    isMulti: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'react',
  },
};

export const MultiWithDefault: Story = {
  args: {
    isMulti: true,
    defaultValue: ['react', 'vue'],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '250px' }}>
      <Select options={options} size="sm" placeholder="Small" />
      <Select options={options} size="md" placeholder="Medium" />
      <Select options={options} size="lg" placeholder="Large" />
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="flex flex-col g-4" style={{ height: '250px' }}>
      <h3>outline</h3>
      <Select variant="outline" options={options} placeholder="Outline" />
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="flex flex-col g-4" style={{ height: '250px' }}>
      <h3>Filled</h3>
      <Select variant="filled" options={options} placeholder="Filled" />
    </div>
  )
};

export const Borderless: Story = {
  render: () => (
    <div className="flex flex-col g-4" style={{ height: '250px' }}>
     <h3>Borderless</h3>
     <Select variant="borderless" options={options} placeholder="Borderless" />
    </div>
  )
};

export const Undeline: Story = {
  render: () => (
    <div className="flex flex-col g-4" style={{ height: '250px' }}>
      <h3>Underline</h3>
      <Select variant="underlined" options={options} placeholder="Underlined" />
    </div>
  )
}
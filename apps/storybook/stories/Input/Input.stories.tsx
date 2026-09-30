import React from 'react';
import type {
  Meta,
  StoryObj,
} from '@storybook/react';

import { Input } from '@techv/ui';

const meta: Meta<
  typeof Input
> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],

  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'number',
        'search',
      ],
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg',
      ],
    },

    variant: {
      control: 'select',
      options: [
        'outline',
        'filled',
        'borderless',
        'underlined',
      ],
    },

    status: {
      control: 'select',
      options: [
        'default',
        'error',
        'success',
        'warning',
      ],
    },

    disabled: {
      control: 'boolean',
    },

    allowClear: {
      control: 'boolean',
    },

    count: {
      control: 'boolean',
    },

    maxLength: {
      control: 'number',
    },
  },

  args: {
    label: 'Username',
    placeholder:
      'Enter text',
    helperText:
      'Helper text',
    type: 'text',
    size: 'md',
    variant:
      'outline',
    status:
      'default',
    allowClear: true,
    count: false,
    disabled: false,
    width: 550,
  },
};

export default meta;

type Story =
  StoryObj<
    typeof Input
  >;

export const InputField: Story =
  {};

export const Types: Story =
  {
    render: () => (
      <div
        style={{
          display:
            'grid',
          gap: '16px',
          maxWidth:
            '420px',
        }}
      >
        <Input
          label="Text"
          type="text"
          placeholder="Text input"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Password input"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Email input"
        />

        <Input
          label="Number"
          type="number"
          placeholder="Number input"
        />

        <Input
          label="Search"
          type="search"
          placeholder="Search input"
        />
      </div>
    ),
  };

export const States: Story =
  {
    render: () => (
      <div
        style={{
          display:
            'grid',
          gap: '16px',
          maxWidth:
            '420px',
        }}
      >
        <Input
          label="Default"
          helperText="Normal state"
          placeholder="Enter input..."
        />

        <Input
          label="Error"
          status="error"
          helperText="Required field"
          placeholder="Enter input..."
        />

        <Input
          label="Success"
          status="success"
          helperText="Looks good"
          placeholder="Enter input..."
        />

        <Input
          label="Warning"
          status="warning"
          helperText="Check value"
          placeholder="Enter input..."
        />
      </div>
    ),
  };

export const Variants: Story =
  {
    render: () => (
      <div
        style={{
          display:
            'grid',
          gap: '16px',
          maxWidth:
            '420px',
        }}
      >
        <Input
          label="Outline"
          variant="outline"
          placeholder="Enter input..."
        />

        <Input
          label="Filled"
          variant="filled"
          placeholder="Enter input..."
        />

        <Input
          label="Borderless"
          variant="borderless"
          placeholder="Enter input..."
        />

        <Input
          label="Underlined"
          variant="underlined"
          placeholder="Enter input..."
        />
      </div>
    ),
  };

export const Sizes: Story =
  {
    render: () => (
      <div
        style={{
          display:
            'grid',
          gap: '16px',
          maxWidth:
            '420px',
        }}
      >
        <Input
          label="Small"
          size="sm"
          placeholder="Enter input..."
        />

        <Input
          label="Medium"
          size="md"
          placeholder="Enter input..."
        />

        <Input
          label="Large"
          size="lg"
          placeholder="Enter input..."
        />
      </div>
    ),
  };

export const PrefixSuffix: Story =
  {
    render: () => (
      <div
        style={{
          display:
            'grid',
          gap: '16px',
          maxWidth:
            '420px',
        }}
      >
        <Input
          label="Amount"
          prefix="₹"
          placeholder="0.00"
        />

        <Input
          label="Website"
          suffix=".com"
          placeholder="Email address"
        />

        <Input
          label="Search"
          prefix="🔍"
          suffix="⌘K"
        />
      </div>
    ),
  };

export const SearchBox: Story =
  {
    args: {
      type: 'search',
      label: 'Search',
      placeholder:
        'Search users...',
      width: 550,
      allowClear: false,
      onSearch: (
        value
      ) =>
        new Promise(
          (
            resolve
          ) => {
            console.log(
              'Searching:',
              value
            );

            setTimeout(
              resolve,
              1500
            );
          }
        ),
    },
  };

export const AllowClear: Story =
  {
    args: {
      label:
        'Clear Input',
      defaultValue:
        'Remove me',
      allowClear: true,
      width: 550,
    },
  };

export const Count: Story =
  {
    args: {
      label:
        'Bio',
      defaultValue:
        'Hello',
      count: true,
      maxLength: 20,
      width: 550,
    },
  };
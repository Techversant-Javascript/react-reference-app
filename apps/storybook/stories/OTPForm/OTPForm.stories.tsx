import type { Meta, StoryObj } from '@storybook/react';
import { OTPForm } from '@techv/ui';

const meta: Meta<typeof OTPForm> = {
  title: 'Components/OTP Form',
  component: OTPForm,
  tags: ['autodocs'],

  argTypes: {
    length: {
      control: {
        type: 'range',
        min: 4,
        max: 8,
        step: 1,
      },
      description: 'Number of OTP input fields (default 6)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '6' },
      },
    },

    autoFocus: {
      control: 'boolean',
      description: 'Automatically focus first field',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },

    disabled: {
      control: 'boolean',
      description: 'Disable all OTP fields',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    onChange: {
      action: 'changed',
      table: {
        disable: true,
      },
    },

    onComplete: {
      action: 'completed',
      table: {
        disable: true,
      },
    },
  },

  args: {
    length: 6,
    autoFocus: true,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof OTPForm>;

export const PINLayout: Story = {
  name: 'OTP Form',
  args: {
    length: 6,
    autoFocus: true,
  },
};

export const PasteSupport: Story = {
  name: 'Paste Support',
  args: {
    length: 6,
    autoFocus: true,
  },

  parameters: {
    docs: {
      description: {
        story:
          'Copy 123456 and paste into any OTP field. All boxes auto-fill.',
      },
    },
  },
};
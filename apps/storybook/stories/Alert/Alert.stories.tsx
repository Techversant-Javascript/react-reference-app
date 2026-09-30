import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@techv/ui';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],


  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Visual style of the alert',
      table: {
        defaultValue: { summary: 'info' },
      },
    },

    title: {
      control: 'text',
      description: 'Optional title displayed above content',
    },

    children: {
      control: 'text',
      description: 'Main alert message',
    },

    isDismissible: {
      control: 'boolean',
      description: 'Shows close button',
    },

    onClose: {
      action: 'closed',
      description: 'Callback when alert is dismissed',
    },

    icon: {
      control: false,
      description: 'Custom icon (ReactNode)',
    },
  },

  args: {
    variant: 'info',
    title: 'Info Alert',
    children: 'This is an alert message',
    isDismissible: false,
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;


export const AllVariants: Story = {
  render: () => (
    <div className='p-6 space-y-4'>
      <Alert variant="success" title="Success">
        Operation completed successfully
      </Alert>

      <Alert variant="error" title="Error">
        Something went wrong
      </Alert>

      <Alert variant="warning" title="Warning">
        Be careful with this action
      </Alert>

      <Alert variant="info" title="Info">
        This is some information
      </Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  args: {
    isDismissible: true,
    title: 'Dismissible Alert',
    children: 'Click the X to close',
  },
};

export const WithIcon: Story = {
  args: {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" opacity="0.2" />
        <path
          d="M12 10v6M12 7h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Info',
    children: 'This is an informational alert',
  },
};
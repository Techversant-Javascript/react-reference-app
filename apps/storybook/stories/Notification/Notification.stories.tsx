import type {Meta,StoryObj,} from '@storybook/react';
import { Button } from '@techv/ui';  
import {NotificationProvider,useNotification,} from '@techv/ui';
  
const NotificationDemo = ({
  variant,
  title,
  message,
}: {
  variant: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
}) => {
  const notification = useNotification();

  const handleClick = () => {
    notification[variant]({
      title,
      message,
    });
  };

  return (
    <Button onClick={handleClick}>
      Show {title}
    </Button>
  );
};

  
const meta: Meta = {
  title: 'Components/Notification',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Success: Story = {
  render: () => (
    <NotificationProvider>
      <NotificationDemo
        variant="success"
        title="Success"
        message="Profile updated successfully"
      />
    </NotificationProvider>
  ),
};

export const Warning: Story = {
  render: () => (
    <NotificationProvider>
      <NotificationDemo
        variant="warning"
        title="Warning"
        message="Please review your data"
      />
    </NotificationProvider>
  ),
};

export const Error: Story = {
  render: () => (
    <NotificationProvider>
      <NotificationDemo
        variant="error"
        title="Error"
        message="Something went wrong"
      />
    </NotificationProvider>
  ),
};

export const Info: Story = {
  render: () => (
    <NotificationProvider>
      <NotificationDemo
        variant="info"
        title="Info"
        message="New update available"
      />
    </NotificationProvider>
  ),
};
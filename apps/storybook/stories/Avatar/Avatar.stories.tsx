import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from '@techv/ui';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away'],
    },
  },
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex g-6 '>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className='ta-c'>
          <Avatar size={size} name={size.toUpperCase()} />
          <div className='mt-6 fs-xs'>
            {size}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Status: Story = {
  render: () => (
    <div className='flex g-6 '>
      {[
        { name: 'O', status: 'online', label: 'Online' },
        { name: 'O', status: 'offline', label: 'Offline' },
        { name: 'A', status: 'away', label: 'Away' },
      ].map((item, i) => (
        <div key={i} className='ta-c'>
          <Avatar name={item.name} status={item.status as any} />
          <div className='mt-6 fs-xs'>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="A" />
      <Avatar name="B" />
      <Avatar name="C" />
      <Avatar name="D" />
    </AvatarGroup>
  ),
};

export const GroupWithLimit: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar name="A" />
      <Avatar name="B" />
      <Avatar name="C" />
      <Avatar name="D" />
      <Avatar name="E" />
    </AvatarGroup>
  ),
};
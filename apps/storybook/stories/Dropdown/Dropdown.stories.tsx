import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@techv/ui';

const basicItems = [
  {
    id: '1',
    label: 'Profile',
  },
  {
    id: '2',
    label: 'Settings',
  },
  {
    id: '3',
    label: 'Logout',
  },
];

const linkItems = [
  {
    id: '1',
    label: 'Documentation',
    href: '/docs',
  },
  {
    id: '2',
    label: 'Storybook',
    href: '/storybook',
  },
];

const submenuItems = [
  {
    id: '1',
    label: 'Profile',
  },
  {
    id: '2',
    label: 'Settings',
  },
  {
    id: '3',
    label: 'More',
    children: [
      {
        id: '3-1',
        label: 'Users',
      },
      {
        id: '3-2',
        label: 'Teams',
      },
      {
        id: '3-3',
        label: 'Roles',
      },
    ],
  },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Dropdown trigger label',
    },
    variant: {
      control: 'select',
      options: ['basic', 'link', 'submenu'],
      description: 'Dropdown variant',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  args: {
    label: 'Basic Menu',
    variant: 'basic',
    items: basicItems,
  },
};

export const Link: Story = {
  args: {
    label: 'Link Menu',
    variant: 'link',
    items: linkItems,
  },
};

export const Submenu: Story = {
  args: {
    label: 'Submenu',
    variant: 'submenu',
    items: submenuItems,
  },
};

export const DisabledItems: Story = {
  args: {
    label: 'Disabled Menu',
    variant: 'basic',
    items: [
      {
        id: '1',
        label: 'Profile',
      },
      {
        id: '2',
        label: 'Settings',
        disabled: true,
      },
      {
        id: '3',
        label: 'Logout',
      },
    ],
  },
};
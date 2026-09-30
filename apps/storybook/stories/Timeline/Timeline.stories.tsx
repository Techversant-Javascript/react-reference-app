import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@techv/ui';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],

  argTypes:{
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },

    variant: {
      control: 'select',
      options: ['left', 'right', 'alternate', 'activity'],
    },
  }
};

export default meta;

type Story = StoryObj<typeof Timeline>;

const items = [
  {
    id: '1',
    title: 'Project Started',
    description: 'Initial kickoff meeting completed.',
    time: '09:00 AM',
  },
  {
    id: '2',
    title: 'Design Phase',
    description: 'Wireframes and UI created.',
    time: '11:30 AM',
  },
  {
    id: '3',
    title: 'Development',
    description: 'Frontend implementation started.',
    time: '02:00 PM',
  },
];

export const LeftAligned: Story = {
  args: {
    items,
    variant: 'left',
    orientation: 'vertical',
  },
};

export const RightAligned: Story = {
  args: {
    items,
    variant: 'right',
    orientation: 'vertical',
  },
};

export const Alternate: Story = {
  args: {
    items,
    variant: 'alternate',
    orientation: 'vertical',
  },
};

export const Vertical: Story = {
  args: {
    items,
    variant: 'left',
    orientation: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    items,
    orientation: 'horizontal',
  },
};
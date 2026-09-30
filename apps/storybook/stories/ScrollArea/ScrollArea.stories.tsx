import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@techv/ui';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Custom: Story = {
  args: {
    variant: 'custom',
    maxHeight: '250px',
    children: (
      <div>
        {Array.from({ length: 50 }).map((_, index) => (
          <p key={index}>
            Scroll Item {index + 1}
          </p>
        ))}
      </div>
    ),
  },
};
import type {
    Meta,
    StoryObj,
  } from '@storybook/react';
    import { Button,Popover } from '@techv/ui';
  
  const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ["autodocs"],
  };
  
  export default meta;
  
  type Story = StoryObj<typeof Popover>;
  
  export const Click: Story = {
    args: {
      trigger: 'click',
      content: (
        <div>
          Click Popover Content
        </div>
      ),
      children: (
        <Button>
          Open Popover
        </Button>
      ),
    },
  };
  
  export const Hover: Story = {
    args: {
      trigger: 'hover',
      content: (
        <div>
          Hover Popover Content
        </div>
      ),
      children: (
        <Button>
          Hover Me
        </Button>
      ),
    },
  };
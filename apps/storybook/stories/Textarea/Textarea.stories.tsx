import type { Meta, StoryObj } from '@storybook/react';
import { Textarea  } from '@techv/ui';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
  resize: {
    control: 'select',
    options: ['none', 'vertical', 'horizontal', 'both'],
    description: 'Controls resize behavior of the textarea',
  },
  variant: {
    control: 'select',
    options: ['outline', 'soft', 'neutral'],
    description: 'Visual style variant of the textarea',
  },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
    description: 'Size of the textarea',
  },
  showCharacterCount: {
    control: 'boolean',
    description: 'Displays character count below the textarea',
  },
  maxLength: {
    control: 'number',
    description: 'Maximum number of characters allowed',
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the textarea input',
  },
  error: {
    control: 'text',
    description: 'Error message displayed when validation fails',
  },
},

  args: {
    placeholder: 'Enter your message...',
    disabled: false,
    showCharacterCount: true,
    maxLength: 200,
          resize: 'vertical',
  size: 'md',
  variant: 'outline',

  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const ResizeNone: Story = {
  args: { resize: 'none' },
};
export const ResizeVertical: Story = {
  args: { resize: 'vertical' },
};

export const ResizeHorizontal: Story = {
  args: { resize: 'horizontal' },
};

export const ResizeBoth: Story = {
  args: { resize: 'both' },
};


export const WithCharacterCount: Story = {
  args: {
    showCharacterCount: true,
    maxLength: 200,
   

  },
};

export const ErrorState: Story = {
  args: {
    error: 'This field is required',
    variant: 'outline',
  },
};
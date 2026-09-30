import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '@techv/ui';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
    argTypes:{
        value: {
            control: 'color',
        },
    }
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('#2563eb');

    return (
      <ColorPicker
        label="Pick a color"
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const Inline: Story = {
  render: () => {
    const [value, setValue] = useState('#22c55e');

    return (
      <ColorPicker
        variant="inline"
        label="Theme color"
        value={value}
        onValueChange={setValue}
      />
    );
  },
};
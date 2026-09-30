import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '@techv/ui';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  const [value, setValue] = useState(0);

  return (
    <NumberInput
      value={value}
      onValueChange={setValue}
    />
  );
};

export const Currency = () => {
  const [value, setValue] = useState(0);

  return (
    <NumberInput
      variant="currency"
      value={value}
      currencySymbol="$"
      onValueChange={setValue}
    />
  );
};
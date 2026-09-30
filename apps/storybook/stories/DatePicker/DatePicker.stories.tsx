
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@techv/ui';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['day', 'month', 'year'],
    },
    locale: {
      control: 'select',
      options: ['en-US', 'fr-FR', 'de-DE', 'hi-IN', 'zh-CN', 'ja-JP'],
    },
  },
};


export default meta;
type Story = StoryObj<typeof DatePicker>;
export const Default: Story = {};
export const Day: Story = {
  args: { variant: 'day' },
};

export const Month: Story = {
  args: { variant: 'month' },
};

export const Year: Story = {
  args: { variant: 'year' },
};

export const Range: Story = {
  args: { isRange: true },
};

export const Formatted: Story = {
  args: { format: 'DD/MM/YYYY' },
};

export const Localized: Story = {
  args: { locale: 'en-US' },
};

export const DateTimePicker: Story = {
  args: { showTime: true, format: 'YYYY-MM-DD HH:mm:ss', showSeconds: true },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled picker' },
};

export const ErrorState: Story = {
  args: { 
    error: true, 
    placeholder: 'Error state',
    helperText: 'This field is required'
  },
};

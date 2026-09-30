import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '@techv/ui';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['basic', 'dropzone', 'multiple', 'image-preview'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Basic: Story = {
  args: {
    variant: 'basic',
  },
};

export const DragAndDrop: Story = {
  args: {
    variant: 'dropzone',
  },
};

export const MultipleUpload: Story = {
  args: {
    variant: 'multiple',
    multiple: true,
  },
};

export const CustomPreview: Story = {
  args: {
    variant: 'image-preview',
    multiple: true,
    accept: 'image/*',
    label: 'Upload Images',
  },
};

export const Error: Story = {
  args: {
    variant: 'basic',
    label: 'Upload File',
    error: true,
    errorMessage: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'basic',
    label: 'Upload File',
    disabled: true,
  },
};
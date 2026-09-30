import type { Meta, StoryObj, } from '@storybook/react';
import { Image } from '@techv/ui';

const meta: Meta<typeof Image> = {
    title: 'Components/Image',
    component: Image,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'rounded', 'preview'],
        },
        fit: {
            control: 'select',
            options: ['cover', 'contain'],
        }
    }
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        variant: 'default',
        src: "https://picsum.photos/400/300",
        alt: 'Defalut image',
    },
};

export const FitContain: Story = {
    args: {
        fit: 'contain',
        src: 'https://picsum.photos/300/600',
        alt: 'Contain image',
    },
};

export const FitCover: Story = {
    args: {
        fit: 'cover',
        src: 'https://picsum.photos/300/600',
        alt: 'Cover image',
    },
};

export const Preview: Story = {
    args: {
        variant: 'preview',
        src: "https://picsum.photos/400/300",
        alt: 'Preview image',
    },
};

export const Placeholder: Story = {
    args: {
      variant: 'default',
      src: '',
      alt: 'placeholder image',
    },
  };
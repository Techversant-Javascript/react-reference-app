import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '@techv/ui';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        defaultValue: { control: 'number' },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        readOnly: { control: 'boolean' },
        icon: { control: 'text' },
    }

};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    args: {
        defaultValue: 3,
    },
};

export const Small: Story = {
    args: {
        defaultValue: 4,
        size: 'sm',
    },
};

export const Large: Story = {
    args: {
        defaultValue: 4,
        size: 'lg',
    },
};

export const ReadOnly: Story = {
    args: {
        value: 4,
        readOnly: true,
    },
};

export const HeartRating: Story = {
    args: {
        defaultValue: 3,
        icon: <span>♥</span>,
    },
};
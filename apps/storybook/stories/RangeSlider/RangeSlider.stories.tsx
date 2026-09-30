import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider } from "@techv/ui";

const meta: Meta<typeof RangeSlider> = {
    title: "Components/RangeSlider",
    component: RangeSlider,
    tags: ['autodocs'],
    args: {
        min: 0,
        max: 100,
        defaultValue: 30,
        showValue: true,
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary"],
        },
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
          },
    },
};

export default meta;

type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
    args: {
    size: "md",
    showValue: true,
  },};

export const Small: Story = {
    args: {
      size: "sm",
      showValue: true,
    },
  };

export const Vertical: Story = {
    args: {
        orientation: "vertical",
        showTooltip: false, 
        showValue: true,
        size: "sm",
    },
};

export const WithTooltip: Story = {
    args: {
        showTooltip: true,
        showValue: true,
        size: "lg",
    },
};
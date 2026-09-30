import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "@techv/ui";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ['autodocs'],

  argTypes: {
    placement: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
  }
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Left: Story = {
  args: {
    placement: "left",
    title: "Drawer Title",
    children: (
      <p className="p-4">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    )
  },
};

export const Right: Story = {
  args: {
    placement: "right",
    title: "Drawer Title",
    children: (
      <p className="p-4">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    )
  },
};

export const Top: Story = {
  args: {
    placement: "top",
    title: "Drawer Title",
    children: (
      <p className="p-4">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    )
  },
};

export const Bottom: Story = {
  args: {
    placement: "bottom",
    title: "Drawer Title",
    children: (
      <p className="p-4">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    )
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@techv/ui";
import { Button } from "@techv/ui";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],

  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },

    showArrow: {
      control: "boolean",
    },

    disabled: {
      control: "boolean",
    },

    delay: {
      control: { type: "number" },
    },

    content: {
      control: "text",
    },
  },

  args: {
    placement: "top",
    showArrow: true,
    disabled: false,
    delay: 100,
    content: "Tooltip text",
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const TooltipStory: Story = {
  render: (args) => (
    <div className="flex p-10">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex g-10 p-10">
      <Tooltip content="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip content="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip content="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const RichTooltip: Story = {
  render: () => (
    <div className="flex g-10 p-10">
        <Tooltip
            content={
                <div>
                <strong>Info</strong>
                <br />
                It's a tooltip
                </div>
            }
            >
            <Button>Hover me</Button>
    </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex g-10 p-10">
      <Tooltip content="Disabled tooltip" disabled>
        <Button>Disabled</Button>
      </Tooltip>
    </div>
  ),
};

export const NoArrow: Story = {
  render: () => (
    <div className="flex g-10 p-10">
       <Tooltip content="No arrow" showArrow={false}>
        <Button>No Arrow</Button>
      </Tooltip>
    </div>
  ),
};

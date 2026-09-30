import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@techv/ui";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the accordion",
    },
    variant: {
      control: "select",
      options: ["default", "bordered", "ghost"],
      description: "Variant of the accordion",
    },
    defaultExpanded: {
      control: "select",
      description: "IDs of items expanded by default (uncontrolled)",
    },
    activeItems: {
      control: "select",
      description: "IDs of currently active items (controlled)",
    },
    multiple: {
      control: "boolean",
      description: "Allow multiple items to be expanded at once",
    },
  }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const items = [
  {
    id: "1",
    title: "What is Accordion?",
    content: "Accordion is a collapsible component.",
  },
  {
    id: "2",
    title: "Why use it?",
    content: "To save space and improve UX.",
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const Bordered: Story = {
    args: {
      items,
      variant: "bordered",
    },
  };

export const Ghost: Story = {
    args: {
      items,
      variant: "ghost",
    },
  };

  export const DefaultExpanded: Story = {
    args: {
      items,
      defaultExpanded: ["1"],
    },
  };

export const Sizes: Story = {
  render: () => (
    <>
    <h3>small size</h3>
      <Accordion items={items} size="sm" />
      <br />
      <h3>medium size</h3>
      <Accordion items={items} size="md" />
      <br />
      <h3>large size</h3>
      <Accordion items={items} size="lg" />
    </>
  ),
};




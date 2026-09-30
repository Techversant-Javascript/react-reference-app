import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@techv/ui";
import { RadioGroup } from "@techv/ui";

import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],

  argTypes: {
    value: {
      control: "text",
      description: "Currently selected value",
    },

    onChange: {
      action: "changed",
      description: "Callback when selected value changes",
    },

    name: {
      control: "text",
      description: "Name attribute for grouping radios",
    },

    direction: {
      control: "select",
      options: ["row", "column"],
      description: "Layout direction of radio items",
    },

    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of radio items",
    },

    buttonStyle: {
      control: "select",
      options: ["outline", "solid"],
      description: "Style of radio buttons when using options",
    },

    options: {
      control: "object",
      description: "Array of options (label, value, disabled)",
    },

    children: {
      control: false,
      description: "Custom Radio components",
    },
  },

};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    value: "a",
    name: "example",
    direction: "column",
  },

  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <RadioGroup {...args} value={value} onChange={setValue} name="example">
        <Radio label="Option A" value="a" />
        <Radio label="Option B" value="b" />
        <Radio label="Option C" value="c" />
      </RadioGroup>
    );
  },
};

export const WithOptions: Story = {
  args: {
    value: "a",
    buttonStyle: "outline",
    direction: "row",
    options: [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" },
    ],
  },

  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <RadioGroup {...args} value={value} onChange={setValue} />
    );
  },
};

export const ButtonStyle: Story = {
  render: () => {
    const [value, setValue] = useState("a");

    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        buttonStyle="solid"
        options={[
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
          { label: "Option C", value: "c" },
        ]}
      >
        <></>
      </RadioGroup>
    );
  },
};
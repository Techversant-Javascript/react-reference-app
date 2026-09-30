import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio } from "@techv/ui";
import { RadioList } from "../../../../packages/ui/src/components/Radio/Radio.styles";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],

  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the radio is selected",
    },
  
    disabled: {
      control: "boolean",
      description: "Disables the radio button",
    },
  
    variant: {
      control: "select",
      options: ["default", "primary", "error"],
      description: "Visual style of the radio",
    },
  
    label: {
      control: "text",
      description: "Label displayed next to the radio",
    },
  
    name: {
      control: "text",
      description: "Group name for radio buttons",
    },
  
    value: {
      control: "text",
      description: "Value of the radio option",
    },
  
    onChange: {
      action: "changed",
      description: "Callback when radio is selected",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the radio",
    },

  }

};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Radio
        label="Default Radio"
        value="default"
        checked={checked}
        onChange={() => setChecked(true)}
      />
    );
  },
};

export const Variants: Story = {
    render: () => {
      const [value, setValue] = useState("default");

      return (
        <RadioList>
          <Radio
            label="Default"
            value="default"
            name="variant"
            checked={value === "default"}
            onChange={() => setValue("default")}
          />
  
          <Radio
            label="Primary"
            value="primary"
            name="variant"
            checked={value === "primary"}
            onChange={() => setValue("primary")}
            variant="primary"
          />
  
          <Radio
            label="Error"
            value="error"
            name="variant"
            checked={value === "error"}
            onChange={() => setValue("error")}
            variant="error"
          />
        </RadioList>
      );
    },
  };

export const Disabled: Story = {
  render: () => <Radio label="Disabled" value="disabled" disabled />,
};
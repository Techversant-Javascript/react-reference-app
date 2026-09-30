import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@techv/ui";

const meta: Meta<typeof Progress> ={
    title: "Components/Progress",
    component: Progress,
    tags: ["autodocs"],
    argTypes: {
        variant: {
        control: { type: "select" },
        options: ["linear", "circular", "text"],
        },
    },
}

export default meta;

type Sory = StoryObj<typeof Progress>;

export const Linear: Sory = {
    args: {
        value: 70,
        variant: "linear",
    },
};

export const Circular = {
    args: {
      variant: 'circular',
      value: 75,
    },
  };

  export const CircularDays = {
    args: {
      variant: 'circular',
      value: 75,
      label: '75 Days',
    },
  };

  export const CircularDone = {
    args: {
      variant: 'circular',
      value: 100,
      label: 'Done',
    },
  };

  export const LinearWithCustomLabel = {
    args: {
      variant: 'linear',
      value: 35,
      formatLabel: (value: number) => `${value} Tasks Done`,
    },
  };
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@techv/ui";
import styled from 'styled-components';


const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],

    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Whether the checkbox is checked',
        },

        indeterminate: {
            control: 'boolean',
            description: 'Shows indeterminate (partially selected) state',
        },

        disabled: {
            control: 'boolean',
            description: 'Disables the checkbox',
        },

        label: {
            control: 'text',
            description: 'Label displayed next to checkbox',
        },

        onChange: {
            action: 'changed',
            description: 'Callback when checkbox state changes',
        },

        className: {
            control: false,
            description: 'Custom class for styling',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: "Checkbox",
    },
};

export const Checked: Story = {
    args: {
        label: "Checked",
        checked: true,
    },
};

export const Unchecked: Story = {
    args: {
      label: 'Unchecked',
      checked: false,
    },
  };

export const Indeterminate: Story = {
    args: {
        label: "Indeterminate",
        indeterminate: true,
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
    },
};

export const AllStates: Story = {
    render: () => (
      <Column>
        <Checkbox label="Default" onChange={() => {}}/>
        <Checkbox label="Checked" checked onChange={() => {}}/>
        <Checkbox label="Indeterminate" indeterminate onChange={() => {}}/>
        <Checkbox label="Disabled" disabled onChange={() => {}}/>
      </Column>
    ),
  };

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from "@techv/ui";

const meta: Meta<typeof ToggleSwitch> = {
    title: "Components/ToggleSwitch",
    component: ToggleSwitch,
    tags: ["autodocs"],

    argTypes: {
        defaultChecked: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        loading: {
            control: "boolean",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        label: {
            control: "text",
        },
        checkedText: {
            control: "text",
        },
        uncheckedText: {
            control: "text",
        },
    },

    args: {
        label: "Enable notifications",
        defaultChecked: false,
        disabled: false,
        loading: false,
        size: "md",
    },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const WithLabel: Story = {
    args: {
        label: "Enable Notifications",
    },
    render: (args) => {
        const [checked, setChecked] = useState(false);

        return (
            <ToggleSwitch {...args} checked={checked} onChange={setChecked} />
        );
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
        defaultChecked: true,
    },
};

export const WithText: Story = {
    args: {
        checkedText: "ON",
        uncheckedText: "OFF",
        label: "Status",
    },

    render: (args) => {
        const [checked, setChecked] = useState(false);

        return (
            <ToggleSwitch {...args} checked={checked} onChange={setChecked} />
        );
    },
};

export const WithIcons: Story = {
    args: {
        checkedIcon: "✓",
        uncheckedIcon: "✕",
        label: "Security",
    },

    render: (args) => {
        const [checked, setChecked] = useState(true);

        return (
            <ToggleSwitch {...args} checked={checked} onChange={setChecked} />
        );
    },
};

export const Sizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
            }}
        >
            <ToggleSwitch size="sm" defaultChecked />
            <ToggleSwitch size="md" defaultChecked />
            <ToggleSwitch size="lg" defaultChecked />
        </div>
    ),
};

export const Loading: Story = {
    args: {
        loading: true,
        label: "Saving...",
    },
};

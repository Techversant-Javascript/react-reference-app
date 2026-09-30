import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "../../../../packages/ui/src/components/Tabs/Tabs";

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ['autodocs'],

  argTypes:{
    variant:{
      control: "select",
      options: ["underline", "pill", "box"],
      description: "Variant of the tabs",
    },
    orientation:{
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation of the tabs",
    },
    scrollable:{
      control: "boolean",
      description: "Enable scrollable tabs",
    },
  }
};

export default meta;

type Story = StoryObj;

const Template = (args: any) => {
  const [value, setValue] = useState("tab1");

  return (
    <Tabs {...args} value={value} onChange={setValue}>
      <TabList>
        <Tab value="tab1" label="Tab 1" />
        <Tab value="tab2" label="Tab 2" />
        <Tab value="tab3" label="Tab 3" />
      </TabList>

      <TabPanel value="tab1">Content 1</TabPanel>
      <TabPanel value="tab2">Content 2</TabPanel>
      <TabPanel value="tab3">Content 3</TabPanel>

    </Tabs>
  );
};

export const Underline: Story = {
  render: Template,
  args: {
    variant: "underline",
  },
};

export const Pill: Story = {
  render: Template,
  args: {
    variant: "pill",
  },
};

export const Box: Story = {
  render: Template,
  args: {
    variant: "box",
  },
};

export const Vertical: Story = {
  render: Template,
  args: {
    orientation: "vertical",
  },
};

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState("tab0");

    return (
      <div className="w-350">
        <Tabs value={value} onChange={setValue} scrollable>
          <TabList>
            {Array.from({ length: 10 }).map((_, i) => (
              <Tab
                key={i}
                value={`tab${i}`}
                label={`Tab ${i}`}
              />
            ))}
          </TabList>

          {Array.from({ length: 10 }).map((_, i) => (
            <TabPanel key={i} value={`tab${i}`}>
              Content {i}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  },
};
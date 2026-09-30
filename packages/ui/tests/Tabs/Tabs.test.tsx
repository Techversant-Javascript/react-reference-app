import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabList, Tab, TabPanel } from "../../src/components/Tabs/Tabs";

describe("Tabs", () => {
  test("renders tabs and switches content", async () => {
    const user = userEvent.setup();

    const Wrapper = () => {
      const [value, setValue] = React.useState("tab1");

      return (
        <Tabs value={value} onChange={setValue}>
          <TabList>
            <Tab value="tab1" label="Tab 1" />
            <Tab value="tab2" label="Tab 2" />
          </TabList>

          <TabPanel value="tab1">Content 1</TabPanel>
          <TabPanel value="tab2">Content 2</TabPanel>
        </Tabs>
      );
    };

    render(<Wrapper />);

    expect(screen.getByText("Content 1")).toBeInTheDocument();

    await user.click(screen.getByText("Tab 2"));

    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });
});
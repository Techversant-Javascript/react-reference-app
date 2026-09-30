import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "../../src/components/Radio/Radio";
import { RadioGroup } from "../../src/components/RadioGroup/RadioGroup";
import React from "react";

describe("RadioGroup", () => {
  it("selects only one option", async () => {
    const user = userEvent.setup();

    const Wrapper = () => {
      const [value, setValue] = React.useState("a");

      return (
        <RadioGroup value={value} onChange={setValue} name="test">
          <Radio label="A" value="a" />
          <Radio label="B" value="b" />
        </RadioGroup>
      );
    };

    render(<Wrapper />);

    const radios = screen.getAllByRole("radio");

    await user.click(radios[1]);

    expect(radios[1]).toBeChecked();
    expect(radios[0]).not.toBeChecked();
  });
});

it("works with options", async () => {
  const user = userEvent.setup();

  const Wrapper = () => {
    const [value, setValue] = React.useState("a");

    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={[
          { label: "A", value: "a" },
          { label: "B", value: "b" },
        ]}
      />
    );
  };

  render(<Wrapper />);

  const options = screen.getAllByRole("radio");

  await user.click(options[1]);

  expect(options[1]).toHaveAttribute("aria-checked", "true");
});
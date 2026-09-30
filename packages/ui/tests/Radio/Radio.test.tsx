import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "../../src/components/Radio/Radio";

describe("Radio", () => {
  it("renders label", () => {
    render(<Radio label="Option 1" value="option-1" />);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("can be checked", async () => {
    const user = userEvent.setup();

    const Wrapper = () => {
      const [checked, setChecked] = React.useState(false);

      return (
        <Radio
          label="Option"
          value="option-value"
          checked={checked}
          onChange={() => setChecked(true)}
        />
      );
    };

    render(<Wrapper />);

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(radio).toBeChecked();
  });

  it("is disabled", () => {
    render(<Radio label="Disabled" disabled value="disabled" />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });
});
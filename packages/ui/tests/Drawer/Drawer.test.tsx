import { render, screen } from "@testing-library/react";
import { Drawer } from "../../src/components/Drawer/Drawer";

describe("Drawer", () => {
  it("renders drawer content", () => {
    render(
      <Drawer
        open
        onClose={jest.fn()}
      >
        Test Drawer
      </Drawer>
    );

    expect(
      screen.getByText("Test Drawer")
    ).toBeInTheDocument();
  });

  it("has dialog role", () => {
    render(
      <Drawer
        open
        onClose={jest.fn()}
      >
        Content
      </Drawer>
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();
  });
});
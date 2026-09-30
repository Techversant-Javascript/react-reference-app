import { render, screen } from "@testing-library/react";
import { Checkbox } from "../../src/components/Checkbox/Checkbox";

it("renders label", () => {
  render(<Checkbox label="Test" />);
  expect(screen.getByText("Test")).toBeInTheDocument();
});

it("renders checked state", () => {
  render(<Checkbox checked />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();
});

it("renders disabled state", () => {
  render(<Checkbox disabled />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeDisabled();
});
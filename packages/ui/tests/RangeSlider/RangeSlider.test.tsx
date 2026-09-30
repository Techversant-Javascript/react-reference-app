import { fireEvent, render, screen } from "@testing-library/react";
import { RangeSlider } from "../../src/components/RangeSlider/RangeSlider";

describe("RangeSlider", () => {
  test("renders slider", () => {
    render(<RangeSlider />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  test("changes value on user input", () => {
    render(<RangeSlider defaultValue={10} />);

    const slider = screen.getByRole("slider") as HTMLInputElement;

    fireEvent.change(slider, { target: { value: "20" } });
    expect(Number(slider.value)).toBeGreaterThan(10);
  });

  test("shows value when enabled", () => {
    render(<RangeSlider defaultValue={20} showValue />);
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});
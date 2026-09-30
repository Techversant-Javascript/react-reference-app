import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleSwitch } from "../../src/components/ToggleSwitch/ToggleSwitch";

describe("ToggleSwitch", () => {
    it("renders with label", () => {
        render(<ToggleSwitch label="Test Switch" />);

        expect(screen.getByText("Test Switch")).toBeInTheDocument();
    });

    it("respects defaultChecked", () => {
        render(<ToggleSwitch defaultChecked />);

        const btn = screen.getByRole("switch");

        expect(btn).toHaveAttribute("aria-checked", "true");
    });

    it("toggles when clicked", () => {
        render(<ToggleSwitch />);

        const btn = screen.getByRole("switch");

        expect(btn).toHaveAttribute("aria-checked", "false");

        fireEvent.click(btn);

        expect(btn).toHaveAttribute("aria-checked", "true");
    });

    it("calls onChange with correct value", () => {
        const handleChange = jest.fn();

        render(<ToggleSwitch onChange={handleChange} />);

        const btn = screen.getByRole("switch");

        fireEvent.click(btn);

        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it("does not toggle when disabled", () => {
        const handleChange = jest.fn();

        render(<ToggleSwitch disabled onChange={handleChange} />);

        const btn = screen.getByRole("switch");

        fireEvent.click(btn);

        expect(btn).toHaveAttribute("aria-checked", "false");

        expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not toggle when loading", () => {
        const handleChange = jest.fn();

        render(<ToggleSwitch loading onChange={handleChange} />);

        const btn = screen.getByRole("switch");

        fireEvent.click(btn);

        expect(handleChange).not.toHaveBeenCalled();
    });
  
    it("works as controlled component", () => {
        const handleChange = jest.fn();

        const { rerender } = render(
            <ToggleSwitch checked={false} onChange={handleChange} />,
        );

        const btn = screen.getByRole("switch");

        expect(btn).toHaveAttribute("aria-checked", "false");

        fireEvent.click(btn);

        expect(handleChange).toHaveBeenCalledWith(true);

        // simulate parent update
        rerender(<ToggleSwitch checked={true} onChange={handleChange} />);

        expect(btn).toHaveAttribute("aria-checked", "true");
    });
});

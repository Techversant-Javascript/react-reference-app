import { render, screen } from "@testing-library/react";
import { Marquee } from "../../src/components/Marquee/Marquee";

describe("Marquee", () => {
  it("renders children correctly", () => {
    render(
      <Marquee variant="basic">
        <span>React</span>
        <span>TypeScript</span>
        <span>Storybook</span>
      </Marquee>
    );

    expect(screen.getAllByText("React")[0]).toBeInTheDocument();
    expect(screen.getAllByText("TypeScript")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Storybook")[0]).toBeInTheDocument();
  });
});
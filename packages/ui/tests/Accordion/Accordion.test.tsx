import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "../../src/components/Accordion/Accordion";

const items = [
  { id: "1", title: "Item 1", content: "Content 1" },
  { id: "2", title: "Item 2", content: "Content 2" },
];

describe("Accordion", () => {
  test("renders items", () => {
    render(<Accordion items={items} />);

    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  test("defaultExpanded works", () => {
    render(<Accordion items={items} defaultExpanded={["1"]} />);

    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  test("toggle works", async () => {
    render(<Accordion items={items} variant = "default"/>);

    await userEvent.click(screen.getByText("Item 1"));

    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });
});
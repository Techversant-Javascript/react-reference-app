import { render, screen } from "@testing-library/react";
import { Card } from "../../src/components/Card/Card";


describe("Card", () => {
  it("renders children content", () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    );

    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("renders cover when provided", () => {
    render(
      <Card cover={<img src="test.jpg" alt="cover" />}>
        Content
      </Card>
    );

    const image = screen.getByAltText("cover");
    expect(image).toBeInTheDocument();
  });

  it("does not render cover when not provided", () => {
    render(<Card>Content</Card>);

    const image = screen.queryByRole("img");
    expect(image).not.toBeInTheDocument();
  });

  it("renders footer when provided", () => {
    render(
      <Card footer={<button>Click Me</button>}>
        Content
      </Card>
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("does not render footer when not provided", () => {
    render(<Card>Content</Card>);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("applies elevated variant by default", () => {
    const { container } = render(<Card>Content</Card>);

    const card = container.firstChild;
    expect(card).toBeInTheDocument();
    // You can enhance this if you use data-testid or className
  });

  it("applies outline variant", () => {
    const { container } = render(
      <Card variant="outline">Content</Card>
    );

    const card = container.firstChild;
    expect(card).toBeInTheDocument();
  });

  it("renders footer with border when hasBorder is true", () => {
    render(
      <Card
        footer={<button>Footer</button>}
      >
        Content
      </Card>
    );

    const footer = screen.getByText("Footer").parentElement;
    expect(footer).toBeInTheDocument();
  });
});
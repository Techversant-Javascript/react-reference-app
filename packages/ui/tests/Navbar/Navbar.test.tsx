import { render, screen } from "@testing-library/react";
import { Navbar } from "../../src/components/Navbar/Navbar";

describe("Navbar", () => {
  const items = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#",
    },
  ];

  test("renders navbar items", () => {
    render(
      <Navbar
        logo="Techv"
        items={items}
      />
    );

    expect(
      screen.getAllByRole('link', { name: 'Home' })[0]
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('link', { name: 'About' })[0]
    ).toBeInTheDocument();
  });

  test("renders logo", () => {
    render(
      <Navbar
        logo="Techv"
        items={items}
      />
    );

    expect(screen.getByText("Techv")).toBeInTheDocument();
  });

  test("renders search input", () => {
    render(
      <Navbar
        logo="Techv"
        items={items}
        showSearch
      />
    );

    expect(
      screen.getByPlaceholderText("Search...")
    ).toBeInTheDocument();
  });
});
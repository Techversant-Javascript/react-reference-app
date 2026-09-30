import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { Pagination } from "../../src/components/Pagination/Pagination";

describe("Pagination Component", () => {
  test("renders numbered pagination", () => {
    render(
      <Pagination
        variant="numbered"
        currentPage={1}
        totalItems={80}
        pageSize={10}
      />,
    );

    expect(screen.getByText(/Showing 1–10 of 80/i)).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();

    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("calls onPageChange when clicking page", () => {
    const handleChange = jest.fn();

    render(
      <Pagination
        variant="numbered"
        currentPage={1}
        totalItems={80}
        pageSize={10}
        onPageChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText("2"));

    expect(handleChange).toHaveBeenCalledWith(2);
  });

  test("prev button disabled on first page", () => {
    render(
      <Pagination
        variant="numbered"
        currentPage={1}
        totalItems={80}
        pageSize={10}
      />,
    );

    expect(screen.getByText("Prev")).toBeDisabled();
  });

  test("next button disabled on last page", () => {
    render(
      <Pagination
        variant="numbered"
        currentPage={8}
        totalItems={80}
        pageSize={10}
      />,
    );

    expect(screen.getByText("Next")).toBeDisabled();
  });

  test("renders simple pagination", () => {
    render(
      <Pagination
        variant="simple"
        currentPage={2}
        totalItems={50}
        pageSize={10}
      />,
    );

    expect(screen.getByText("Prev")).toBeInTheDocument();

    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("simple next click works", () => {
    const handleChange = jest.fn();

    render(
      <Pagination
        variant="simple"
        currentPage={2}
        totalItems={50}
        pageSize={10}
        onPageChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText("Next"));

    expect(handleChange).toHaveBeenCalledWith(3);
  });

  test("renders infinite loading state", () => {
    render(<Pagination variant="infinite" loading />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders infinite pagination", () => {
    render(<Pagination variant="infinite" />);

    expect(document.body).toBeInTheDocument();
  });

  test("handles zero items gracefully", () => {
    render(
      <Pagination
        variant="numbered"
        currentPage={1}
        totalItems={0}
        pageSize={10}
      />,
    );

    expect(screen.getByText(/Showing 0–0 of 0/i)).toBeInTheDocument();
  });
});

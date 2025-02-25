/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pagination } from ".";

describe("Pagination component tests", () => {
  const mockOnPageSelect = jest.fn();
  const pages = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  it("calls onPageSelect with the right page when a page number is clicked", () => {
    render(
      <Pagination
        currentPage={1}
        onPageSelect={mockOnPageSelect}
        pages={pages}
      />,
    );
    fireEvent.click(screen.getByText("2"));
    expect(mockOnPageSelect).toHaveBeenCalledWith(2);
  });

  it("disables previous button when on the first page", () => {
    render(
      <Pagination
        currentPage={1}
        onPageSelect={mockOnPageSelect}
        pages={pages}
      />,
    );
    const prevButton = screen.getByRole("button", { name: "Previous" });
    expect(prevButton).toBeDisabled();
  });

  it("disables next button when on the last page", () => {
    render(
      <Pagination
        currentPage={pages.length}
        onPageSelect={mockOnPageSelect}
        pages={pages}
      />,
    );
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton).toBeDisabled();
  });

  it("changes pages when next button is clicked", () => {
    render(
      <Pagination
        currentPage={1}
        onPageSelect={mockOnPageSelect}
        pages={pages}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(mockOnPageSelect).toHaveBeenCalledWith(2);
  });

  it("changes pages when previous button is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        onPageSelect={mockOnPageSelect}
        pages={pages}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
    expect(mockOnPageSelect).toHaveBeenCalledWith(2);
  });

  it("does not render when there are no pages", () => {
    const { container } = render(
      <Pagination currentPage={1} onPageSelect={mockOnPageSelect} pages={[]} />,
    );
    expect(container.firstChild).toBeNull();
  });
});

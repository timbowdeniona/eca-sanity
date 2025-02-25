/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./index";

describe("Modal component tests", () => {
  const mockOnClose = jest.fn();

  it("renders the modal with the correct title", () => {
    const title = "Test Modal";
    render(
      <Modal onClose={mockOnClose} title={title}>
        <div>Modal content</div>
      </Modal>,
    );
    const modalTitle = screen.getByText(title);
    expect(modalTitle).toBeInTheDocument();
  });

  it("renders the modal content", () => {
    const content = "Modal content";
    render(
      <Modal onClose={mockOnClose} title="Test Modal">
        <div>{content}</div>
      </Modal>,
    );
    const modalContent = screen.getByText(content);
    expect(modalContent).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(
      <Modal onClose={mockOnClose} title="Test Modal">
        <div>Modal content</div>
      </Modal>,
    );
    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});

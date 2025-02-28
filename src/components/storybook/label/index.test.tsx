/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Label } from ".";

describe("Storybook: Label", () => {
  const sampleLabel = () =>
    render(
      <Label data-testid="storybook-label" variant="cyan-800">
        Sample label
      </Label>,
    );
  it("Renders the correct text content", () => {
    sampleLabel();
    expect(screen.getByTestId("storybook-label").textContent).toBe(
      "Sample label",
    );
  });
  it("Uses the correct background color className", () => {
    sampleLabel();
    expect(screen.getByTestId("storybook-label").classList).toContain(
      "bg-cyan-800",
    );
  });
});

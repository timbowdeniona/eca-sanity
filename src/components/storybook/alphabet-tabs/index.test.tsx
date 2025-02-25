/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { AlphabetTabs } from ".";

describe("Storybook: AlphabetTabs", () => {
  it("Renders a <Link> for active letters and a <span> for inactive letters", () => {
    render(
      <AlphabetTabs
        activeLetters={["A", "B", "C", "D", "G", "L", "M", "N", "P", "T", "S"]}
      />,
    );

    // Check for an active letter (assuming 'A' is active and rendered within a <Link>)
    const activeLetterItem = screen.getByText("A").closest("li");
    expect(activeLetterItem?.querySelector("a")).toBeTruthy();

    // Check for an inactive letter (assuming 'Z' is inactive and rendered within a <span>)
    const inactiveLetterItem = screen.getByText("Z").closest("li");
    expect(inactiveLetterItem?.querySelector("span")).toBeTruthy();

    // Negative test
    const unexpectedLetterItem = screen.getByText("A").closest("li");
    expect(unexpectedLetterItem?.querySelector("span")).toBeFalsy();
  });
});

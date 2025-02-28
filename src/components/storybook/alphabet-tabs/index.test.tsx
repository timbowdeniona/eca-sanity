/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlphabetTabs } from ".";

describe("Storybook: AlphabetTabs", () => {
  it("Renders enabled buttons for active letters and disabled buttons for inactive letters", () => {
    render(
      <AlphabetTabs
        activeLetters={["A", "B", "C", "D", "G", "L", "M", "N", "P", "T", "S"]}
      />,
    );

    // Check for an active letter (should be an enabled button)
    const activeLetterButton = screen.getByText("A").closest("button");
    expect(activeLetterButton).toBeTruthy();
    expect(activeLetterButton).not.toBeDisabled();

    // Check for an inactive letter (should be a disabled button)
    const inactiveLetterButton = screen.getByText("Z").closest("button");
    expect(inactiveLetterButton).toBeTruthy();
    expect(inactiveLetterButton).toBeDisabled();

    // Negative test - ensure active letter isn't disabled
    const activeLetterForNegativeTest = screen.getByText("A").closest("button");
    expect(activeLetterForNegativeTest).not.toBeDisabled();
  });
});

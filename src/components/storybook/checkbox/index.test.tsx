/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from ".";

describe("Storybook: Checkbox", () => {
  const handleChange = jest.fn();
  const renderCheckbox = (props = {}) =>
    render(
      <Checkbox
        data-testid="storybook-checkbox"
        defaultValue="option1"
        label="Option 1"
        name="options"
        onChange={handleChange}
        {...props}
      />,
    );

  it("Renders the label and name if provided", () => {
    renderCheckbox();

    expect(
      screen.getByTestId("storybook-checkbox").getElementsByTagName("label")[0]
        .textContent,
    ).toBe("Option 1");

    expect(
      screen.getByTestId("storybook-checkbox").getElementsByTagName("input")[0]
        .name,
    ).toBe("options");
  });

  it("Show the svg check icon if checkbox is checked", () => {
    renderCheckbox({ defaultChecked: true });

    const svgIcon = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("svg")[0];
    expect(svgIcon).toBeInTheDocument();
  });

  it("Hide the svg check icon if checkbox is unchecked", () => {
    renderCheckbox();

    const svgIcons = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("svg");
    // Expect no SVG icons to be rendered
    expect(svgIcons.length).toBe(0);
  });

  it("Calls onChange with the checked state when the checkbox is clicked", () => {
    renderCheckbox();

    const checkbox = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("input")[0];
    fireEvent.click(checkbox); // Check the checkbox

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: true, // Expect event.target.checked to be true
        }),
      }),
    );
  });

  it("Calls onChange with the checked state when the label is clicked", () => {
    renderCheckbox();

    const label = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("label")[0];
    fireEvent.click(label); // Check the checkbox label

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("Calls onChange with the unchecked state when the default checked is true", () => {
    renderCheckbox({ defaultChecked: true });

    const checkbox = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("label")[0];
    fireEvent.click(checkbox); // Uncheck the checkbox

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: false, // Expect event.target.checked to be false
        }),
      }),
    );
  });

  it("Calls onChange with the unchecked state when the checkbox is clicked again", () => {
    renderCheckbox();

    const checkbox = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("input")[0];

    fireEvent.click(checkbox); // Check the checkbox
    fireEvent.click(checkbox); // Uncheck the checkbox

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: false, // Expect event.target.checked to be false
        }),
      }),
    );
  });

  it("Toggles checked state when clicked", () => {
    renderCheckbox();

    const checkbox = screen
      .getByTestId("storybook-checkbox")
      .getElementsByTagName("input")[0];
    expect(checkbox.checked).toBe(false); // Expect checkbox checked value to be false

    fireEvent.click(checkbox); // Check the checkbox
    expect(checkbox.checked).toBe(true); // Expect checkbox checked value to be true

    fireEvent.click(checkbox); // Uncheck the checkbox
    expect(checkbox.checked).toBe(false); // Expect checkbox checked value to be false
  });
});

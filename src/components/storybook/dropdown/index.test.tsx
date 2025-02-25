/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from ".";

describe("Storybook: Dropdown", () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    "Option 3",
  ];

  const handleChange = jest.fn();
  const renderDropdown = () =>
    render(
      <Dropdown
        data-testid="storybook-dropdown"
        label="Dropdown Label"
        onChangeEvent={handleChange}
        options={options}
        value="option2"
      />,
    );

  it("Renders the label if provided", () => {
    renderDropdown();
    expect(screen.getByText("Dropdown Label")).toBeTruthy();
  });

  it("Renders the selected option", () => {
    renderDropdown();
    const button = screen.getByRole("button");
    expect(button.textContent).toContain("Option 2");
  });

  it("Opens the dropdown when clicked", () => {
    renderDropdown();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeTruthy();
  });

  it("Calls onChangeEvent with the selected value when an option is selected", () => {
    renderDropdown();
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Option 1"));
    expect(handleChange).toHaveBeenCalledWith("option1");
  });

  it("Closes the dropdown after selection", () => {
    renderDropdown();
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Option 1"));
    expect(screen.queryByRole("listbox")).toBeNull();
  });

  it("Renders string options correctly", () => {
    renderDropdown();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Option 3")).toBeTruthy();
  });
});

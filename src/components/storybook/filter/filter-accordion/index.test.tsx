/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterAccordion from ".";

describe("Storybook: FilterAccordion", () => {
  const filter = {
    id: "1",
    key: "topic",
    name: "Topic",
    isOpen: true,
    options: [
      {
        value: "topic1",
        label: "Topic 1",
      },
      {
        value: "topic2",
        label: "Topic 2",
      },
      {
        value: "topic3",
        label: "Topic 3",
      },
    ],
  };

  const handleChange = jest.fn();
  const renderFilterAccordion = (props = {}) =>
    render(
      <FilterAccordion
        data-testid="storybook-filter-dropdown"
        filter={filter}
        onChangeEvent={handleChange}
        {...props}
      />,
    );

  it("Renders the filter name", () => {
    renderFilterAccordion();

    expect(screen.getByText("Topic")).toBeInTheDocument();
  });

  it("Toggles open and closed when clicked", () => {
    renderFilterAccordion();

    const toggleButton = screen.getByRole("button", { name: "Topic" });

    fireEvent.click(toggleButton); // Close dropdown
    expect(screen.queryByText("Topic 1")).not.toBeInTheDocument(); // Check if options are no longer rendered

    fireEvent.click(toggleButton); // Open dropdown
    expect(screen.getByText("Topic 1")).toBeInTheDocument(); // Check if options are rendered
  });

  it("Renders checkboxes based on filter options and values", () => {
    const values = ["topic1", "topic3"]; // Mock selected values

    renderFilterAccordion({ values });

    expect(
      screen
        .getByTestId("storybook-filter-dropdown")
        .getElementsByTagName("input")[0],
    ).toBeChecked(); // Check if Topic 1 is checked
    expect(
      screen
        .getByTestId("storybook-filter-dropdown")
        .getElementsByTagName("input")[1],
    ).not.toBeChecked(); // Check if Topic 2 is not checked
    expect(
      screen
        .getByTestId("storybook-filter-dropdown")
        .getElementsByTagName("input")[2],
    ).toBeChecked(); // Check if Topic 3 is checked
  });

  it("Calls onChange when a checkbox is clicked", () => {
    renderFilterAccordion();

    const option1 = screen
      .getByTestId("storybook-filter-dropdown")
      .getElementsByTagName("input")[0];

    fireEvent.click(option1);

    expect(handleChange).toHaveBeenCalledWith(["topic1"]);
  });
});

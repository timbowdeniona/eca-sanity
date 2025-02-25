/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Filter } from ".";

describe("Filter", () => {
  const items = [
    {
      id: 1,
      key: "filterKey1",
      name: "Filter Name 1",
      isOpen: true,
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ],
    },
    {
      id: 2,
      key: "filterKey2",
      name: "Filter Name 2",
      isOpen: true,
      options: [
        { label: "Option 3", value: "option3" },
        { label: "Option 4", value: "option4" },
      ],
    },
  ];

  const onChange = jest.fn();

  const renderFilter = (props = {}) =>
    render(
      <Filter
        data-testid="storybook-filter"
        items={items}
        onChangeEvent={onChange}
        {...props}
      />,
    );

  it("Renders filter accordions correctly for each item", () => {
    renderFilter();

    // Check if each filter name is rendered
    expect(screen.getByText("Filter Name 1")).toBeInTheDocument();
    expect(screen.getByText("Filter Name 2")).toBeInTheDocument();

    // Check if each filter accordion is rendered
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
    expect(screen.getByText("Option 4")).toBeInTheDocument();
  });

  it("Calls onChange when a filter option is clicked", () => {
    renderFilter();

    const option1Checkbox = screen
      .getByTestId("storybook-filter")
      .getElementsByTagName("input")[0];
    const option3Checkbox = screen
      .getByTestId("storybook-filter")
      .getElementsByTagName("input")[2];

    fireEvent.click(option1Checkbox);
    fireEvent.click(option3Checkbox);

    // Ensure onChange is called with the correct arguments
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith({ filterKey1: ["option1"] });
    expect(onChange).toHaveBeenCalledWith({ filterKey2: ["option3"] });
  });
});

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from ".";

describe("Storybook: SearchInput", () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers(); // Set up fake timers
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Run any remaining timers
    jest.useRealTimers(); // Restore real timers
    handleChange.mockClear(); // Clear mock function
  });

  const renderSearchInput = (props = {}) =>
    render(
      <SearchInput
        data-testid="storybook-search-input"
        defaultValue="hello"
        label="Search Label"
        name="q"
        onChangeEvent={handleChange}
        placeholder="Search something"
        {...props}
      />,
    );

  it("Renders the correct attributes", () => {
    renderSearchInput();
    const label = screen
      .getByTestId("storybook-search-input")
      .getElementsByTagName("input")[0];

    expect(label.name).toBe("q");
    expect(label.value).toBe("hello");
    expect(label.type).toBe("search");
  });

  it("Renders the correct value", () => {
    const value = "test";
    renderSearchInput({ value });
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it("Renders the update value if value state is changed", () => {
    const initialValue = "initial value";
    const updatedValue = "updated value";

    renderSearchInput({ value: initialValue });
    expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();

    act(() => {
      renderSearchInput({ value: updatedValue });
    });

    expect(screen.getByDisplayValue(updatedValue)).toBeInTheDocument();
  });

  it("Renders the sr-only label if provided", () => {
    renderSearchInput();
    const label = screen
      .getByTestId("storybook-search-input")
      .getElementsByTagName("label")[0];

    expect(label.textContent).toBe("Search Label");
    expect(label.classList).toContain("sr-only");
  });

  it("Renders the sr-only label with placeholder value if no label provided but placeholder is provided", () => {
    renderSearchInput({ label: undefined });
    const label = screen
      .getByTestId("storybook-search-input")
      .getElementsByTagName("label")[0];

    expect(label.textContent).toBe("Search something");
    expect(label.classList).toContain("sr-only");
  });

  it("Renders the sr-only label with Search if no value provided", () => {
    renderSearchInput({ label: undefined, placeholder: undefined });
    const label = screen
      .getByTestId("storybook-search-input")
      .getElementsByTagName("label")[0];

    expect(label.textContent).toBe("Search");
    expect(label.classList).toContain("sr-only");
  });

  it("Renders the placeholder correctly", () => {
    renderSearchInput();

    expect(
      screen
        .getByTestId("storybook-search-input")
        .getElementsByTagName("input")[0].placeholder,
    ).toBe("Search something");
  });

  it("Calls onChange when input value changes", () => {
    renderSearchInput();

    fireEvent.change(
      screen
        .getByTestId("storybook-search-input")
        .getElementsByTagName("input")[0],
      { target: { value: "test" } },
    );

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import RadioInput, { Props } from "./index";

let state: { selection: string | null };

beforeEach(() => {
  state = { selection: null };
});

afterEach(() => {
  state = { selection: null };
});

describe("Storybook: RadioInput", () => {
  const defaultProps: Props = {
    onChange: jest.fn(),
    checked: false,
    label: "Option 1",
    name: "radioGroup",
    value: "option1",
  };

  it("renders with correct checked input", () => {
    render(
      new Array(3)
        .fill(0)
        .map((_, i) => (
          <RadioInput
            {...defaultProps}
            data-testid={`radio-input-${i}`}
            key={i}
            label={`This is option ${i}`}
            onChange={e => (state.selection = e.currentTarget.value)}
            value={`option-${i}`}
          />
        )),
    );

    const radio1st = screen.getByTestId("radio-input-0");
    const radio2nd = screen.getByTestId("radio-input-1");
    const radio3rd = screen.getByTestId("radio-input-2");

    fireEvent.click(radio3rd); // Click 3rd
    fireEvent.click(radio1st); // Click 1st
    fireEvent.click(radio2nd); // Click 2nd (last clicked)

    const radio1stInput = radio1st.querySelector("input");
    const radio2ndInput = radio2nd.querySelector("input");
    const radio3rdInput = radio3rd.querySelector("input");

    // Since the last clicked radio is the 2nd one,
    // its value should be equal to the `state.selection`
    expect(state.selection).toBe(radio2ndInput?.value);

    // And the other radio input values should no longer be equal to the `state.selection`
    expect(state.selection).not.toBe(radio3rdInput?.value);
    expect(state.selection).not.toBe(radio1stInput?.value);
  });

  it("renders the radio input with the correct props", () => {
    render(<RadioInput {...defaultProps} />);
    const radioInput = screen.getByLabelText(
      defaultProps.label,
    ) as HTMLInputElement;

    expect(radioInput.checked).toBe(defaultProps.checked);
    expect(radioInput.name).toBe(defaultProps.name);
    expect(radioInput.value).toBe(defaultProps.value);
  });

  it("calls the onChange callback when the radio input is clicked", () => {
    render(<RadioInput {...defaultProps} />);
    const radioInput = screen.getByLabelText(defaultProps.label);

    fireEvent.click(radioInput);

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });
});

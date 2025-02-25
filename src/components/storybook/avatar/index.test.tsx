/**
 * @jest-environment jsdom
 */

/* eslint-disable tailwindcss/no-custom-classname */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./index";

describe("Storybook: Avatar", () => {
  it("renders image when src is provided", () => {
    render(<Avatar alt="Avatar" src="https://path/to/image.jpg" />);
    const imgEl = screen.getByTestId("avatar-image");
    expect(imgEl).toBeInTheDocument();
  });

  it("renders user icon when src is not provided", () => {
    render(<Avatar alt="Avatar" />);
    const iconEl = screen.getByTestId("avatar-icon");
    expect(iconEl).toBeInTheDocument();
  });

  it("applies custom className on image", () => {
    render(
      <Avatar
        alt="Avatar"
        className="custom-class"
        src="https://path/to/image.jpg"
      />,
    );
    const imgEl = screen.getByTestId("avatar-image");
    expect(imgEl).toHaveClass("custom-class");
  });

  it("applies custom className on icon", () => {
    render(<Avatar alt="Avatar" className="custom-class" />);
    const iconEl = screen.getByTestId("avatar-icon");
    expect(iconEl).toHaveClass("custom-class");
  });

  it("applies custom size on image", () => {
    const size = 72;
    render(
      <Avatar
        alt="Avatar"
        className="custom-class"
        size={size}
        src="https://path/to/image.jpg"
      />,
    );
    const imgEl: HTMLImageElement = screen.getByTestId("avatar-image");

    expect(imgEl.width).toBe(size);
    expect(imgEl.height).toBe(size);
  });

  it("applies custom size on icon", () => {
    const size = 72;
    render(<Avatar alt="Avatar" className="custom-class" size={size} />);
    const iconEl: HTMLImageElement = screen.getByTestId("avatar-icon");

    expect(iconEl.style.width).toBe(`${size}px`);
    expect(iconEl.style.height).toBe(`${size}px`);
  });
});

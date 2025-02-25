import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from ".";

const meta: Meta<typeof Placeholder> = {
  title: "Components/Placeholder",
  component: Placeholder,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Default: Story = {
  args: {
    className: "w-48 h-48",
  },
};

export const Rectangular: Story = {
  args: {
    className: "w-64 h-32",
  },
};

export const Circular: Story = {
  args: {
    className: "w-48 h-48 rounded-full",
  },
};

export const CustomSize: Story = {
  args: {
    className: "w-80 h-24",
  },
};

export const CustomColor: Story = {
  args: {
    className: "w-48 h-48 bg-blue",
  },
};

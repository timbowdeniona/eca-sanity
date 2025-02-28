import type { Meta, StoryObj } from "@storybook/react";

import { Label } from ".";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purple: Story = {
  args: {
    children: "Label",
    variant: "cyan-800",
  },
};

export const Grey: Story = {
  args: {
    children: "Label",
    variant: "grey",
  },
};

export const Green: Story = {
  args: {
    children: "Label",
    variant: "green",
  },
};

export const Red: Story = {
  args: {
    children: "Label",
    variant: "red",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { MultiSelect } from ".";

const meta = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    hideLabel: { control: "boolean" },
    options: { control: "object" },
    value: { control: "object" },
    placeholder: { control: "text" },
    onChangeEvent: { action: "changed" },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
      { label: "Option 4", value: "4" },
      { label: "Option 5", value: "5" },
    ],
    placeholder: "Select options",
  },
};

export const WithLabel: Story = {
  args: {
    ...Basic.args,
    label: "Select multiple options",
  },
};

export const WithPreselectedValues: Story = {
  args: {
    ...WithLabel.args,
    value: ["1", "3"],
  },
};

export const WithStringOptions: Story = {
  args: {
    options: ["Red", "Green", "Blue", "Yellow", "Purple"],
    label: "Select colors",
    placeholder: "Choose colors",
  },
};

export const WithHiddenLabel: Story = {
  args: {
    ...WithLabel.args,
    hideLabel: true,
  },
};

export const WithLongOptions: Story = {
  args: {
    options: [
      {
        label: "This is a very long option that might overflow",
        value: "long1",
      },
      { label: "Another lengthy option to test wrapping", value: "long2" },
      { label: "Short option", value: "short" },
      {
        label: "Yet another long option to ensure proper handling",
        value: "long3",
      },
    ],
    label: "Long options test",
    placeholder: "Select long options",
  },
};

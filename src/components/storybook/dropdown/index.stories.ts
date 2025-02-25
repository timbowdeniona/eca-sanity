import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onChangeEvent: { action: "changed" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    options: ["Newest first", "Oldest first", "A-Z", "Z-A", "Relevance"],
    placeholder: "Select an option",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Sort by",
    options: ["Newest first", "Oldest first", "A-Z", "Z-A", "Relevance"],
    value: "Newest first",
  },
};

export const WithObjectOptions: Story = {
  args: {
    label: "Items per page",
    options: [
      { label: "10 items", value: "10" },
      { label: "20 items", value: "20" },
      { label: "50 items", value: "50" },
      { label: "100 items", value: "100" },
    ],
    value: "20",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled dropdown",
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: true,
    value: "Option 1",
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: "Select a fruit",
    options: ["Apple", "Banana", "Cherry", "Date"],
    placeholder: "Choose a fruit",
  },
};

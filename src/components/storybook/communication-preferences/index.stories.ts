import type { Meta, StoryObj } from "@storybook/react";
import { CommunicationPreferences } from ".";

const meta = {
  title: "Components/CommunicationPreferences",
  component: CommunicationPreferences,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CommunicationPreferences>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const UnChecked: Story = {
  args: {
    checked: false,
  },
};

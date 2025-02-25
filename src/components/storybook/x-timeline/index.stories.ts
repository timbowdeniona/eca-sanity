import type { Meta, StoryObj } from "@storybook/react";

import { XTimeline } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/XTimeline",
  component: XTimeline,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof XTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AQA: Story = {
  args: {
    alt: "Tweets by AQA",
    headline: "Join the conversation",
    username: "AQA",
  },
};

export const AQAMaths: Story = {
  args: {
    ...AQA.args,
    username: "AQAMaths",
  },
};

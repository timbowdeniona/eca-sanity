import type { Meta, StoryObj } from "@storybook/react";

import { SearchPromo } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SearchPromo",
  component: SearchPromo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SearchPromo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    description:
      "UAS covers all topics from school curriculum subjects to life skills, outdoor activities, arts and crafts, and work-related learning. ",
    headline:
      "Search our extensive library to tailor a bespoke learning journey",
  },
};

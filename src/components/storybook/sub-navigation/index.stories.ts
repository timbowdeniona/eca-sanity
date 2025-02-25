import type { Meta, StoryObj } from "@storybook/react";

import { SubNavigation } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SubNavigation",
  component: SubNavigation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SubNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    activeLinkIndex: 2,
    color: "#0989BF",
    links: [
      {
        title: "Specification",
        url: "/specification",
      },
      {
        title: "Planning resources",
        url: "/planning-resources",
      },
      {
        title: "Teaching resources",
        url: "/teaching-resources",
      },
      {
        title: "Assessment resources",
        url: "/assessment-resources",
      },
      {
        title: "Exam dates",
        url: "/exam-dates",
      },
    ],
  },
};

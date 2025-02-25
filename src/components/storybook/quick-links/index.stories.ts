import type { Meta, StoryObj } from "@storybook/react";

import { QuickLinks } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/QuickLinks",
  component: QuickLinks,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof QuickLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example1: Story = {
  args: {
    title: "Popular quick links",
    links: [
      {
        target: "_blank",
        title: "Past papers",
        url: "https://google.com",
      },
      {
        title: "Dates and timetables",
        url: "https://google.com",
      },
      {
        title: "Subjects",
        url: "https://google.com",
      },
      {
        title: "Grade boundaries",
        url: "https://google.com",
      },
      {
        title: "Results days",
        url: "https://google.com",
      },
      {
        title: "Certificate services",
        url: "https://google.com",
      },
    ],
  },
};

export const Example2: Story = {
  args: {
    title: "Popular subjects",
    links: [
      {
        target: "_blank",
        title: "Mathematics",
        url: "https://google.com",
      },
      {
        title: "English Literature",
        url: "https://google.com",
      },
      {
        title: "Science",
        url: "https://google.com",
      },
      {
        title: "History",
        url: "https://google.com",
      },
      {
        title: "Geography",
        url: "https://google.com",
      },
      {
        title: "Computer Science",
        url: "https://google.com",
      },
      {
        title: "Art and Design",
        url: "https://google.com",
      },
      {
        title: "Business Studies",
        url: "https://google.com",
      },
      {
        title: "Modern Foreign Languages",
        url: "https://google.com",
      },
      {
        title: "Physical Education",
        url: "https://google.com",
      },
      {
        title: "Religious Studies",
        url: "https://google.com",
      },
      {
        title: "Drama",
        url: "https://google.com",
      },
    ],
  },
};

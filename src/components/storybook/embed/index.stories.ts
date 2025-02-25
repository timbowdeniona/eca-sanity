import type { Meta, StoryObj } from "@storybook/react";

import { Embed } from ".";

const meta = {
  title: "Components/Embed",
  component: Embed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    embedLink: {
      control: { type: "text" },
    },
    minHeight: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Embed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Podcast: Story = {
  args: {
    embedLink:
      "https://omny.fm/shows/inside-exams/unit-award-scheme-12-000-paths-to-achievement/embed?style=artwork",
  },
};

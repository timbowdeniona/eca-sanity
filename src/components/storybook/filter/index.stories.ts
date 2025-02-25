import type { Meta, StoryObj } from "@storybook/react";

import { Filter } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Filter",
  component: Filter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
  args: {
    style: { width: "300px" },
    items: [
      {
        id: 1,
        key: "topic",
        name: "Topic",
        options: [
          { label: "Topic 1 (3)", value: "topic1" },
          { label: "Topic 2 (4)", value: "topic2" },
        ],
      },
      {
        id: 2,
        key: "tier",
        name: "Tier",
        options: [
          { label: "Tier 1 (1)", value: "tier1" },
          { label: "Tier 2 (3)", value: "tier2" },
        ],
      },
    ],
  },
};

export const LongList: Story = {
  args: {
    ...Sample.args,
    items: [
      ...Sample.args.items,
      {
        id: 3,
        key: "options",
        name: "Options",
        isOpen: true,
        options: Array.from(Array(30).keys()).map(index => ({
          label: `Option #${index}`,
          value: index + "",
        })),
      },
    ],
  },
};

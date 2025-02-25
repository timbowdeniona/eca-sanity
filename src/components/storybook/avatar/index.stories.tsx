import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@/components/storybook/avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Avatar",

  component: Avatar,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: { control: "text" },
    src: { control: "text" },
    alt: { control: "text" },
    size: { control: "number" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSrc: Story = {
  args: {
    src: "https://demoee.org/use-cases/wp-content/uploads/sites/7446/2017/07/john-doe.jpg",
    alt: "John Doe",
    size: 48,
  },
};

export const NoImageSrc: Story = {
  args: {
    alt: "John Doe",
    size: 48,
    className: "[&_path]:fill-purple",
  },
};

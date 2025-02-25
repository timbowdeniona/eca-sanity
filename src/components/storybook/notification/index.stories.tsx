import type { Meta, StoryObj } from "@storybook/react";

import { Notification } from ".";
import HeartIcon from "../icons/HeartIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const AddToFavourite: Story = {
  args: {
    variant: "red",
    children: (
      <div className="flex items-center gap-2">
        <HeartIcon className="size-6 [&_path]:stroke-white" />
        <h4>The resource has been added to your Favourites</h4>
      </div>
    ),
    isOpen: true,
  },
};

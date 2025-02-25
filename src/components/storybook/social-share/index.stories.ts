import type { Meta, StoryObj } from "@storybook/react";

import SocialShare from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SocialShare",
  component: SocialShare,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof SocialShare>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AllIcons: Story = {
  args: {
    items: [
      {
        identifier: "whatsapp",
        shareLink: "",
        enabled: true,
      },
      {
        identifier: "linkedin",
        shareLink: "",
        enabled: true,
      },
      {
        identifier: "x",
        shareLink: "",
        enabled: true,
      },
      {
        identifier: "facebook",
        shareLink: "",
        enabled: true,
      },
    ],
  },
};

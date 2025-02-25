import type { Meta, StoryObj } from "@storybook/react";

import { VideoEmbedCard } from "@/components/storybook/video-embed-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/VideoEmbedCard",

  component: VideoEmbedCard,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof VideoEmbedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    title: "Sample Video Title",
    youtubeEmbedUrl:
      "https://www.youtube.com/embed/ajIbKu9-utw?si=8umsVbuFwO1-G_HT",
    className: "w-96",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dignissimos necessitatibus excepturi eveniet numquam atque provident.",
    owner: {
      name: "Dee Wata",
      description: "Teacher",
      imageUrl:
        "https://demoee.org/use-cases/wp-content/uploads/sites/7446/2017/07/john-doe.jpg",
    },
  },
};

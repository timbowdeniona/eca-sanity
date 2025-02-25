import { Meta, StoryObj } from "@storybook/react";
import { VideoPlayer } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/VideoPlayer",

  component: VideoPlayer,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    src: { control: "text" },
  },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackgroundImage: Story = {
  args: {
    bgImageUrl:
      "https://cdn.sanity.io/images/p28bar15/production/0ea8d1924b9f63dd27bf89112692c29cb1167699-1576x680.jpg",
    border: true,
    fullWidth: false,
    src: "https://www.youtube.com/embed/ajIbKu9-utw?si=8umsVbuFwO1-G_HT",
  },
};

export const PlainVideo: Story = {
  args: {
    border: false,
    fullWidth: true,
    src: "https://www.youtube.com/embed/ajIbKu9-utw?si=8umsVbuFwO1-G_HT",
  },
};

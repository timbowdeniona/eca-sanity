import type { Meta, StoryObj } from "@storybook/react";

import { Promo } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Promo",
  component: Promo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    heading: "Post-16: resources and support",
    description:
      "Here you'll find everything you need to get your GCSE Maths learners resit ready.",
    link: "/",
    linkText: "Visit resources",
    mediaType: "image",
    variant: "primary",
  },
};

export const BasicSecondary: Story = {
  args: {
    ...Basic.args,
    variant: "secondary",
  },
};

export const Image: Story = {
  args: {
    ...Basic.args,
    image: "https://picsum.photos/900/900",
  },
};

export const ImageSecondary: Story = {
  args: {
    ...Image.args,
    variant: "secondary",
  },
};

export const YoutubeEmbed: Story = {
  args: {
    ...Basic.args,
    youtubeEmbedUrl:
      "https://www.youtube.com/embed/ajIbKu9-utw?si=8umsVbuFwO1-G_HT",
  },
};

export const YoutubeEmbedSecondary: Story = {
  args: {
    ...YoutubeEmbed.args,
    variant: "secondary",
  },
};

export const ImageLeft: Story = {
  args: {
    ...Basic.args,
    image: "https://picsum.photos/900/900",
    mediaPosition: "left",
  },
};

export const ImageLeftSecondary: Story = {
  args: {
    ...Basic.args,
    image: "https://picsum.photos/900/900",
    mediaPosition: "left",
    variant: "secondary",
  },
};

export const YoutubeEmbedLeft: Story = {
  args: {
    ...Basic.args,
    youtubeEmbedUrl:
      "https://www.youtube.com/embed/ajIbKu9-utw?si=8umsVbuFwO1-G_HT",
    mediaPosition: "left",
  },
};

export const YoutubeEmbedLeftSecondary: Story = {
  args: {
    ...Basic.args,
    youtubeEmbedUrl:
      "https://www.youtube.com/embed/ajIbKu9-utw?si=8umsVbuFwO1-G_HT",
    mediaPosition: "left",
    variant: "secondary",
  },
};

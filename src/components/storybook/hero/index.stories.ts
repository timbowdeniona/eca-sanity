import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    image: { name: "Default Image" },
    imageLg: { name: "Desktop Image" },
    imageMd: { name: "Table Image" },
    imageSm: { name: "Mobile Image" },
    ctaTarget: {
      control: "radio",
      options: ["_self", "_blank", "_parent", "_top"],
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    image: "images/Hero_Image_Purple_Desktop.png",
    imageSm: "images/Hero_Image_Purple_Tablet_Mobile.png",
    imageMd: "",
    imageLg: "",
    imageAlt: "Hero Image",
    text: "We aim to Never Let a Learner Down",
    subtext:
      "AQA is here to ensure students receive fair assessment, no matter their background or level. ",
    cta: "Learn more about AQA",
    ctaLink: "https://google.com",
    ctaTarget: "_blank",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    image: "images/Hero_Image_Red_Desktop.png",
    imageSm: "images/Hero_Image_Red_Tablet_Mobile.png",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { TitleBar } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TitleBar",
  component: TitleBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    primaryColor: { control: { type: "color" } },
    secondaryColor: { control: { type: "color" } },
    textColor: { control: { type: "color" }, defaultValue: "white" },
  },
} satisfies Meta<typeof TitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const English: Story = {
  args: {
    title: "English",
    variant: "primary",
    primaryColor: "#9F9100",
    secondaryColor: "#E0CC00",
    textColor: "white",
  },
};

export const ArtAndDesign: Story = {
  args: {
    title: "Art and Design",
    variant: "primary",
    primaryColor: "#AC5290",
    secondaryColor: "#EF86CE",
    textColor: "white",
  },
};

export const Politics: Story = {
  args: {
    title: "Politics",
    variant: "primary",
    primaryColor: "#008782",
    secondaryColor: "#00BBB4",
    textColor: "white",
  },
};

export const GCSEMathematics: Story = {
  args: {
    title: "GCSE Mathematics",
    variant: "primary",
    subtitle: "8300",
    primaryColor: "#0989BF",
    secondaryColor: "#3CB4E5",
    textColor: "white",
  },
};

export const CampaignTitlePrimary: Story = {
  args: {
    title: "Spark something powerful",
    description:
      "Inspirational new texts and poetry for GCSE English Literature",
    color: "purple",
    variant: "secondary",
  },
};

export const CampaignTitleSecondary: Story = {
  args: {
    title: "Your guide to digital exams",
    description:
      "In this digital world we all use technology to work, live, learn and play.\nWe’re taking the first steps towards digital exams.",
    color: "white",
    variant: "secondary",
  },
};

export const SectionTitle: Story = {
  args: {
    title: "Your guide to digital exams",
    description:
      "In this digital world we all use technology to work, live, learn and play.\nWe’re taking the first steps towards digital exams.",
    variant: "tertiary",
    image: "https://picsum.photos/900/900",
  },
};

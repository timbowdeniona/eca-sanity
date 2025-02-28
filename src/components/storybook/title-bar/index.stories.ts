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
    // Custom controls can be added here if needed
  },
} satisfies Meta<typeof TitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const English: Story = {
  args: {
    title: "English",
    variant: "primary",
    color: "cyan-800",
    // Use style prop for custom colors
    style: {
      "--primary-color": "#9F9100",
      "--secondary-color": "#E0CC00",
      "--text-color": "white",
    } as React.CSSProperties,
  },
};

export const ArtAndDesign: Story = {
  args: {
    title: "Art and Design",
    variant: "primary",
    color: "cyan-800",
    // Use style prop for custom colors
    style: {
      "--primary-color": "#AC5290",
      "--secondary-color": "#EF86CE",
      "--text-color": "white",
    } as React.CSSProperties,
  },
};

export const Politics: Story = {
  args: {
    title: "Politics",
    variant: "primary",
    color: "cyan-800",
    // Use style prop for custom colors
    style: {
      "--primary-color": "#008782",
      "--secondary-color": "#00BBB4",
      "--text-color": "white",
    } as React.CSSProperties,
  },
};

export const GCSEMathematics: Story = {
  args: {
    title: "GCSE Mathematics",
    variant: "primary",
    subtitle: "8300",
    color: "cyan-800",
    // Use style prop for custom colors
    style: {
      "--primary-color": "#0989BF",
      "--secondary-color": "#3CB4E5",
      "--text-color": "white",
    } as React.CSSProperties,
  },
};

export const CampaignTitlePrimary: Story = {
  args: {
    title: "Spark something powerful",
    description:
      "Inspirational new texts and poetry for GCSE English Literature",
    color: "cyan-800",
    variant: "secondary",
  },
};

export const CampaignTitleSecondary: Story = {
  args: {
    title: "Your guide to digital exams",
    description:
      "In this digital world we all use technology to work, live, learn and play.\nWe're taking the first steps towards digital exams.",
    color: "white",
    variant: "secondary",
  },
};

export const SectionTitle: Story = {
  args: {
    title: "Your guide to digital exams",
    description:
      "In this digital world we all use technology to work, live, learn and play.\nWe're taking the first steps towards digital exams.",
    variant: "tertiary",
    image: "https://picsum.photos/900/900",
  },
};

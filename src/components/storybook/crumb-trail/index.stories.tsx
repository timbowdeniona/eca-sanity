import type { Meta, StoryObj } from "@storybook/react";

import CrumbTrail from ".";
import TitleBar from "../title-bar";

import {
  CampaignTitlePrimary,
  CampaignTitleSecondary,
  English,
  GCSEMathematics,
  SectionTitle,
} from "../title-bar/index.stories";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/CrumbTrail",
  component: CrumbTrail,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof CrumbTrail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subject: Story = {
  args: {
    currentPage: "English",
    items: [
      {
        link: "subjects",
        label: "Subjects",
      },
    ],
    variant: "primary",
  },
  render: args => (
    <>
      <CrumbTrail {...args} />
      <TitleBar {...English.args} />
    </>
  ),
};

export const Qualification: Story = {
  args: {
    currentPage: "GCSE Mathematics",
    items: [
      {
        link: "subjects",
        label: "Subjects",
      },
      {
        link: "mathematics",
        label: "Mathematics",
      },
      {
        link: "gcse",
        label: "GCSE",
      },
    ],
    variant: "primary",
  },
  render: args => (
    <>
      <CrumbTrail {...args} />
      <TitleBar {...GCSEMathematics.args} />
    </>
  ),
};

export const CampaignTitle: Story = {
  args: {
    currentPage: "Spark something powerful",
    items: [],
    variant: "primary",
  },
  render: args => (
    <>
      <CrumbTrail {...args} />
      <TitleBar {...CampaignTitlePrimary.args} />
    </>
  ),
};

export const CampaignTitle2: Story = {
  args: {
    currentPage: "Digital Exams",
    items: [],
    variant: "primary",
  },
  render: args => (
    <>
      <CrumbTrail {...args} />
      <TitleBar {...CampaignTitleSecondary.args} />
    </>
  ),
};

export const SectionTitleExample: Story = {
  args: {
    currentPage: "Digital Exams",
    items: [],
    variant: "primary",
  },
  render: args => (
    <>
      <CrumbTrail {...args} />
      <TitleBar {...SectionTitle.args} />
    </>
  ),
};

export const DynamicPage: Story = {
  args: {
    currentPage:
      "Delivery of results for vocational and technical qualifications",
    items: [
      {
        link: "exams-admin",
        label: "Exams Admin",
      },
      {
        link: "exams-administration-updates",
        label: "Exams administration updates",
      },
    ],
    variant: "secondary",
  },
  render: args => (
    <>
      <CrumbTrail {...args} />
    </>
  ),
};

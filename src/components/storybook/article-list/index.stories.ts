import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ArticleList",
  component: ArticleList,
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
    },
  },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "News and insights (max. 6 list items)",
    variant: "primary",
    articles: [
      {
        id: "9325df17-5a3e-47f4-a6fa-ffda55b3a3c2",
        image: "https://picsum.photos/1600/900",
        badge: "BLOG POST",
        highlightedText: "Adaptive Assessment",
        headline:
          "MFL Adaptive Assessment: A missing ingredient in the resit recipe? ",
        summary:
          "The number of students resitting their maths GCSE is growing, but the prop... ",
        link: "https://google.com",
      },
      {
        id: "52b0d399-3d2b-493f-a23f-7eb28c09dd2a",
        image: "https://picsum.photos/1601/900",
        badge: "BLOG POST",
        highlightedText: "Send",
        headline: "Student success: Every little achievement counts",
        summary:
          "TBaroness Morgan is calling for students to be given ‘self-belief’ lessons as a way of developing their characters and ...",
        link: "https://google.com",
      },
      {
        id: "1c6c361c-4bfc-49d5-ac20-1c1dfedc1e4d",
        image: "https://picsum.photos/1602/900",
        badge: "BLOG POST",
        highlightedText: "Art and Design",
        headline: "Progress 8 – How much can it flex?",
        summary:
          "Progress 8 has come in for criticism in recent months for the way it combines with the Ebacc to skew schools’ focus ...",
        link: "https://google.com",
      },
      {
        id: "adf4b14f-1530-4512-878a-19cb0689bdaa",
        image: "https://picsum.photos/1603/900",
        badge: "BLOG POST",
        highlightedText: "Assessment",
        headline:
          "Extended Project Qualifications: What do the statistics say about student growth?",
        summary: "A former student from Nottingham C...",
        link: "https://google.com",
      },
    ],
    cta: "More News and Insights from AQi",
    ctaLink: "https://google.com",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

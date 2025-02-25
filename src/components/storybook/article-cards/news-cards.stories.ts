import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCards } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ArticleCards",
  component: ArticleCards,
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
    titlePlacement: {
      control: "inline-radio",
      options: ["left", "top"],
      defaultValue: "left",
      description: "Title Placement (Refresh page to fix carousel item count)",
    },
  },
} satisfies Meta<typeof ArticleCards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "News and insights",
    variant: "primary",
    titlePlacement: "left",
    description: "Description of curated content collection",
    articles: [
      {
        id: "4f795b2b-898c-474e-8e0f-6c7fcc92db7b",
        image: "https://picsum.photos/1600/900",
        badge: "BLOG POST",
        summary:
          "The number of students resitting their maths GCSE is growing, but the prop... ",
        link: "https://google.com",
      },
      {
        id: "22b7ef05-6bf5-446e-92f8-82874e24b5db",
        image: "https://picsum.photos/1601/900",
        badge: "BLOG POST",
        summary:
          "TBaroness Morgan is calling for students to be given ‘self-belief’ lessons as a way of developing their characters and ...",
        link: "https://google.com",
      },
      {
        id: "2919f29e-61f8-4cb3-b7d8-29ac3d67f888",
        image: "https://picsum.photos/1602/900",
        badge: "BLOG POST",
        summary:
          "Progress 8 has come in for criticism in recent months for the way it combines with the Ebacc to skew schools’ focus ...",
        link: "https://google.com",
      },
      {
        id: "e02a8924-8e6e-44af-818e-109c0e6cf255",
        image: "https://picsum.photos/1603/900",
        badge: "BLOG POST",
        summary: "A former student from Nottingham C...",
        link: "https://google.com",
      },
      {
        id: "4f795b2b-898c-474e-8e0f-6c7fcc92db7b",
        image: "https://picsum.photos/1600/900",
        badge: "BLOG POST",
        summary:
          "The number of students resitting their maths GCSE is growing, but the prop... ",
        link: "https://google.com",
      },
      {
        id: "22b7ef05-6bf5-446e-92f8-82874e24b5db",
        image: "https://picsum.photos/1601/900",
        badge: "BLOG POST",
        summary:
          "TBaroness Morgan is calling for students to be given ‘self-belief’ lessons as a way of developing their characters and ...",
        link: "https://google.com",
      },
      {
        id: "2919f29e-61f8-4cb3-b7d8-29ac3d67f888",
        image: "https://picsum.photos/1602/900",
        badge: "BLOG POST",
        summary:
          "Progress 8 has come in for criticism in recent months for the way it combines with the Ebacc to skew schools’ focus ...",
        link: "https://google.com",
      },
      {
        id: "e02a8924-8e6e-44af-818e-109c0e6cf255",
        image: "https://picsum.photos/1603/900",
        badge: "BLOG POST",
        summary: "A former student from Nottingham C...",
        link: "https://google.com",
      },
    ],
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
    titlePlacement: "top",
  },
};

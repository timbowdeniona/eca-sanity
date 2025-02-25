import type { Meta, StoryObj } from "@storybook/react";

import { TopPicks } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TopPicks",
  component: TopPicks,
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
    tertiaryColor: { control: { type: "color" } },
  },
} satisfies Meta<typeof TopPicks>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Math: Story = {
  args: {
    primaryColor: "#0989BF",
    secondaryColor: "#3CB4E5",
    tertiaryColor: "#6BC4E8",
    title: "Maths Picks",
    items: [
      {
        id: "1a79a421-991a-4b1c-a283-3c50c660663f",
        title: "Switch to a fairer GCSE Maths",
        description: "Further Maths: resources to help you plan ahead",
        qualificationLevel: "GCSE",
        image: "https://picsum.photos/1203/900",
        link: "https://google.com",
      },
      {
        id: "a64adde4-406c-40b4-b9b9-0542a1f819ca",
        title: "Find post-16 resources and support",
        description: "Exampro",
        qualificationLevel: "furhter maths",
        image: "https://picsum.photos/1243/900",
        link: "https://google.com",
      },
      {
        id: "3d6d3f57-88dc-4b01-b9cc-740ab2e328a3",
        title:
          "Benefit from our improved papers, wide range of resources and dedicated team of experts.",
        description:
          "Challenge and motivate your learners with our maths qualifications",
        qualificationLevel: "GCSE",
        image: "https://picsum.photos/1213/900",
        link: "https://google.com",
      },
      {
        id: "74121cc1-63ac-4c4a-a344-caa7d47617a4",
        title:
          "Here you’ll find everything you need to get your GCSE Maths learners resit ready.",
        description:
          "Find past paper questions so you can make customised assessments for revision, homework and topic tests for GCSE and A-level Maths.",
        qualificationLevel: "resource",
        image: "https://picsum.photos/1233/900",
        link: "https://google.com",
      },
      {
        id: "5cfae278-f844-4321-92b9-a1bbcfa50634",
        title:
          "Laborum accusantium optio deserunt qui voluptas est necessitatibus error necessitatibus.",
        description: "Excepturi et quaerat deleniti ut.",
        qualificationLevel: "ABC",
        image: "https://picsum.photos/1343/900",
        link: "https://google.com",
      },
    ],
  },
};

export const English: Story = {
  args: {
    ...Math.args,
    primaryColor: "#9F9100",
    secondaryColor: "#E0CC00",
    tertiaryColor: "#F3E500",
    title: "English Picks",
  },
};

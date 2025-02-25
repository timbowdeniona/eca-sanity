import type { Meta, StoryObj } from "@storybook/react";

import { Cards } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Cards",
  component: Cards,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CoreSubjects: Story = {
  args: {
    headline: "GCSE Subjects",
    description: "Explore units mapped to our GCSE Specifications",
    links: [
      {
        title: "Art and Design",
        color: "#b17f00",
        link: "/programmes/unit-award-scheme/units/art-and-design",
      },
      {
        title: "Computer Science",
        color: "#008782",
        link: "/programmes/unit-award-scheme/units/computer-science",
      },
      {
        title: "English",
        color: "#9f9100",
        link: "/programmes/unit-award-scheme/units/english",
      },
      {
        title: "French",
        color: "#371376",
        link: "/programmes/unit-award-scheme/units/french",
      },
      {
        title: "Geography",
        color: "#ca6648",
        link: "/programmes/unit-award-scheme/units/geography",
      },
      {
        title: "History",
        color: "#ca6648",
        link: "/programmes/unit-award-scheme/units/history",
      },
      {
        title: "Maths",
        color: "#0989bf",
        link: "/programmes/unit-award-scheme/units/maths",
      },
      {
        title: "PSHE Education",
        color: "#371376",
        link: "/programmes/unit-award-scheme/units/pshe",
      },
      {
        title: "Psychology",
        color: "#ac5290",
        link: "/programmes/unit-award-scheme/units/psychology",
      },
      {
        title: "Religious Studies",
        color: "#ca6648",
        link: "/programmes/unit-award-scheme/units/religious-studies",
      },
      {
        title: "Science",
        color: "#549638",
        link: "/programmes/unit-award-scheme/units/science",
      },
    ],
  },
};

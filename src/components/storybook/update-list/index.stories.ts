import type { Meta, StoryObj } from "@storybook/react";

import { UpdateList } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/UpdateList",
  component: UpdateList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    primaryColor: { control: { type: "color" } },
  },
} satisfies Meta<typeof UpdateList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const English: Story = {
  args: {
    items: [
      {
        id: "fab7c21d-00ce-46a2-b1f9-709d32d196f2",
        title:
          "Updated JCQ guidance: use of artificial intelligence in assessments",
        date: "15 Feb 2024",
        link: "#",
        type: "exams administration",
      },
      {
        id: "ceb3b358-cfa4-40dd-a3dd-c16a65e5e365",
        title: "Formulae and equations sheets for exams in 2024",
        date: "12 Jan 2024",
        link: "http://google.com",
        type: "news",
      },
      {
        id: "a599ad90-c506-4ba7-9386-88ec7182ec95",
        title:
          "Delivery of results for vocational and technical qualifications",
        date: "12 Jan 2024",
        link: "#",
        type: "exams administration",
      },
    ],
    primaryColor: "#9F9100",
    title: "Approved textbooks",
    viewAllLink: "#",
  },
};

export const Math: Story = {
  args: {
    ...English.args,
    primaryColor: "#0989BF",
  },
};

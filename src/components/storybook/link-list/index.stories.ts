import type { Meta, StoryObj } from "@storybook/react";

import { LinkList } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/LinkList",
  component: LinkList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    tertiaryColor: { control: { type: "color" } },
  },
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    items: [
      {
        id: "82667e89-87e9-4bd8-9f5c-2c45597295ea",
        title: "AS and A-level English Language",
        link: "https://google.com",
      },
      {
        id: "c1ae1312-8aba-49b4-a2ea-e1c54386e21a",
        title: "AS and A-level English Language and Literature",
        link: "https://google.com",
      },
      {
        id: "f1188a9f-9d1b-42fa-b935-2725bd93d177",
        title: "AS and A-level English Literature A",
        link: "https://google.com",
      },
      {
        id: "43bf0dad-722b-430c-b5c0-f7950569f1cc",
        title: "AS and A-level English Literature B",
        link: "https://google.com",
      },
      {
        id: "8e23f11d-28ca-4d2f-80ea-bae6e0f62cd6",
        title: "GCSE English Language",
        link: "https://google.com",
      },
      {
        id: "03aa3ff4-602c-4b0d-bdf6-11948fbdbf3b",
        title: "GCSE English Literature",
        link: "https://google.com",
      },
      {
        id: "0d902cf3-723d-46d5-8425-8d35019fba5b",
        title: "ELC",
        link: "https://google.com",
      },
    ],
    tertiaryColor: "#6BC4E8",
    title: "Approved textbooks",
    description:
      "We collaborate with publishers to ensure that you have ‘AQA approved’ textbooks to support you and your students.",
  },
};

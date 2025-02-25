import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    imageLink: "/",
    image: "images/logo.png",
    imageAlt: "AQA",
    socialLinks: [
      {
        text: "",
        link: "https://x.com/aqa",
        id: "4dedc039-c629-45e8-aaa9-ccdfa6f637fc",
      },
      {
        text: "",
        link: "https://uk.linkedin.com/company/aqa",
        id: "a0ab2017-c9c9-46ac-a7b6-76b2d331ba5f",
      },
      {
        text: "",
        link: "https://www.youtube.com/user/aqaeducation",
        id: "6e16aafa-bc5d-4a32-a411-536b1dc546f8",
      },
    ],
    disclaimer:
      "©AQA 2024 | AQA is not responsible for the content of external sites.",
    linkList: [
      [
        {
          text: "Contact us",
          link: "/",
          id: "9f29f028-230f-4b42-be99-691a41393ceb",
        },
        {
          text: "Become an examiner",
          link: "/",
          id: "c22b6a05-1bb1-4b71-9c1e-51aaa9367860",
        },
        {
          text: "Join us",
          link: "/",
          id: "0f541bf5-1ca4-4c67-9bd5-fdb62ae4f8f9",
        },
      ],
      [
        {
          text: "Terms and conditions",
          link: "/",
          id: "4fbe2476-5cf3-4481-bc28-ed51f7f8c61e",
        },
        {
          text: "Accessibility",
          link: "/",
          id: "f51a6837-34d8-4580-8d2b-d7d359ea1b4b",
        },
        {
          text: "Modern Slavery Statement",
          link: "/",
          id: "9ee6d27d-9519-4da8-8b51-64c9e4c37698",
        },
        {
          text: "Privacy notice",
          link: "/",
          id: "2491a9e3-21d9-4838-b96f-13a352e002a3",
        },
        {
          text: "Cookie notice",
          link: "/",
          id: "83434b9b-6580-4202-96d4-39695057c1a2",
        },
      ],
    ],
  },
};

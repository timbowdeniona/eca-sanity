import type { Meta, StoryObj } from "@storybook/react";

import { PromoTextCards } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/PromoTextCards",
  component: PromoTextCards,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PromoTextCards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Example: Story = {
  args: {
    title: "Support and resources",
    description:
      "We're here to support you throughout all of your assessments, so whatever texts you choose to teach, we’ll be with you every step of the way, continuing to build up our resource offer.",
    items: [
      {
        id: "5a0507ab-8713-49fb-a280-249ba896d0ed",
        variant: "primary",
        title: "Resources",
        description:
          "Discover resources and sample assessment materials to help support you with teaching.",
        linkText: "Find resources",
        link: "/",
      },
      {
        id: "09f28fa8-600b-421e-9df0-46726c6e7d5e",
        variant: "primary",
        title: "Companion guide",
        description:
          "Explore the new texts and poems, key dates for your calendar and find out why we’ve made these changes.",
        linkText: "Find out more",
        link: "/",
      },
      {
        id: "45a94c33-a94a-471e-959e-f44727be78af",
        variant: "primary",
        title: "Online events",
        description:
          "We’ve created a free, on-demand e-Learning module to explain the changes in more detail.",
        linkText: "Sign up now",
        link: "/",
      },
      {
        id: "ec69a660-ae62-4d55-a535-4d2f1aa586c5",
        variant: "secondary",
        title: "Want a free poetry anthology?",
        description:
          "Get your free copy of our new Worlds and lives poetry anthology when you register your interest.",
        linkText: "Register your interest",
        link: "/",
      },
    ],
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { MoreResources } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MoreResources",
  component: MoreResources,
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
} satisfies Meta<typeof MoreResources>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    items: [
      {
        id: "311e605c-c1f5-468b-8ddb-c3a07a12b5b7",
        title: "Unit Award Scheme (UAS)",
        description:
          "UAS is used to record learner achievement. It builds confidence and acts as a stepping stone towards further education, employment, training or independent living.",
        linkText: "See all English units",
        link: "https://google.com",
      },
      {
        id: "5b1a4f73-82c5-4120-92fb-867bc38f811a",
        title: "Join our English virtual communities",
        description:
          "Meet with fellow teaching colleagues, experts and subject associates. Discuss strategies, best practice, share resources and exchange experiences with your local English community.",
        linkText: "Check dates and availability",
        link: "https://google.com",
      },
      {
        id: "33a55567-48c6-419e-a02c-f2865deb1e9d",
        title: "Oxford AQA",
        description:
          "Our joint venture with Oxford University Press and Oxford International AQA Examinations offers a range of international GCSEs and A-levels specifically designed for international curriculum schools outside the UK.",
        linkText: "Find out more",
        link: "https://google.com",
      },
    ],
    tertiaryColor: "#6BC4E8",
    title: "More Resources",
  },
};

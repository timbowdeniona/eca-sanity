import type { Meta, StoryObj } from "@storybook/react";

import { QuoteBanner } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/QuoteBanner",
  component: QuoteBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof QuoteBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    image: "https://picsum.photos/900/900",
    quote:
      "Our vision is to provide a diverse and inclusive curriculum that reflects the lives of young people. These works of literature offer the opportunity to explore issues and ideas and introduce further great writers to our specification. This is just the beginning.",
    source: "Pauline McPartlan, Head of Curriculum, English",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

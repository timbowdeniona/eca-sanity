import type { Meta, StoryObj } from "@storybook/react";

import { ContactUs } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ContactUs",
  component: ContactUs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    primaryColor: { control: { type: "color" } },
    secondaryColor: { control: { type: "color" } },
  },
} satisfies Meta<typeof ContactUs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Image: Story = {
  args: {
    headline: "Contact our Maths team",
    name: "Andrew Taylor",
    image: "https://picsum.photos/901/900",
    imageAlt: "",
    email: "maths@aqa.org.uk",
    role: "Head of Curriculum, Mathematics",
    telephone: "0161 957 3852 ",
    officeHours: "8am - 5pm Monday to Friday",
    primaryColor: "#0989BF",
    secondaryColor: "#3CB4E5",
  },
};

export const NoImage: Story = {
  args: {
    ...Image.args,
    image: undefined,
    gcseEmail: "maths-gcse@aqa.org.uk",
    primaryColor: "#9f9100",
    secondaryColor: "#e0cc00",
  },
};

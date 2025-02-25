import type { Meta, StoryObj } from "@storybook/react";

import { VideoCards } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/VideoCards",
  component: VideoCards,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof VideoCards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Author question and answer videos",
    description:
      "You asked and our authors answered. Our new question and answer videos lift the lid on the inspiration behind our new texts, and reveal some interesting reasons behind the themes.",
    items: [
      {
        id: "a20c073b-11ab-43e8-a4cf-00928e71c25b",
        title: "Chinonyerem Odimba: Princess & The Hustler",
        description:
          "Hear from Chinonyerem Odimba as she explains why the Weston-super-Mare Beauty Contest is the focus of Princess’ character development",
        image: "https://picsum.photos/1203/900",
        link: "https://google.com",
      },
      {
        id: "46edad2c-8abc-46e3-b445-87483ce5abcf",
        title: "Winsome Pinnock: Leave Talking",
        description:
          "Hear from Chinonyerem Odimba as she explains why the Weston-super-Mare Beauty Contest is the focus of Princess’ character development",
        image: "https://picsum.photos/1243/900",
        link: "https://google.com",
      },
      {
        id: "62a55b3c-62cd-4101-b9d8-e1ae591b75e0",
        title: "Kit de Waal: Ny Name is Leon",
        description:
          "Author of My Name is Leon, Kit de Waal, explains why the novel is set in the 1980s and what Leon’s life might be like now.",
        image: "https://picsum.photos/1213/900",
        link: "https://google.com",
      },
      {
        id: "45cca4c4-5c12-4c5d-956c-f5095d35b7a5",
        title: "Chinonyerem Odimba: Princess & The Hustler",
        description:
          "Hear from Chinonyerem Odimba as she explains why the Weston-super-Mare Beauty Contest is the focus of Princess’ character development",
        image: "https://picsum.photos/1203/900",
        link: "https://google.com",
      },
      {
        id: "cf42ad85-2048-43eb-b45a-3148d6098844",
        title: "Winsome Pinnock: Leave Talking",
        description:
          "Hear from Chinonyerem Odimba as she explains why the Weston-super-Mare Beauty Contest is the focus of Princess’ character development",
        image: "https://picsum.photos/1243/900",
        link: "https://google.com",
      },
      {
        id: "0e500c06-35f6-4ba3-907d-f6e570c289f7",
        title: "Kit de Waal: Ny Name is Leon",
        description:
          "Author of My Name is Leon, Kit de Waal, explains why the novel is set in the 1980s and what Leon’s life might be like now.",
        image: "https://picsum.photos/1213/900",
        link: "https://google.com",
      },
    ],
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

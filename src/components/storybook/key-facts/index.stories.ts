import type { Meta, StoryObj } from "@storybook/react";

import { KeyFacts } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/KeyFacts",
  component: KeyFacts,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    mode: {
      control: "inline-radio",
    },
  },
} satisfies Meta<typeof KeyFacts>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    mode: "text",
    items: [
      {
        value: "120",
        name: "years history",
        description: "AQA is an independent non-profit charity ",
        id: "8e6d4388-1f00-4202-afae-b5bfc1d088e2",
      },
      {
        value: "1m+",
        name: "students",
        description: "1 million+ students sat our qualifications last year",
        id: "445a6f94-59ba-48fd-ab71-7c007e91f4a4",
      },
      {
        value: "73%",
        name: "high achievers",
        description: "High percentage of UK results achieved grade 5–9",
        id: "8de9d940-4fad-4229-ba2c-07702bf76240",
      },
      {
        value: "50%",
        name: "UK exam papers",
        description: "We set more than half of all GCSE and A-levels papers",
        id: "a87b55a4-cf8a-4c24-83a1-9655dfa8f49b",
      },
    ],
  },
};

export const ImageIcon: Story = {
  args: {
    mode: "image",
    variant: "primary",
    imageDisplayStyle: "icon",
    items: [
      {
        image: "https://picsum.photos/900/1044",
        description: "AQA is an independent non-profit charity ",
        id: "ec5320cc-5ca9-4797-815a-f13396c4f4d0",
      },
      {
        image: "https://picsum.photos/900/1063",
        description: "1 million+ students sat our qualifications last year",
        id: "b462a32e-e713-4da3-8088-5038e5137b30",
      },
      {
        image: "https://picsum.photos/900/1090",
        description: "High percentage of UK results achieved grade 5–9",
        id: "19068e91-1d29-4cd7-b32b-22e9f65d9acf",
      },
      {
        image: "https://picsum.photos/900/1073",
        description: "We set more than half of all GCSE and A-levels papers",
        id: "351bc65c-5155-43df-941b-fb44f175b6af",
      },
    ],
  },
};

export const ImagePrimary: Story = {
  args: {
    mode: "image",
    variant: "primary",
    imageDisplayStyle: "cover",
    items: [
      {
        image: "https://picsum.photos/900/1044",
        description: "AQA is an independent non-profit charity ",
        id: "ec5320cc-5ca9-4797-815a-f13396c4f4d0",
      },
      {
        image: "https://picsum.photos/900/1063",
        description: "1 million+ students sat our qualifications last year",
        id: "b462a32e-e713-4da3-8088-5038e5137b30",
      },
      {
        image: "https://picsum.photos/900/1090",
        description: "High percentage of UK results achieved grade 5–9",
        id: "19068e91-1d29-4cd7-b32b-22e9f65d9acf",
      },
      {
        image: "https://picsum.photos/900/1073",
        description: "We set more than half of all GCSE and A-levels papers",
        id: "351bc65c-5155-43df-941b-fb44f175b6af",
      },
    ],
  },
};

export const ImageSecondary: Story = {
  args: {
    mode: "image",
    variant: "secondary",
    imageDisplayStyle: "cover",
    items: [
      {
        image: "https://picsum.photos/900/1048",
        description: "AQA is an independent non-profit charity ",
        id: "90a3c391-60c8-42d3-910a-fbd9240bf55f",
      },
      {
        image: "https://picsum.photos/900/1073",
        description: "1 million+ students sat our qualifications last year",
        id: "5dae9887-48c9-405d-bd41-ecc542c3247b",
      },
      {
        image: "https://picsum.photos/900/1054",
        description: "High percentage of UK results achieved grade 5–9",
        id: "8be66b72-80b9-4d46-bbd0-3899de8f51df",
      },
      {
        image: "https://picsum.photos/900/1078",
        description: "We set more than half of all GCSE and A-levels papers",
        id: "d92f90fa-e3de-4918-98c3-09f618671205",
      },
    ],
  },
};
export const ImageWithTitle: Story = {
  args: {
    mode: "image",
    variant: "secondary",
    imageDisplayStyle: "cover",
    items: [
      {
        image: "https://picsum.photos/900/1048",
        title: "AQA: Independent Charity",
        description: "AQA is an independent non-profit charity ",
        id: "90a3c391-60c8-42d3-910a-fbd9240bf55f",
      },
      {
        image: "https://picsum.photos/900/1073",
        title: "1M+ Students Qualified",
        description: "1 million+ students sat our qualifications last year",
        id: "5dae9887-48c9-405d-bd41-ecc542c3247b",
      },
      {
        image: "https://picsum.photos/900/1054",
        title: "High Grades Achieved",
        description: "High percentage of UK results achieved grade 5–9",
        id: "8be66b72-80b9-4d46-bbd0-3899de8f51df",
      },
      {
        image: "https://picsum.photos/900/1078",
        title: "Leading Exam Setter",
        description: "We set more than half of all GCSE and A-levels papers",
        id: "d92f90fa-e3de-4918-98c3-09f618671205",
      },
    ],
  },
};

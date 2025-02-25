import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@/components/storybook/modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Modal",

  component: Modal,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
    className: { control: "text" },
    maxWidthClass: { control: "text" },
    onClose: { action: "clicked" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "This is a modal",
    children: (
      <div className="space-y-10 p-6 md:px-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
        porro ab. Corrupti dolorem amet, omnis atque dolore veniam
        exercitationem doloremque velit vitae! Omnis minus sit earum nihil vero
        incidunt consequuntur.
      </div>
    ),
  },

  render: args => (
    <div style={{ position: "relative", minHeight: "50vh" }}>
      <Modal {...args} />
    </div>
  ),
};

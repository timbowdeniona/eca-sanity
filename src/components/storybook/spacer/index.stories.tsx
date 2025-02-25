import type { Meta, StoryObj } from "@storybook/react";

import { Spacer } from ".";

const meta = {
  title: "Components/Spacer",
  component: Spacer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    divider: {
      control: { type: "boolean" },
    },
    marginTop: {
      control: { type: "number" },
    },
    marginBottom: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    divider: false,
    marginTop: 2,
    marginBottom: 2,
  },
  render: args => (
    <div className="flex flex-col items-center">
      <div className="bg-blue p-2 text-white">Content above</div>
      <Spacer {...args} className="w-full bg-grey" />
      <div className="bg-green p-2 text-white">Content below</div>
    </div>
  ),
};

export const Medium: Story = {
  args: {
    divider: false,
    marginTop: 4,
    marginBottom: 4,
  },
  render: args => (
    <div className="flex flex-col items-center">
      <div className="bg-blue p-2 text-white">Content above</div>
      <Spacer {...args} className="w-full bg-grey" />
      <div className="bg-green p-2 text-white">Content below</div>
    </div>
  ),
};

export const Large: Story = {
  args: {
    divider: true,
    marginTop: 8,
    marginBottom: 8,
  },
  render: args => (
    <div className="flex flex-col items-center">
      <div className="bg-blue p-2 text-white">Content above</div>
      <Spacer {...args} className="w-full bg-grey" />
      <div className="bg-green p-2 text-white">Content below</div>
    </div>
  ),
};

export const Asymmetric: Story = {
  args: {
    divider: true,
    marginTop: 2,
    marginBottom: 6,
  },
  render: args => (
    <div className="flex flex-col items-center">
      <div className="bg-blue p-2 text-white">Content above</div>
      <Spacer {...args} className="w-full bg-grey" />
      <div className="bg-green p-2 text-white">Content below</div>
    </div>
  ),
};

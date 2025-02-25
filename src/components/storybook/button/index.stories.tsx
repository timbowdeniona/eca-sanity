import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { BackButton, Props as BackButtonProps } from "./back-button";
import {
  ContinueButton,
  Props as ContinueButtonProps,
} from "./continue-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "inline-radio",
    },
    color: {
      control: "inline-radio",
      options: ["red", "purple"],
      defaultValue: "red",
    },
    mode: {
      control: "inline-radio",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    href: { href: "/" },
    variant: "primary",
    color: "red",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    color: "red",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    variant: "tertiary",
    color: "red",
  },
};

export const Back: StoryObj<BackButtonProps> = {
  argTypes: {
    onClick: { action: "clicked" },
  },

  render: args => <BackButton {...args} />,
};

export const Continue: StoryObj<ContinueButtonProps> = {
  argTypes: {
    onClick: { action: "clicked" },
  },

  render: args => <ContinueButton {...args} />,
};

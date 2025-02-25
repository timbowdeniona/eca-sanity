import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import Pencil from "../icons/Pencil";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "text",
      description: "The icon to display inside the input.",
    },
    label: {
      control: "text",
      description: "The label for the input.",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text for the input.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter a value",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Pencil />,
    placeholder: "Enter a value",
  },
};

export const WithLabelAndIcon: Story = {
  args: {
    label: "First name",
    icon: <Pencil />,
    placeholder: "Enter your first name",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

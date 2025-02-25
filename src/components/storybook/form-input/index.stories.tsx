import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from ".";

const meta = {
  title: "Components/FormInput",

  component: FormInput,

  tags: ["autodocs"],

  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    helpText:
      "Please only list the schools, colleges or centres where you have taken AQA exams",
    label: "Name, address and postcode of schools, colleges or centres",
  },
};

export const Textarea: Story = {
  args: {
    helpText:
      "Please only list the schools, colleges or centres where you have taken AQA exams",
    label: "Name, address and postcode of schools, colleges or centres",
    type: "textarea",
  },
};

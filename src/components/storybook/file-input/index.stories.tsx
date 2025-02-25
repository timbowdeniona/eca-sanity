import type { Meta, StoryObj } from "@storybook/react";
import { FileInput } from ".";

const meta = {
  title: "Components/FileInput",

  component: FileInput,

  tags: ["autodocs"],
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};

export const WithHelperTexts: Story = {
  args: {
    label: "Upload media",
    hint: "(optional)",
    helpText: "Must have a maximum size of 5MB.",
  },
};

export const WithInitialFilename: Story = {
  args: {
    initialFilename: "sample.pdf",
  },
};

export const DocumentFileOnly: Story = {
  args: {
    label: "Upload your CV",
    hint: "(required)",
    helpText: "Must be a valid PDF or Document file.",
    accept: ".pdf,.docx,.doc",
  },
};

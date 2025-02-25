import type { Meta, StoryObj } from "@storybook/react";
import { InlineResource } from ".";

const meta = {
  title: "Components/InlineResource",
  component: InlineResource,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InlineResource>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pdf: Story = {
  args: {
    children: "This is a PDF File",
    extension: "pdf",
    size: "100kb",
    url: "#",
  },
};

export const Word: Story = {
  args: {
    children: "This is a Word File",
    extension: "docx",
    size: "100kb",
    url: "#",
  },
};

export const Excel: Story = {
  args: {
    children: "This is a Excel File",
    extension: "xlsx",
    size: "100kb",
    url: "#",
  },
};

export const Powerpoint: Story = {
  args: {
    children: "This is a Powerpoint File",
    extension: "pptx",
    size: "100kb",
    url: "#",
  },
};

export const Zip: Story = {
  args: {
    children: "This is a Zip File",
    extension: "zip",
    size: "100kb",
    url: "#",
  },
};

export const Audio: Story = {
  args: {
    children: "This is an audio File",
    extension: "mp3",
    size: "100kb",
    url: "#",
  },
};

export const Video: Story = {
  args: {
    children: "This is a video File",
    extension: "mp4",
    size: "100kb",
    url: "#",
  },
};

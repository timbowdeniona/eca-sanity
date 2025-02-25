import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Pagination, PaginationItem } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  argTypes: {
    onPageSelect: { action: "pageSelected" },
  },
  decorators: [
    Story => {
      const [currentPage, setCurrentPage] = useState<number>(1);
      const handlePageSelect = (page: number) => setCurrentPage(page);
      const pages = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
      ] as PaginationItem[];

      return (
        <Story
          args={{ currentPage, onPageSelect: handlePageSelect, pages: pages }}
        />
      );
    },
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Pages: Story = {
  args: {
    currentPage: 1,
    pages: [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
      { label: "6", value: 6 },
      { label: "7", value: 7 },
    ] as PaginationItem[],
  },
};

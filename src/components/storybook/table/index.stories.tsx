import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicTemplate = (args: Story) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableHeader>Header 1</TableHeader>
        <TableHeader>Header 2</TableHeader>
        <TableHeader>Header 3</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 4</TableCell>
        <TableCell>Cell 5</TableCell>
        <TableCell>Cell 6</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Basic = BasicTemplate.bind({}) as Story;
Basic.args = {
  noRightBorder: false,
  fixed: false,
  mobileFixed: false,
};

const NoHeaderTemplate = (args: Story) => (
  <Table {...args}>
    <TableBody>
      <TableRow>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 4</TableCell>
        <TableCell>Cell 5</TableCell>
        <TableCell>Cell 6</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const NoHeader = NoHeaderTemplate.bind({}) as Story;
NoHeader.args = {
  noRightBorder: false,
  fixed: true,
  mobileFixed: true,
};

const RowspanTemplate = (args: Story) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableHeader>Sliding scale of fees per learner</TableHeader>
        <TableHeader>Yearly fee per learner</TableHeader>
        <TableHeader>Example</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>
          <p className="font-semibold">1–59th learner</p>
        </TableCell>
        <TableCell>£24.00</TableCell>
        <TableCell rowSpan={3}>
          <p>
            If you have 100 learners taking part in UAS in the same academic
            year, the charge is calculated as follows:
          </p>
          <p>59 learners at £24 = £1,416</p>
          <p>41 learners at £17.55 = £719.55</p>
          <p className="font-semibold">Total amount owed is £2,135.55</p>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <p className="font-semibold">60–299th learner</p>
        </TableCell>
        <TableCell>£17.55</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <p className="font-semibold">300–499th learner</p>
        </TableCell>
        <TableCell>£15.95</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Rowspan = RowspanTemplate.bind({}) as Story;
Rowspan.args = {
  noRightBorder: false,
  fixed: true,
  mobileFixed: false,
};

const ColspanTemplate = (args: Story) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableHeader>Header 1</TableHeader>
        <TableHeader>Header 2</TableHeader>
        <TableHeader>Header 3</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={3}>
          Center Colspan 3
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell 4</TableCell>
        <TableCell>Cell 5</TableCell>
        <TableCell>Cell 6</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Colspan = ColspanTemplate.bind({}) as Story;
Colspan.args = {
  noRightBorder: false,
  fixed: false,
  mobileFixed: false,
};

import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCardsPlaceholder } from ".";

const meta = {
  title: "Components/ArticleCardsPlaceholder",
  component: ArticleCardsPlaceholder,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
      description: "The variant of the ArticleCardsPlaceholder component.",
    },
    titlePlacement: {
      control: {
        type: "select",
        options: ["top", "left"],
      },
      description:
        "The placement of the title in the ArticleCardsPlaceholder component.",
    },
    numberOfItems: {
      control: {
        type: "number",
        min: 1,
        max: 10,
        step: 1,
      },
      description: "The number of ArticleItemPlaceholder components to render.",
    },
    primaryColor: {
      control: "color",
      description:
        "The primary color for the ArticleCardsPlaceholder component.",
    },
  },
} satisfies Meta<typeof ArticleCardsPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryVariant: Story = {
  args: {
    variant: "primary",
    titlePlacement: "top",
    numberOfItems: 4,
    primaryColor: "#371376",
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
    titlePlacement: "top",
    numberOfItems: 4,
    primaryColor: "#371376",
  },
};

export const TitleLeft: Story = {
  args: {
    variant: "primary",
    titlePlacement: "left",
    numberOfItems: 2,
    primaryColor: "#C8194B",
  },
};

export const CustomNumberOfItems: Story = {
  args: {
    variant: "primary",
    titlePlacement: "top",
    numberOfItems: 2,
    primaryColor: "#1FAFA3",
  },
};

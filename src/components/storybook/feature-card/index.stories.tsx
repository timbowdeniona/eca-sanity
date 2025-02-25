import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from ".";
import Check from "@/components/storybook/icons/Check";

const meta = {
  title: "Components/FeatureCard",

  component: FeatureCard,

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof FeatureCard>;

export default meta;

export const Basic: StoryObj<typeof FeatureCard> = {
  render: () => (
    <FeatureCard
      description="This document can be verified by employers and includes a
        hologram proving its authenticity."
      icon={
        <Check className="size-8 [&_path]:fill-purple [&_path]:stroke-purple" />
      }
      title="Certified by AQA"
    />
  ),
};

import type { Meta, StoryObj } from "@storybook/react";

import { CookieConsentBanner } from ".";

const meta = {
  title: "Components/CookieConsentBanner",

  component: CookieConsentBanner,

  tags: ["autodocs"],

  argTypes: {},

  args: {
    description: (
      <span>
        You can either accept tracking cookies to play this embedded video, or
        you can watch the video directly&nbsp;
        {
          <a
            className="text-red underline"
            href="https://www.youtube.com/embed/UZgobIltBgk"
            rel="noreferrer"
            target="_blank"
          >
            here.
          </a>
        }
      </span>
    ),
    title: "Accept cookies to watch this video",
  },
} satisfies Meta<typeof CookieConsentBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => (
    <div className="mx-auto max-w-5xl py-12">
      <div className="relative aspect-video w-full bg-grey">
        <CookieConsentBanner {...args} className="absolute bottom-0" />
      </div>
    </div>
  ),
};

export const MultipleIframes: Story = {
  render: args => {
    return (
      <div className="mx-auto grid max-w-7xl gap-4 py-12 lg:grid-cols-3">
        {new Array(3).fill(0).map((_, i) => (
          <div className="relative aspect-video w-full bg-grey" key={i}>
            <CookieConsentBanner {...args} className="absolute bottom-0" />
          </div>
        ))}
      </div>
    );
  },
};

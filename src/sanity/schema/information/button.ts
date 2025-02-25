import { defineField, defineType } from "sanity";

import type { SanityLink } from "./link";

export type SanityButton = {
  link: SanityLink;
  openInNewTab?: boolean;
};

export default defineType({
  type: "object",
  name: "button",
  title: "Button",
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: "link",
      title: "Link",
      type: "reference",
      to: [
        {
          type: "link",
        },
      ],
      validation: rule => rule.required(),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in new tab",
      type: "boolean",
    }),
  ],
  preview: {
    select: {
      title: "link.title",
      openInNewTab: "openInNewTab",
      url: "link.url",
    },
    prepare: ({ openInNewTab, title, url }) => ({
      title: `${title}${openInNewTab ? " (External)" : ""}`,
      subtitle: url,
    }),
  },
});

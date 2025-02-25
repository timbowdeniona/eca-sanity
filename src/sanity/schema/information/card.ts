import { defineField, defineType } from "sanity";

import type { SanityLink } from "./link";
import { SanityAQAColour } from "./aqaColour";

export type SanityCard = {
  link: SanityLink;
  openInNewTab?: boolean;
  aqaColour: SanityAQAColour;
};

export default defineType({
  type: "object",
  name: "card",
  title: "Card",
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
      name: "aqaColour",
      type: "reference",
      title: "AQA Colour",
      to: [{ type: "aqaColour" }],
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

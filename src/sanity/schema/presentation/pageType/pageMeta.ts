import type { Slug } from "sanity";
import { defineField, defineType } from "sanity";

import type { SanityImage } from "../../types";

export type SanityPageMetaRobots = "all" | "noindex" | "nofollow" | "none";
export type SanityPageMeta = {
  title: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: Slug;
  image?: SanityImage | null;
  robots?: SanityPageMetaRobots;
};

export const robots: Record<SanityPageMetaRobots, string> = {
  all: "All",
  noindex: "No Index",
  nofollow: "No Follow",
  none: "None",
};

export default defineType({
  type: "object",
  name: "pageMeta",
  title: "Page Meta",
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical Url",
      type: "slug",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "robots",
      title: "Robots",
      description:
        "Set to 'No Index' or 'None' to prevent this page from appearing in search results. Leaving this blank will use the 'All' value by default.",
      type: "string",
      options: {
        layout: "radio",
        list: Object.keys(robots).map(value => ({
          title: robots[value as SanityPageMetaRobots],
          value,
        })),
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Page Meta",
      };
    },
  },
});

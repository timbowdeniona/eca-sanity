import type { SanityDocument } from "next-sanity";
import type { SanityLink } from "@/sanity/schema/information/link";
import { defineField, defineType } from "sanity";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import defineTitleField from "@/sanity/utils/defineTitle";

import { ImEmbed2 } from "react-icons/im";

export type SanityEmbed = SanityDocument & {
  embedLink: SanityLink;
  minHeight: number;
};

export default defineType({
  type: "document",
  name: "embed",
  title: "Embed",
  icon: ImEmbed2,
  fields: [
    defineTitleField(),
    defineField({
      name: "embedLink",
      title: "Embed Link",
      type: "reference",
      to: [{ type: "link" }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: "minHeight",
      title: "Minimum Height (px)",
      description:
        "Default is 180px. Provide a different value here if required.",
      type: "number",
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title,
    }),
  },
});

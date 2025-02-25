import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityButton } from "@/sanity/schema/information/button";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityQuickLinks = SanityDocument & {
  title: string;
  links: SanityButton[];
};

export default defineType({
  type: "document",
  name: "quickLinks",
  title: "Quick Links",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "button",
        }),
      ],
      validation: rule => rule.required(),
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
    }),
  },
});

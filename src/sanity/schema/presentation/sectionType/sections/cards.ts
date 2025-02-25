import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import defineTitleField from "@/sanity/utils/defineTitle";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import { TfiViewGrid } from "react-icons/tfi";
import { SanityCard } from "@/sanity/schema/information/card";

export type SanityCards = SanityDocument & {
  headline?: string;
  description?: string;
  links: SanityCard[];
};

export default defineType({
  type: "document",
  name: "cards",
  title: "Cards",
  icon: TfiViewGrid,
  fields: [
    defineTitleField(),
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "card",
        }),
      ],
      validation: rule => rule.required(),
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      headline: "headline",
      media: "image",
    },
    prepare: ({ title, headline, media }) => ({
      media,
      title: title || headline,
      subtitle: "Cards",
    }),
  },
});

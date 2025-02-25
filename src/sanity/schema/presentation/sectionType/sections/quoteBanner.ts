import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityImage } from "@/sanity/schema/types";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityQuoteBannerVariant = "primary" | "secondary";
export type SanityQuoteBanner = SanityDocument & {
  title: string;
  variant: SanityQuoteBannerVariant;
  content: string;
  subtitle: string;
  image: SanityImage;
};

const variants: Record<SanityQuoteBannerVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};

export default defineType({
  type: "document",
  name: "quoteBanner",
  title: "Quote Banner",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityQuoteBannerVariant],
          value,
        })),
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          title: "Alternate Text",
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      media: "image",
      title: "title",
    },
    prepare: ({ media, title }) => ({
      media,
      title,
      subtitle: "Quote Banner",
    }),
  },
});

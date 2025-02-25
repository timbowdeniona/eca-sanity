import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityButton } from "@/sanity/schema/information/button";
import type { SanityImageSet } from "@/sanity/schema/information/imageSet";
import type { SanityRichText } from "@/sanity/utils/richtext";
import defineRichTextField from "@/sanity/utils/richtext";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityHeroVariant = "primary" | "secondary";
export type SanityHero = SanityDocument & {
  title: string;
  variant: SanityHeroVariant;
  image: SanityImageSet;
  content: SanityRichText;
  buttons?: SanityButton[];
};

const variants: Record<SanityHeroVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};

export default defineType({
  type: "document",
  name: "hero",
  title: "Hero",
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
          title: variants[value as SanityHeroVariant],
          value,
        })),
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "imageSet",
      validation: rule => rule.required(),
    }),
    defineRichTextField({
      name: "content",
      title: "Content",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        defineArrayMember({
          name: "button",
          title: "Button",
          type: "button",
        }),
      ],
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
      subtitle: "Hero",
    }),
  },
});

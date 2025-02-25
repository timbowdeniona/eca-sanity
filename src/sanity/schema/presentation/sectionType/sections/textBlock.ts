import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import defineRichTextField, { SanityRichText } from "@/sanity/utils/richtext";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import defineTitleField from "@/sanity/utils/defineTitle";
import {
  defineHorizontalPaddingField,
  defineVerticalPaddingField,
} from "@/sanity/utils/padding";

export type SanityTextBlockVariant = "primary" | "secondary" | "tertiary";
export type SanityTextBlock = SanityDocument & {
  headline?: string;
  content: SanityRichText;
  variant: SanityTextBlockVariant;
};

const variants: Record<SanityTextBlockVariant, string> = {
  primary: "Grey",
  secondary: "Transparent",
  tertiary: "Purple",
};

export default defineType({
  type: "document",
  name: "textBlock",
  title: "Text Block",
  icon: DocumentsIcon,
  fields: [
    defineTitleField(),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineRichTextField({
      name: "content",
      title: "Content",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        layout: "radio",
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityTextBlockVariant],
          value,
        })),
      },
      validation: rule => rule.required(),
    }),
    defineVerticalPaddingField(),
    defineHorizontalPaddingField(),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      headline: "headline",
    },
    prepare: ({ title, headline }) => ({
      title: title || headline,
      subtitle: "Text Block",
    }),
  },
});

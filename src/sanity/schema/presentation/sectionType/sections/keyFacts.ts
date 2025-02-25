import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import { SanityKeyFactImage } from "@/sanity/schema/information/keyFactImage";
import { SanityKeyFactText } from "@/sanity/schema/information/keyFactText";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityKeyFactsMode = "image" | "text";
export type SanityKeyFactsImageVariant = "primary" | "secondary";
export type SanityKeyFactsImageDisplayStyle = "icon" | "cover";
export type SanityKeyFacts = SanityDocument & {
  mode: SanityKeyFactsMode;
  variant?: SanityKeyFactsImageVariant;
  items: Array<SanityKeyFactImage | SanityKeyFactText>;
  imageDisplayStyle: SanityKeyFactsImageDisplayStyle;
};
const modes: Record<SanityKeyFactsMode, string> = {
  image: "Image",
  text: "Text",
};
const variants: Record<SanityKeyFactsImageVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};
const imageDisplayStyles: Record<SanityKeyFactsImageDisplayStyle, string> = {
  icon: "Icon",
  cover: "Cover",
};

export default defineType({
  type: "document",
  name: "keyFacts",
  title: "Key Facts",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      options: {
        list: Object.keys(modes).map(value => ({
          title: modes[value as SanityKeyFactsMode],
          value,
        })),
        layout: "radio",
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      initialValue: "primary",
      options: {
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityKeyFactsImageVariant],
          value,
        })),
        layout: "radio",
      },
      hidden: ({ document }) =>
        !["image"].includes((document?.mode as string | undefined) ?? ""),
    }),
    defineField({
      name: "imageDisplayStyle",
      title: "Image Display Style",
      type: "string",
      options: {
        list: Object.keys(imageDisplayStyles).map(value => ({
          title: imageDisplayStyles[value as SanityKeyFactsImageDisplayStyle],
          value,
        })),
        layout: "radio",
      },
      hidden: ({ document }) =>
        !["image"].includes((document?.mode as string | undefined) ?? ""),
    }),
    defineField({
      name: "textItems",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "keyFactText",
        }),
      ],
      hidden: ({ document }) =>
        !["text"].includes((document?.mode as string | undefined) ?? ""),
    }),
    defineField({
      name: "imageItems",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "keyFactImage",
        }),
      ],
      hidden: ({ document }) =>
        !["image"].includes((document?.mode as string | undefined) ?? ""),
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      mode: "mode",
    },
    prepare: ({ title, mode }) => ({
      title: title || "Key Facts",
      subtitle: modes[mode as SanityKeyFactsMode],
    }),
  },
});

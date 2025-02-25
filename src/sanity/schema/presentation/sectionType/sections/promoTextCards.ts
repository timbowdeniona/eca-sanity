import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import { SanityButton } from "@/sanity/schema/information/button";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityPromoTextCardVariant = "primary" | "secondary";
export type SanityPromoTextCardItem = {
  _key: string;
  heading: string;
  content: string;
  button: SanityButton;
  variant: SanityPromoTextCardVariant;
};
export type SanityPromoTextCards = SanityDocument & {
  title: string;
  description: string;
  items: Array<SanityPromoTextCardItem>;
};

const variants: Record<SanityPromoTextCardVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};

export default defineType({
  type: "document",
  name: "promoTextCards",
  title: "Promo Text Cards",
  icon: DocumentsIcon,
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
      type: "text",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "text",
            }),
            defineField({
              name: "button",
              title: "Button",
              type: "button",
            }),
            defineField({
              name: "variant",
              title: "Variant",
              type: "string",
              initialValue: "primary",
              options: {
                layout: "radio",
                list: Object.keys(variants).map(value => ({
                  title: variants[value as SanityPromoTextCardVariant],
                  value,
                })),
              },
              validation: rule => rule.required(),
            }),
          ],
        },
      ],
      validation: rule => rule.min(1).error("At least one item is required"),
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Promo Text cards",
    }),
  },
});

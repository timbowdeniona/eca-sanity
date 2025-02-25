import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import { SanityImage } from "@/sanity/schema/types";
import { SanityButton } from "@/sanity/schema/information/button";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityVideoCardsVariant = "primary" | "secondary";
export type SanityVideoCardsTitlePlacement = "top" | "left";
export type SanityVideoCardItem = {
  _key: string;
  heading: string;
  content: string;
  image: SanityImage;
  button: SanityButton;
};
export type SanityVideoCards = SanityDocument & {
  title: string;
  description: string;
  variant: SanityVideoCardsVariant;
  items: Array<SanityVideoCardItem>;
};

const variants: Record<SanityVideoCardsVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};
const titlePlacements: Record<SanityVideoCardsTitlePlacement, string> = {
  top: "Top",
  left: "Left",
};

export default defineType({
  type: "document",
  name: "videoCards",
  title: "Video Cards",
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
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityVideoCardsVariant],
          value,
        })),
        layout: "radio",
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "titlePlacement",
      title: "Title Placement",
      type: "string",
      options: {
        list: Object.keys(titlePlacements).map(value => ({
          title: titlePlacements[value as SanityVideoCardsTitlePlacement],
          value,
        })),
        layout: "radio",
      },
      validation: rule => rule.required(),
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
              title: "Link",
              type: "button",
            }),
            defineField({
              name: "image",
              type: "image",
              fields: [
                {
                  title: "Alternate Text",
                  name: "alt",
                  type: "string",
                },
              ],
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
      subtitle: "Video cards",
    }),
  },
});

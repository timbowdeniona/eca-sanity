import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import defineRichTextField, { SanityRichText } from "@/sanity/utils/richtext";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import { SanityImage } from "@/sanity/schema/types";

export type SanityTextAndImageImagePosition = "left" | "right";
export type SanityTextAndImage = SanityDocument & {
  title: string;
  content: SanityRichText;
  image: SanityImage;
  imagePosition: SanityTextAndImageImagePosition;
};

const imagePositions: Record<SanityTextAndImageImagePosition, string> = {
  left: "Left",
  right: "Right",
};

export default defineType({
  type: "document",
  name: "textAndImage",
  title: "Text and Image",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineRichTextField({
      name: "content",
      title: "Content",
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
      validation: rule => rule.required(),
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      options: {
        layout: "radio",
        list: Object.keys(imagePositions).map(value => ({
          title: imagePositions[value as SanityTextAndImageImagePosition],
          value,
        })),
      },
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare: ({ title, media }) => ({
      media,
      title,
      subtitle: "Text and Image",
    }),
  },
});

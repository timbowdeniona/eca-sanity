import type { SanityDocument } from "next-sanity";

import { SanityImage } from "@/sanity/schema/types";
import { defineField, defineType } from "sanity";
import defineTitleField from "@/sanity/utils/defineTitle";
import defineRangeField from "@/sanity/utils/defineRangeField";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import {
  defineHorizontalPaddingField,
  defineVerticalPaddingField,
} from "@/sanity/utils/padding";

import { ImageIcon } from "@sanity/icons";
import AlignmentInput from "@/sanity/tools/structure/components/inputs/alignment";

export type SanityImageBlockAlignment = "left" | "centre" | "right" | "full";

export type SanityImageBlock = SanityDocument & {
  caption?: string;
  image: SanityImage;
  alt?: string;
  alignment: SanityImageBlockAlignment;
  width?: number;
  overrideWidth: boolean;
  widthPixels?: number;
  paddingVertical: number;
  paddingHorizontal: number;
};

export default defineType({
  type: "document",
  name: "imageBlock",
  title: "Image Block",
  icon: ImageIcon,
  fields: [
    defineTitleField(),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description:
        "If a caption is provided, it will be shown below the image.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description:
        "Provide a description of the image for accessibility purposes.",
    }),
    defineField({
      name: "alignment",
      title: "Alignment",
      type: "string",
      initialValue: "full",
      components: {
        input: AlignmentInput,
      },
    }),
    defineField({
      name: "overrideWidth",
      title: "Toggle Width % / px",
      type: "boolean",
      initialValue: false,
      hidden: ({ parent }: { parent: SanityImageBlock }) =>
        parent?.alignment === "full",
    }),
    defineField({
      ...defineRangeField("width", "Width (%)", {
        min: 0,
        max: 100,
        step: 1,
      }),
      description: "Note: Aspect ratio of uploaded image is always maintained.",
      hidden: ({ parent }: { parent: SanityImageBlock }) =>
        parent?.alignment === "full" || parent?.overrideWidth,
    }),
    defineField({
      name: "widthPixels",
      title: "Width (px)",
      description: "Note: Aspect ratio of uploaded image is always maintained.",
      type: "number",
      hidden: ({ parent }: { parent: SanityImageBlock }) =>
        parent?.alignment === "full" || !parent?.overrideWidth,
      validation: rule => rule.positive().integer(),
      initialValue: ({
        currentDocument,
      }: {
        currentDocument: SanityImageBlock;
      }) => {
        const imageAsset = currentDocument?.image?.asset;
        return imageAsset?.metadata?.dimensions?.width || 0;
      },
    }),
    defineVerticalPaddingField("paddingVertical", "Padding - Vertical (px)"),
    defineHorizontalPaddingField(
      "paddingHorizontal",
      "Padding - Horizontal (px)",
    ),
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
      subtitle: "Image Block",
    }),
  },
});

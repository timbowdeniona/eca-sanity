import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import isUndefined from "lodash/isUndefined";

import type { SanityButton } from "@/sanity/schema/information/button";
import type { SanityImageSet } from "@/sanity/schema/information/imageSet";
import type { SanityRichText } from "@/sanity/utils/richtext";
import type { SanityLink } from "@/sanity/schema/information/link";
import defineRichTextField from "@/sanity/utils/richtext";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityMastheadVariant = "primary" | "secondary";
export type SanityMastheadMode = "hero" | "section";
export type SanityMastheadAlignment = "top" | "middle" | "bottom";
export type SanityMastheadMediaType = "image" | "video";
export type SanityMasthead = SanityDocument & {
  title: string;
  variant: SanityMastheadVariant;
  mode?: SanityMastheadMode;
  image?: SanityImageSet;
  content: SanityRichText;
  alignment?: SanityMastheadAlignment;
  buttons?: SanityButton[];
  mediaType?: SanityMastheadMediaType;
  videoUrl?: SanityLink;
};

const variants: Record<SanityMastheadVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};

const modes: Record<SanityMastheadMode, string> = {
  hero: "Hero",
  section: "Section",
};

const alignments: Record<SanityMastheadAlignment, string> = {
  top: "Top",
  middle: "Middle",
  bottom: "Bottom",
};

const mediaTypes: Record<SanityMastheadMediaType, string> = {
  image: "Image",
  video: "Video",
};

export default defineType({
  type: "document",
  name: "masthead",
  title: "Masthead",
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
          title: variants[value as SanityMastheadVariant],
          value,
        })),
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      initialValue: "hero",
      options: {
        list: Object.keys(modes).map(value => ({
          title: modes[value as SanityMastheadMode],
          value,
        })),
      },
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      initialValue: "image",
      validation: rule => rule.required(),
      options: {
        list: Object.keys(mediaTypes).map(value => ({
          title: mediaTypes[value as SanityMastheadMediaType],
          value,
        })),
        layout: "radio",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "imageSet",
      validation: rule =>
        rule.custom((field, context) =>
          context.document?.type === "image"
            ? !isUndefined(field) || "Image is required for image media type."
            : true,
        ),
      hidden: ({ document }) => document?.mediaType !== "image",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description:
        "Provide a compatible video URL. If it's from YouTube, make sure it's either in `https://youtu.be/xyz` or `https://www.youtube.com/watch?v=xyz` format.",
      type: "reference",
      to: [{ type: "link" }],
      validation: rule =>
        rule.custom((field, context) =>
          context.document?.type === "video"
            ? !isUndefined(field) ||
              "Video URL is required for video media type."
            : true,
        ),
      hidden: ({ document }) => document?.mediaType !== "video",
    }),
    defineRichTextField({
      name: "content",
      title: "Content",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "alignment",
      title: "Alignment",
      type: "string",
      initialValue: "top",
      options: {
        list: Object.keys(alignments).map(value => ({
          title: alignments[value as SanityMastheadAlignment],
          value,
        })),
      },
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
      subtitle: "Masthead",
    }),
  },
});

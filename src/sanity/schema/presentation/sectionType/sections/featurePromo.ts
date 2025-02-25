import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityButton } from "@/sanity/schema/information/button";
import type { SanityImage, SanityYouTubeEmbed } from "@/sanity/schema/types";
import type { SanityRichText } from "@/sanity/utils/richtext";
import defineRichTextField from "@/sanity/utils/richtext";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityFeaturePromoMediaType = "image" | "youtube-embed" | "none";
export type SanityFeaturePromoVariant = "primary" | "secondary";
export type SanityFeaturePromoMediaPosition = "left" | "right";
export type SanityFeaturePromo = SanityDocument & {
  title: string;
  variant: SanityFeaturePromoVariant;
  heading: string;
  content: SanityRichText;
  image: SanityImage;
  youtubeEmbed: SanityYouTubeEmbed;
  mediaType: SanityFeaturePromoMediaType;
  mediaPosition?: SanityFeaturePromoMediaPosition;
  buttons: SanityButton[];
};

const mediaPositions: Record<SanityFeaturePromoMediaPosition, string> = {
  left: "Left",
  right: "Right",
};

const variants: Record<SanityFeaturePromoVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};

const mediaTypes: Record<SanityFeaturePromoMediaType, string> = {
  image: "Image",
  "youtube-embed": "YouTube Embed",
  none: "None",
};

export default defineType({
  type: "document",
  name: "featurePromo",
  title: "Feature Promos",
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
        layout: "radio",
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityFeaturePromoVariant],
          value,
        })),
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineRichTextField({
      name: "content",
      title: "Content",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      initialValue: "none",
      validation: rule => rule.required(),
      options: {
        list: Object.keys(mediaTypes).map(value => ({
          title: mediaTypes[value as SanityFeaturePromoMediaType],
          value,
        })),
        layout: "radio",
      },
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
      hidden: ({ document }) => document?.mediaType !== "image",
    }),
    defineField({
      name: "youtubeEmbed",
      title: "YouTube Embed",
      type: "object",
      fields: [
        {
          title: "Embed URL",
          description:
            "This must be an embed URL, not a regular video URL. It should be similar to this format: https://www.youtube.com/embed/ax1by2cz3",
          name: "url",
          type: "string",
        },
        {
          title: "Alternate Text",
          name: "alt",
          type: "string",
        },
      ],
      hidden: ({ document }) => document?.mediaType !== "youtube-embed",
    }),
    defineField({
      name: "mediaPosition",
      title: "Media Position",
      type: "string",
      options: {
        layout: "radio",
        list: Object.keys(mediaPositions).map(value => ({
          title: mediaPositions[value as SanityFeaturePromoMediaPosition],
          value,
        })),
      },
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      deprecated: {
        reason:
          'This field is deprecated and will soon be removed. Use "Media Position" instead.',
      },
      type: "string",
      options: {
        layout: "radio",
        list: Object.keys(mediaPositions).map(value => ({
          title: mediaPositions[value as SanityFeaturePromoMediaPosition],
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
      subtitle: "Feature Promo",
    }),
  },
});

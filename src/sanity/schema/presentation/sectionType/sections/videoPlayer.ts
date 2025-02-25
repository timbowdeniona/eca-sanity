import type { SanityDocument } from "next-sanity";
import type { SanityLink } from "@/sanity/schema/information/link";
import { defineField, defineType } from "sanity";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import defineTitleField from "@/sanity/utils/defineTitle";
import {
  defineHorizontalPaddingField,
  defineVerticalPaddingField,
} from "@/sanity/utils/padding";

import { PiVideoDuotone } from "react-icons/pi";
import { SanityImage } from "@/sanity/schema/types";

export type SanityVideoPlayerVariant = "plain" | "featured";

export type SanityVideoPlayer = SanityDocument & {
  bgImage: SanityImage;
  fullWidth: boolean;
  variant: SanityVideoPlayerVariant;
  videoUrl: SanityLink;
};

const variants: Record<SanityVideoPlayerVariant, string> = {
  plain: "Plain",
  featured: "Border & Background Image",
};

export default defineType({
  type: "document",
  name: "videoPlayer",
  title: "Video Player",
  icon: PiVideoDuotone,
  fieldsets: [
    {
      name: "padding",
      title: "Video Player Padding",
      description: "Padding around the video player.",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineTitleField(),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      description:
        "Provide a compatible video URL. If it's from YouTube, make sure it's either in `https://youtu.be/xyz` or `https://www.youtube.com/watch?v=xyz` format.",
      type: "reference",
      to: [{ type: "link" }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        layout: "radio",
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityVideoPlayerVariant],
          value,
        })),
      },
    }),
    defineField({
      name: "fullWidth",
      title: "Full Width (Yes/No)",
      type: "boolean",
      hidden: ({ parent }) => parent?.variant !== "plain",
    }),
    defineField({
      name: "bgImage",
      title: "Background Image",
      description:
        "Video will be left aligned 2/3, so background image needs to take this into account.",
      type: "image",
      fields: [
        {
          title: "Alternate Text",
          name: "alt",
          type: "string",
        },
      ],
      hidden: ({ parent }) => parent?.variant === "plain",
    }),
    defineVerticalPaddingField(),
    defineHorizontalPaddingField(),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title,
    }),
  },
});

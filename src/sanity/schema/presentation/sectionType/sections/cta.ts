import { defineField, defineType } from "sanity";
import { MdOutlineSmartButton } from "react-icons/md";

import type { SanityLink } from "@/sanity/schema/information/link";
import { SanityDocument } from "next-sanity";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityCta = SanityDocument & {
  title: string;
  link: SanityLink;
  variant: "primary" | "secondary" | "tertiary" | "icon";
  colour: "red" | "purple" | "white" | "purple-20" | "purple-40" | "purple-80";
  icon: "internal" | "external" | "none";
  padding: "none" | "small" | "medium" | "large" | "xlarge";
  position: "left" | "centre" | "right";
  openInNewTab?: boolean;
};

export default defineType({
  type: "document",
  name: "cta",
  title: "Call to Action",
  icon: MdOutlineSmartButton,
  fields: [
    defineField({
      name: "title",
      title: "CTA Label",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "reference",
      to: [{ type: "link" }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Button (Fill)", value: "primary" },
          { title: "Button (Outline)", value: "secondary" },
          { title: "Text Link", value: "tertiary" },
        ],
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "colour",
      title: "Colour",
      type: "string",
      options: {
        list: [
          { title: "Purple", value: "purple" },
          { title: "Red", value: "red" },
          { title: "Custom", value: "custom" },
        ],
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
          { title: "None", value: "none" },
        ],
      },
      initialValue: "internal",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "padding",
      title: "Padding (Vertical)",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Small (8px)", value: "small" },
          { title: "Medium (16px)", value: "medium" },
          { title: "Large (24px)", value: "large" },
          { title: "Extra Large (32px)", value: "xlarge" },
        ],
      },
      initialValue: "none",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Centre", value: "centre" },
          { title: "Right", value: "right" },
        ],
      },
      initialValue: "left",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in new tab",
      type: "boolean",
      hidden: ({ parent }) => parent?.icon !== "external",
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      variant: "variant",
      icon: "icon",
      openInNewTab: "openInNewTab",
      url: "link.url",
    },
    prepare: ({ title, variant, url }) => ({
      title: `${title} (${variant})`,
      subtitle: url,
    }),
  },
});

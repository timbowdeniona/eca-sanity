import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { IoColorPaletteSharp } from "react-icons/io5";

export type SanityAQAColour = SanityDocument & {
  name: string;
  description?: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

export default defineType({
  title: "AQA Colour",
  name: "aqaColour",
  type: "document",
  icon: IoColorPaletteSharp,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "primary",
      type: "color",
      title: "Primary Colour",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "secondary",
      type: "color",
      title: "Secondary Colour",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "tertiary",
      type: "color",
      title: "Tertiary Colour",
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "primary",
    },
  },
});

import { defineArrayMember, defineField, defineType } from "sanity";

import type { SanityImage } from "../types";

export type Screen = "sm" | "md" | "lg" | "xl";
export type SanityImageSetScreen = {
  screen: Screen;
  image: SanityImage;
};
export type SanityImageSet = {
  default: SanityImage;
  screens: SanityImageSetScreen[];
};

const screens: Record<Screen, string> = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
  xl: "Extra Large",
};

export default defineType({
  type: "object",
  name: "imageSet",
  title: "Image Set",
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: "default",
      title: "Default",
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
      name: "screens",
      title: "Screens",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "screen",
              title: "Screen",
              type: "string",
              options: {
                layout: "radio",
                list: Object.keys(screens).map(screen => ({
                  title: screens[screen as Screen],
                  value: screen,
                })),
              },
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
          ],
          preview: {
            select: {
              media: "image",
              screen: "screen",
            },
            prepare: ({ media, screen }) => {
              return {
                media,
                title: screens[screen as Screen],
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      media: "default",
    },
    prepare: ({ media }) => {
      return {
        media,
      };
    },
  },
});

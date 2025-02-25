import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";

import { IoImageOutline } from "react-icons/io5";
import { SanityImage } from "../types";

export type SanityKeyFactImage = SanityDocument & {
  image: SanityImage;
  description: string;
  title?: string;
};

export default defineType({
  type: "object",
  name: "keyFactImage",
  title: "Key Fact Image",
  icon: IoImageOutline,
  fields: [
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
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
  preview: {
    select: {
      description: "description",
      image: "image",
    },
    prepare: ({ description: title, image: media }) => ({
      title,
      media,
    }),
  },
});

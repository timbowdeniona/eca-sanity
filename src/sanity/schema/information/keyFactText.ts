import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";

import { IoInformationCircle } from "react-icons/io5";

export type SanityKeyFactText = SanityDocument & {
  value: string;
  name: string;
  description: string;
};

export default defineType({
  type: "object",
  name: "keyFactText",
  title: "Key Fact Text",
  icon: IoInformationCircle,
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
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
      name: "name",
      value: "value",
      description: "description",
    },
    prepare: ({ name, value, description: subtitle }) => ({
      title: `${value} ${name}`,
      subtitle,
    }),
  },
});

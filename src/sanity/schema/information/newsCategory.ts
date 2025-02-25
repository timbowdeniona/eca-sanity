import { SanityDocument } from "next-sanity";
import { IoNewspaperOutline } from "react-icons/io5";
import { defineField, defineType } from "sanity";

export type SanityNewsCategory = SanityDocument & {
  title: string;
  description?: string;
};

export default defineType({
  name: "newsCategory",
  title: "News Category",
  type: "document",
  icon: IoNewspaperOutline,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
  ],
});

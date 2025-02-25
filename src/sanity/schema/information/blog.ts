import { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";

export type SanityBlog = SanityDocument & {
  title: string;
  description?: string;
  keywords: Array<string>;
  relatedContent: Array<string>;
};

export default defineType({
  name: "blog",
  title: "Blog Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "relatedContent",
      type: "array",
      of: [{ type: "url" }],
    }),
  ],
});

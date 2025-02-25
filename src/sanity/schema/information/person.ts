import { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";

export type SanityPerson = SanityDocument & {
  name: string;
  profile?: string;
};

export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "profile",
      type: "string",
    }),
  ],
});

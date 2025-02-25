import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import isNil from "lodash/isNil";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityPlaceholder = SanityDocument & {
  title: string;
  key: string;
};

export default defineType({
  type: "document",
  name: "placeholder",
  title: "Placeholders",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "key",
      title: "Key",
      type: "string",
      validation: rule => rule.required(),
      readOnly: ({ document, value }) =>
        !isNil(value) && !!document?._createdAt,
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      subtitle: "key",
      title: "title",
    },
  },
});

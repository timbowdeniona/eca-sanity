import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import defineTitleField from "@/sanity/utils/defineTitle";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import { ImEmbed2 } from "react-icons/im";

export type SanityCodeBlock = SanityDocument & {
  content: string;
};

export default defineType({
  type: "document",
  name: "codeBlock",
  title: "Code Block",
  icon: ImEmbed2,
  description: "Code blocks rendered in `dangerouslySetInnerHTML`",
  fields: [
    defineTitleField(),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      description: "Paste your code here.",
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      content: "content",
    },
    prepare: ({ title, content }) => ({
      title,
      subtitle: content,
    }),
  },
});

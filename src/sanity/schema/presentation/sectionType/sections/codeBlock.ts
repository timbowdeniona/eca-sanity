import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import defineTitleField from "@/sanity/utils/defineTitle";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import { ImEmbed2 } from "react-icons/im";
import {
  CookieCategory,
  OTC_FUNCTIONAL,
  OTC_NECESSARY,
  OTC_PERFORMANCE,
  OTC_SOCIAL,
  OTC_TARGETING,
} from "@/configs/one-trust";

export type SanityCodeBlock = SanityDocument & {
  content: string;
  consent?: CookieCategory;
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
    defineField({
      name: "consent",
      title: "Cookie consent group",
      description:
        "Warning: You must check with the web operations team to ensure this is compliant before using this component",
      type: "string",
      options: {
        list: [
          { title: "Strictly necessary/no cookies set", value: OTC_NECESSARY },
          { title: "Performance cookies", value: OTC_PERFORMANCE },
          { title: "Functional cookies", value: OTC_FUNCTIONAL },
          { title: "Targeting cookies", value: OTC_TARGETING },
          { title: "Social cookies", value: OTC_SOCIAL },
        ],
      },
      validation: rule => rule.required(),
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

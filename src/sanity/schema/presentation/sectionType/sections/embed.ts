import type { SanityDocument } from "next-sanity";
import type { SanityLink } from "@/sanity/schema/information/link";
import { defineField, defineType } from "sanity";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import defineTitleField from "@/sanity/utils/defineTitle";

import { ImEmbed2 } from "react-icons/im";
import {
  CookieCategory,
  OTC_FUNCTIONAL,
  OTC_NECESSARY,
  OTC_PERFORMANCE,
  OTC_SOCIAL,
  OTC_TARGETING,
} from "@/configs/one-trust";

export type SanityEmbed = SanityDocument & {
  consent?: CookieCategory;
  embedLink: SanityLink;
  minHeight: number;
};

export default defineType({
  type: "document",
  name: "embed",
  title: "Embed",
  icon: ImEmbed2,
  fields: [
    defineTitleField(),
    defineField({
      name: "embedLink",
      title: "Embed Link",
      type: "reference",
      to: [{ type: "link" }],
      validation: rule => rule.required(),
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
    defineField({
      name: "minHeight",
      title: "Minimum Height (px)",
      description:
        "Default is 180px. Provide a different value here if required.",
      type: "number",
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title,
    }),
  },
});

import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import defineTitleField from "@/sanity/utils/defineTitle";
import defineRangeField from "@/sanity/utils/defineRangeField";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import { BsViewList } from "react-icons/bs";

export type SanitySpacer = SanityDocument & {
  divider: boolean;
  marginBottom: number;
  marginTop: number;
};

export default defineType({
  type: "document",
  name: "spacer",
  title: "Spacer / Divider",
  icon: BsViewList,
  fields: [
    defineTitleField(),
    defineField({
      name: "divider",
      title: "Divider (Yes/No)",
      description: "Enables the divider in the middle of the spacer.",
      type: "boolean",
    }),
    defineRangeField("marginTop", "Margin Top (px)", {
      min: 0,
      max: 20,
      step: 2,
      list: [
        { title: "0px", value: 0 },
        { title: "8px", value: 2 },
        { title: "16px", value: 4 },
        { title: "24px", value: 6 },
        { title: "32px", value: 8 },
        { title: "40px", value: 10 },
        { title: "48px", value: 12 },
        { title: "56px", value: 14 },
        { title: "64px", value: 16 },
        { title: "72px", value: 18 },
        { title: "80px", value: 20 },
      ],
    }),
    defineRangeField("marginBottom", "Margin Bottom (px)", {
      min: 0,
      max: 20,
      step: 2,
      list: [
        { title: "0px", value: 0 },
        { title: "8px", value: 2 },
        { title: "16px", value: 4 },
        { title: "24px", value: 6 },
        { title: "32px", value: 8 },
        { title: "40px", value: 10 },
        { title: "48px", value: 12 },
        { title: "56px", value: 14 },
        { title: "64px", value: 16 },
        { title: "72px", value: 18 },
        { title: "80px", value: 20 },
      ],
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      marginBottom: "marginBottom",
      marginTop: "marginTop",
    },
    prepare: ({ marginBottom, marginTop }) => ({
      title: `Spacer - ${marginBottom * 4}px / ${marginTop * 4}px`,
    }),
  },
});

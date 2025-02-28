import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import defineTitleField from "@/sanity/utils/defineTitle";
import defineRangeField from "@/sanity/utils/defineRangeField";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import {
  defineHorizontalPaddingField,
  defineVerticalPaddingField,
} from "@/sanity/utils/padding";
import { backgroundColours } from "@/sanity/types";

import { TfiLayoutColumn4 } from "react-icons/tfi";
import ColoursInput from "@/sanity/tools/structure/components/inputs/colour";

import { SanityColumn } from "@/sanity/schema/types";
import VerticalAlignmentInput from "@/sanity/tools/structure/components/inputs/vertical-alignment";
import defineSectionsWithoutColumnsField from "../defineSectionsWithoutColumnsField";

export type SanityFourColumnGapSize = "none" | "small" | "medium" | "large";

export type SanityFourColumn = SanityDocument & {
  title: string;
  gapSize?: number;
  rowPaddingHorizontal: number;
  rowPaddingVertical: number;
  columns: [SanityColumn, SanityColumn, SanityColumn, SanityColumn];
};

export default defineType({
  type: "document",
  name: "fourColumn",
  title: "4 Column Layout",
  icon: TfiLayoutColumn4,
  fieldsets: [
    {
      name: "rowPadding",
      title: "Row Padding",
      description: "Padding around all columns",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineTitleField(),
    defineField({
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        defineArrayMember({
          name: "column",
          title: "Column",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "For internal use only",
              validation: rule => rule.required(),
            }),
            defineField({
              name: "backgroundColour",
              title: "Background Colour",
              type: "string",
              options: {
                list: Object.keys(backgroundColours).map(value => ({
                  title: backgroundColours[value],
                  value,
                })),
              },
              components: {
                input: ColoursInput,
              },
            }),
            defineField({
              name: "verticalAlignment",
              title: "Vertical Alignment",
              type: "string",
              initialValue: "top",
              components: {
                input: VerticalAlignmentInput,
              },
            }),
            defineVerticalPaddingField(
              "paddingVertical",
              "Padding - Vertical (px)",
            ),
            defineHorizontalPaddingField(
              "paddingHorizontal",
              "Padding - Horizontal (px)",
            ),
            defineSectionsWithoutColumnsField(),
          ],
        }),
      ],
      validation: rule =>
        rule.custom(columns => {
          if (!Array.isArray(columns)) {
            return "Must be an array";
          }
          if (columns.length !== 4) {
            return "Must have exactly four columns";
          }
          return true;
        }),
      initialValue: [
        { title: "Column 1" },
        { title: "Column 2" },
        { title: "Column 3" },
        { title: "Column 4" },
      ],
    }),
    defineVerticalPaddingField(
      "rowPaddingVertical",
      "Vertical (px)",
      "rowPadding",
    ),
    defineHorizontalPaddingField(
      "rowPaddingHorizontal",
      "Horizontal (px)",
      "rowPadding",
    ),
    defineRangeField("gapSize", "Gap size between columns", {
      min: 0,
      max: 12,
      step: 4,
      list: [
        { title: "None (0px)", value: 0 },
        { title: "Small (16px)", value: 4 },
        { title: "Medium (32px)", value: 8 },
        { title: "Large (48px)", value: 12 },
      ],
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      variant: "variant",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "4 Column Layout (3-3-3-3)",
    }),
  },
});

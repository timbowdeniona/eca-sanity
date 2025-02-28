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

import { TfiLayoutColumn2 } from "react-icons/tfi";
import ColumnsSliderInput from "@/sanity/tools/structure/components/inputs/columns-slider";
import ColoursInput from "@/sanity/tools/structure/components/inputs/colour";

import { SanityColumn } from "@/sanity/schema/types";
import VerticalAlignmentInput from "@/sanity/tools/structure/components/inputs/vertical-alignment";
import defineSectionsWithoutColumnsField from "../defineSectionsWithoutColumnsField";

export type SanityTwoColumnGapSize = "none" | "small" | "medium" | "large";

export type SanityTwoColumn = SanityDocument & {
  title: string;
  leftColumnSpan: number;
  gapSize?: number;
  rowPaddingVertical: number;
  rowPaddingHorizontal: number;
  columns: [SanityColumn, SanityColumn];
};

export default defineType({
  type: "document",
  name: "twoColumn",
  title: "2 Column Layout",
  icon: TfiLayoutColumn2,
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
      name: "leftColumnSpan",
      title: "Column Ratio - Left : Right",
      type: "number",
      validation: rule => rule.required().min(3).max(9),
      components: {
        input: ColumnsSliderInput,
      },
    }),
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
          if (columns.length !== 2) {
            return "Must have exactly two columns";
          }
          return true;
        }),
      initialValue: [{ title: "Left Column" }, { title: "Right Column" }],
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
      leftColumnSpan: "leftColumnSpan",
    },
    prepare: ({ title, leftColumnSpan }) => ({
      title,
      subtitle: `2 Column Layout (${leftColumnSpan}:${12 - leftColumnSpan})`,
    }),
  },
});

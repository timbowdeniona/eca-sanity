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

import { TfiLayoutColumn3 } from "react-icons/tfi";
import ColoursInput from "@/sanity/tools/structure/components/inputs/colour";

import { SanityColumn } from "@/sanity/schema/types";
import VerticalAlignmentInput from "@/sanity/tools/structure/components/inputs/vertical-alignment";
import defineSectionsWithoutColumnsField from "../defineSectionsWithoutColumnsField";

export type SanityThreeColumnGapSize = "none" | "small" | "medium" | "large";

export type SanityThreeColumnVariant = "4-4-4" | "6-3-3" | "3-6-3" | "3-3-6";

export type SanityThreeColumn = SanityDocument & {
  title: string;
  variant: SanityThreeColumnVariant;
  gapSize?: number;
  rowPaddingHorizontal: number;
  rowPaddingVertical: number;
  columns: [SanityColumn, SanityColumn, SanityColumn];
};

const variants: Record<SanityThreeColumnVariant, string> = {
  "4-4-4": "Equal - 4/4/4 Columns",
  "6-3-3": "Left Block - 6/3/3 Columns",
  "3-6-3": "Centre Block - 3/6/3 Columns",
  "3-3-6": "Right Block - 3/3/6 Columns",
};

export default defineType({
  type: "document",
  name: "threeColumn",
  title: "3 Column Layout",
  icon: TfiLayoutColumn3,
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
      name: "variant",
      title: "Column Variant",
      type: "string",
      validation: rule => rule.required(),
      options: {
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityThreeColumnVariant],
          value,
        })),
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
          if (columns.length !== 3) {
            return "Must have exactly three columns";
          }
          return true;
        }),
      initialValue: [
        { title: "Left Column" },
        { title: "Center Column" },
        { title: "Right Column" },
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
    prepare: ({ title, variant }) => ({
      title,
      subtitle: `3 Column Layout (${variant})`,
    }),
  },
});

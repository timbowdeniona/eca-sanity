import { defineField } from "sanity";
import { itemLimits } from "@/configs/articles";

/**
 * Field definition for the max items to display in an article list / cards.
 */
const defineArticleMaxItemsField = (types: string[]) =>
  defineField({
    name: "maxItems",
    title: "Max items",
    description:
      "The maximum number of items to display. If not set, the default is 6.",
    type: "number",
    options: {
      list: itemLimits.map(value => ({
        title: `${value} items`,
        value,
      })),
      layout: "radio",
    },
    initialValue: 6,
    hidden: ({ document }) =>
      !types.includes((document?.source as string) ?? ""),
  });

export default defineArticleMaxItemsField;

import { defineField } from "sanity";
import isUndefined from "lodash/isUndefined";

/**
 * Field definition for the article category source field
 */
const defineArticleCategorySourceField = () =>
  defineField({
    name: "category",
    title: "Category",
    type: "reference",
    to: [{ type: "blog" }, { type: "newsCategory" }],
    hidden: ({ document }) => document?.source !== "category",
    validation: rule =>
      rule.custom((field, context) => {
        if (context.document?.source === "category") {
          if (isUndefined(field)) {
            return "Category is required";
          }
        }

        return true;
      }),
  });

export default defineArticleCategorySourceField;

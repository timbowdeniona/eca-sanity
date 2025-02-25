import defineRangeField from "@/sanity/utils/defineRangeField";

/**
 * Reusable vertical padding field definition
 */
export const defineVerticalPaddingField = (
  name = "paddingVertical",
  title = "Vertical (px)",
  fieldset?: string,
) =>
  defineRangeField(
    name,
    title,
    {
      min: 0,
      max: 8,
      step: 2,
      list: [
        { title: "0", value: 0 },
        { title: "S (8px)", value: 2 },
        { title: "M (16px)", value: 4 },
        { title: "L (24px)", value: 6 },
        { title: "XL (32px)", value: 8 },
      ],
    },
    fieldset,
  );

/**
 * Reusable horizontal padding field definition
 */
export const defineHorizontalPaddingField = (
  name = "paddingHorizontal",
  title = "Horizontal (px)",
  fieldset?: string,
) =>
  defineRangeField(
    name,
    title,
    {
      min: 0,
      max: 8,
      step: 2,
      list: [
        { title: "0", value: 0 },
        { title: "S (8px)", value: 2 },
        { title: "M (16px)", value: 4 },
        { title: "L (24px)", value: 6 },
        { title: "XL (32px)", value: 8 },
      ],
    },
    fieldset,
  );

const paddingUtils = {
  defineVerticalPaddingField,
  defineHorizontalPaddingField,
};

export default paddingUtils;

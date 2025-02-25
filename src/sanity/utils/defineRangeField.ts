import { defineField, TitledListValue } from "sanity";
import SliderInput from "@/sanity/tools/structure/components/inputs/slider";

// Extend options to accept more properties
declare module "sanity" {
  interface EnumListProps {
    min?: number;
    max?: number;
    step?: number;
  }
}

const defineRangeField = (
  name: string,
  title: string,
  options: {
    min: number;
    max: number;
    step: number;
    list?: (number | TitledListValue<number>)[];
  },
  fieldset?: string,
) =>
  defineField({
    name,
    title,
    type: "number",
    components: {
      input: SliderInput,
    },
    validation: rule => rule.min(options.min).max(options.max),
    options: {
      min: options.min,
      max: options.max,
      step: options.step,
      list: options.list,
    },
    fieldset,
  });

export default defineRangeField;

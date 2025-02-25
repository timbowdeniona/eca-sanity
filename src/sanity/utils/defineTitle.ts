import { defineField } from "sanity";

import type { DefineOptions } from "@/sanity/types";

const defineTitleField = (options?: DefineOptions) =>
  defineField({
    ...options,
    name: "title",
    title: "Title",
    type: "string",
    description:
      "This field is for naming purposes and will not be shown on the website.",
  });

export default defineTitleField;

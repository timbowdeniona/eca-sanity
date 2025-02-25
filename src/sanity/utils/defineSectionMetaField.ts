import { defineField } from "sanity";

import type { DefineOptions } from "@/sanity/types";

const defineSectionMetaField = (options?: DefineOptions) =>
  defineField({
    ...options,
    name: "sectionMeta",
    title: "Section Meta",
    type: "sectionMeta",
  });

export default defineSectionMetaField;

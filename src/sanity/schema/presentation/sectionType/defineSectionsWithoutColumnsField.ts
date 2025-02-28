import { defineArrayMember, defineField } from "sanity";

import type { DefineOptions } from "@/sanity/types";

const defineSectionsWithoutColumnsField = (options?: DefineOptions) =>
  defineField({
    ...options,
    name: "sections",
    title: "Sections",
    type: "array",
    of: [
      defineArrayMember({
        type: "accordion",
      }),
      defineArrayMember({
        type: "articleCards",
      }),
      defineArrayMember({
        type: "articleList",
      }),
      defineArrayMember({
        type: "cards",
      }),
      defineArrayMember({
        type: "contactUs",
      }),
      defineArrayMember({
        type: "cta",
      }),
      defineArrayMember({
        type: "embed",
      }),
      defineArrayMember({
        type: "featurePromo",
      }),
      defineArrayMember({
        type: "hero",
      }),
      defineArrayMember({
        type: "imageBlock",
      }),
      defineArrayMember({
        type: "keyFacts",
      }),
      defineArrayMember({
        type: "masthead",
      }),
      defineArrayMember({
        type: "placeholder",
      }),
      defineArrayMember({
        type: "promoTextCards",
      }),
      defineArrayMember({
        type: "quoteBanner",
      }),
      defineArrayMember({
        type: "quickLinks",
      }),
      defineArrayMember({
        type: "spacer",
      }),
      defineArrayMember({
        type: "textAndImage",
      }),
      defineArrayMember({
        type: "textBlock",
      }),
      defineArrayMember({
        type: "videoCards",
      }),
    ],
  });

export default defineSectionsWithoutColumnsField;

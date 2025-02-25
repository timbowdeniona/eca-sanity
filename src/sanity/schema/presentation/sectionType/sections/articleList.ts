import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";

import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import { IoNewspaperOutline } from "react-icons/io5";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import { SanityButton } from "@/sanity/schema/information/button";
import { SanityImage } from "@/sanity/schema/types";
import defineArticleMaxItemsField from "@/sanity/utils/defineArticleMaxItemsField";
import defineArticleCategorySourceField from "@/sanity/utils/defineArticleCategorySourceField";

export type SanityArticleListVariant = "primary" | "secondary";
export type SanityArticleListSource =
  | "latestNews"
  | "category"
  | "relevantNews"
  | "popularNews"
  | "custom"
  | "reference";

export type SanityArticleCustomData = SanityDocument & {
  date?: string;
  headline?: string;
  description?: string;
  link?: string;
  badge?: string;
  image?: SanityImage;
};

export type SanityArticleList = SanityDocument & {
  title: string;
  source: SanityArticleListSource;
  variant: SanityArticleListVariant;
  items: Array<SanityNewsArticle | SanityArticleCustomData>;
  ctas?: [SanityButton];
};

const sources: Record<SanityArticleListSource, string> = {
  latestNews: "Latest News",
  category: "Category",
  relevantNews: "Relevant News",
  popularNews: "Popular News",
  reference: "Select Article",
  custom: "Custom Data",
};
const variants: Record<SanityArticleListVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};

export default defineType({
  type: "document",
  name: "articleList",
  title: "Article List",
  icon: IoNewspaperOutline,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityArticleListVariant],
          value,
        })),
        layout: "radio",
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: Object.keys(sources).map(value => ({
          title: sources[value as SanityArticleListSource],
          value,
        })),
        layout: "radio",
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "items",
      title: "Article List",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            {
              type: "newsArticle",
            },
            {
              type: "blogPost",
            },
          ],
        }),
      ],
      hidden: ({ document }) =>
        !["reference"].includes((document?.source as string | undefined) ?? ""),
    }),
    defineField({
      name: "customItems",
      title: "Custom Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "date",
              type: "string",
            }),
            defineField({
              name: "headline",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
            defineField({
              name: "link",
              type: "string",
            }),
            defineField({
              name: "badge",
              type: "string",
            }),
            defineField({
              name: "image",
              type: "image",
              fields: [
                {
                  title: "Alternate Text",
                  name: "alt",
                  type: "string",
                },
              ],
            }),
          ],
          preview: {
            select: {
              headline: "headline",
              image: "image",
            },
            prepare: ({ headline, image }) => ({
              title: headline,
              media: image,
              subtitle: "Custom Data",
            }),
          },
        }),
      ],
      hidden: ({ document }) =>
        !["custom"].includes((document?.source as string | undefined) ?? ""),
    }),
    defineArticleCategorySourceField(),
    defineArticleMaxItemsField(["latestNews", "latestBlogPost", "category"]),
    defineField({
      name: "ctas",
      title: "CTA",
      type: "array",
      of: [
        defineArrayMember({
          name: "button",
          title: "Button",
          type: "button",
        }),
      ],
      validation: Rule => Rule.max(1).error("Only 1 CTA is allowed"),
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      source: "source",
    },
    prepare: ({ title, source }) => ({
      title,
      subtitle: sources[source as SanityArticleListSource],
    }),
  },
});

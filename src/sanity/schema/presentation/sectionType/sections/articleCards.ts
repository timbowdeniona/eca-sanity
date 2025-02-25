import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";

import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import type { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import type { SanityBlogPost } from "@/sanity/schema/information/blogPost";
import { IoNewspaperOutline } from "react-icons/io5";
import defineArticleMaxItemsField from "@/sanity/utils/defineArticleMaxItemsField";
import defineArticleCategorySourceField from "@/sanity/utils/defineArticleCategorySourceField";

export type SanityArticleCardsVariant = "primary" | "secondary";
export type SanityArticleCardsSource =
  | "latestNews"
  | "latestBlogPost"
  | "category"
  | "custom"
  | "personalised";
export type SanityArticleCardsTitlePlacement = "top" | "left";
export type SanityArticleCards = SanityDocument & {
  title: string;
  description?: string;
  source: SanityArticleCardsSource;
  titlePlacement: SanityArticleCardsTitlePlacement;
  variant: SanityArticleCardsVariant;
  items: Array<SanityBlogPost | SanityNewsArticle>;
};

const sources: Record<SanityArticleCardsSource, string> = {
  latestNews: "Latest News",
  latestBlogPost: "Latest Blog Post",
  category: "Category",
  custom: "Custom Data",
  personalised: "Personalised",
};
const variants: Record<SanityArticleCardsVariant, string> = {
  primary: "Primary",
  secondary: "Secondary",
};
const titlePlacements: Record<SanityArticleCardsTitlePlacement, string> = {
  top: "Top",
  left: "Left",
};

export default defineType({
  type: "document",
  name: "articleCards",
  title: "Article Cards",
  icon: IoNewspaperOutline,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: Object.keys(variants).map(value => ({
          title: variants[value as SanityArticleCardsVariant],
          value,
        })),
        layout: "radio",
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "titlePlacement",
      title: "Title Placement",
      type: "string",
      options: {
        list: Object.keys(titlePlacements).map(value => ({
          title: titlePlacements[value as SanityArticleCardsTitlePlacement],
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
          title: sources[value as SanityArticleCardsSource],
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
        !["custom"].includes((document?.source as string | undefined) ?? ""),
    }),
    defineArticleCategorySourceField(),
    defineArticleMaxItemsField(["latestNews", "latestBlogPost", "category"]),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
    },
    prepare: ({ title, description: subtitle }) => ({
      title,
      subtitle,
    }),
  },
});

import { defineField } from "sanity";

import { SanityArticleContentSource } from "@/sanity/schema/types";
import { ArticleRootPath } from "@/types/articles";
import defineRichTextField from "@/sanity/utils/richtext";

/**
 * Content sources for articles
 */
const contentSources: Record<SanityArticleContentSource, string> = {
  externalUrl: "External URL",
  internalPageSlug: "Internal Page",
  contentBody: "Content Body",
};

type SanityArticleContentSourceFieldOptions = {
  externalUrlField: string;
  group?: string;
  rootPath: ArticleRootPath;
};

const defineArticleContentSourceField = (
  options: SanityArticleContentSourceFieldOptions,
) => [
  defineField({
    name: "contentSource",
    title: "Content Source",
    description:
      "This is where the article content will be sourced from and where the user will be redirected to when they click on the article link.",
    type: "string",
    options: {
      list: Object.keys(contentSources).map(value => ({
        title: contentSources[value as SanityArticleContentSource],
        value,
      })),
      layout: "radio",
    },
    initialValue: "internalPageSlug",
    validation: rule => rule.required(),
    group: options.group,
  }),

  defineField({
    name: options?.externalUrlField ?? "externalUrl",
    title: "External URL",
    description: "The full URL to the actual article",
    type: "url",
    hidden: ({ document }) => document?.contentSource !== "externalUrl",
    validation: rule =>
      rule.custom((value, context) =>
        context.document?.contentSource === "externalUrl" && !value
          ? "External URL is required if Content Source is an External URL"
          : true,
      ),
    group: options.group,
  }),

  defineField({
    name: "internalPageSlug",
    title: "Internal Page Slug",
    description: "Slug of the internal page",
    type: "slug",
    hidden: ({ document }) => document?.contentSource !== "internalPageSlug",
    validation: rule =>
      rule.custom((value, context) =>
        context.document?.contentSource === "internalPageSlug" && !value
          ? "Internal Page Slug is required if Content Source is an Internal Page"
          : true,
      ),
    group: options.group,
  }),

  defineField({
    name: "slug",
    description: `The slug that will be appended to "${options.rootPath}"`,
    type: "slug",
    hidden: ({ document }) => document?.contentSource !== "contentBody",
    validation: rule =>
      rule.custom((value, context) => {
        if (context.document?.contentSource === "contentBody") {
          if (!value) {
            return "Slug is required if Content Source is the Content Body";
          }
        }

        return true;
      }),
    group: options.group,
  }),

  defineRichTextField({
    name: "body",
    title: "Content Body",
    hidden: ({ document }) => document?.contentSource !== "contentBody",
    group: options.group,
  }),

  defineField({
    name: "socialPost",
    description: "The social post to be shared on social media",
    type: "text",
    hidden: ({ document }) => document?.contentSource !== "contentBody",
    group: options.group,
  }),

  defineField({
    name: "openInNewTab",
    title: "Open in new tab",
    type: "boolean",
    group: options.group,
  }),
];

export default defineArticleContentSourceField;

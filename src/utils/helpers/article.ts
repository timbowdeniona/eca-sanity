import type { Metadata } from "next";
import trim from "lodash/trim";

import { SanityBlogPost } from "@/sanity/schema/information/blogPost";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import { ArticleRootPath } from "@/types/articles";
import { SanityArticleType } from "@/sanity/schema/types";
import { getArticleWithMeta } from "@/sanity/services/getArticle";
import { formatPageMetadata } from "./getPageMetadata";

type ArticleLinkOptions = {
  externalUrlField: "blogPostLink" | "articleLink";
  rootPath: ArticleRootPath;
};

/**
 * Get the article link based on the content source.
 */
export const getArticleLink = (
  item: SanityBlogPost | SanityNewsArticle,
  { externalUrlField, rootPath }: ArticleLinkOptions,
) => {
  switch (item.contentSource) {
    case "externalUrl":
      return item[externalUrlField] || rootPath;
    case "internalPageSlug":
      return item.internalPageSlug?.current || rootPath;
    case "contentBody":
      return `${rootPath}/${trim(item.slug?.current || "", "/")}`;
    default:
      return rootPath;
  }
};

/**
 * Get the article page metadata.
 */
export const getArticlePageMetadata = async (
  slug: string,
  type: SanityArticleType,
): Promise<Metadata> => {
  const { data: page } = await getArticleWithMeta(slug, type);

  const url = [
    "",
    type === "blogPost" ? "blog" : "news",
    ...[slug].filter(slug => !!slug),
  ].join("/");

  return formatPageMetadata(page?.pageMeta, url);
};

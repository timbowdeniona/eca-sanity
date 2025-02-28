import type { MetadataRoute } from "next";
import sortBy from "lodash/sortBy";
import trim from "lodash/trim";
import uniqBy from "lodash/uniqBy";

import type { SanityPage } from "@/sanity/schema/presentation/pageType";
import { getPagesForSitemap } from "@/sanity/services/getPages";
import {
  getBlogPostsForSitemap,
  getNewsArticlesForSitemap,
} from "@/sanity/services/getArticle";

const getPriority = (page: SanityPage) => {
  const slug = trim(page.slug.current, "/");
  if (!slug) {
    return 1;
  }
  if (page.type === "parent" || page.type === "static") {
    return 0.8;
  }
  return 0.5;
};

const getBlogPosts = async () => {
  const blogPosts = await getBlogPostsForSitemap();
  return (blogPosts ?? [])
    .map(blogPost => ({
      url: `blog/${trim(blogPost.slug?.current ?? "", "/")}`,
      lastModified: blogPost._updatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    }))
    .filter(item => item.url !== "blog/") as MetadataRoute.Sitemap;
};

const getNewsArticles = async () => {
  const newsArticles = await getNewsArticlesForSitemap();
  return (newsArticles ?? [])
    .map(newsArticle => ({
      url: `news/${trim(newsArticle.slug?.current ?? "", "/")}`,
      lastModified: newsArticle._updatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    }))
    .filter(item => item.url !== "news/") as MetadataRoute.Sitemap;
};

const getPages = async () => {
  const pages = await getPagesForSitemap();
  return (pages ?? [])
    .filter(page => {
      if (
        // Skip subpages that do not have at least one parent
        page.type === "child" &&
        !page.parents?.length
      ) {
        return false;
      }
      return true;
    })
    .map(page => ({
      url: trim(page.slug.current, "/"),
      lastModified: page._updatedAt,
      changeFrequency: "weekly",
      priority: getPriority(page),
    })) as MetadataRoute.Sitemap;
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? `https://${process.env.VERCEL_URL}`;

  const [blogPosts, newsArticles, pages] = await Promise.all([
    getBlogPosts(),
    getNewsArticles(),
    getPages(),
  ]);
  return sortBy(
    uniqBy([...blogPosts, ...newsArticles, ...pages], "url"),
    "url",
  ).map(page => ({
    ...page,
    url: `${baseUrl}/${page.url}`,
  }));
};

export default sitemap;

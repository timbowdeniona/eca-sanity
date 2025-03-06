"use server";

import { sanityFetch } from "@/sanity/lib/live";
import { SanityNewsArticle } from "../schema/information/newsArticle";
import {
  getBlogArticleBySlugQuery,
  getBlogArticleWithMetaBySlugQuery,
  getBlogPostsForSitemapQuery,
  getNewsArticleByIdQuery,
  getNewsArticleBySlugQuery,
  getNewsArticlesForSitemapQuery,
  getNewsArticlesQuery,
  getNewsArticlesByClubQuery,
  getNewsArticleWithMetaBySlugQuery,
} from "@/sanity/services/queries/article";
import {
  SanityArticleType,
  SanityPageWithMetadata,
} from "@/sanity/schema/types";
import { SanityBlogPost } from "../schema/information/blogPost";

const articlePageQueries: Record<SanityArticleType, string> = {
  blogPost: getBlogArticleBySlugQuery,
  newsArticle: getNewsArticleBySlugQuery,
};

const articlePageWithMetaQueries: Record<SanityArticleType, string> = {
  blogPost: getBlogArticleWithMetaBySlugQuery,
  newsArticle: getNewsArticleWithMetaBySlugQuery,
};

export const getArticle = async (
  slug: string,
  type: SanityArticleType,
): Promise<SanityNewsArticle | null> => {
  const { data } = await sanityFetch({
    query: articlePageQueries[type],
    params: { slug },
  });

  return data;
};

/**
 * Get all news articles
 */
export const getNewsArticles = async (): Promise<SanityNewsArticle[]> => {
  const { data } = await sanityFetch({
    query: getNewsArticlesQuery,
  });
  console.log(data)
  return data;
};

/**
 * Get all news articles
 */
export const getNewsArticlesByClub = async (
  id: string,
): Promise<SanityNewsArticle[]> => {
  const { data } = await sanityFetch({
    query: getNewsArticlesByClubQuery,
    params: { id },
  });
  console.log(data)
  return data;
};

/**
 * Get an article by id
 */
export const getNewsArticleById = async (
  id: string,
): Promise<SanityNewsArticle | null> => {
  const { data } = await sanityFetch({
    query: getNewsArticleByIdQuery,
    params: { id },
  });

  return data;
};

/**
 * Get an article with meta data
 */
export const getArticleWithMeta = async (
  slug: string,
  type: SanityArticleType,
): Promise<SanityPageWithMetadata | null> => {
  const { data } = await sanityFetch({
    query: articlePageWithMetaQueries[type],
    params: { slug },
  });

  return data;
};

/**
 * Get blog posts for sitemap
 */
export const getBlogPostsForSitemap = async (): Promise<SanityBlogPost[]> => {
  const { data } = await sanityFetch({
    query: getBlogPostsForSitemapQuery,
  });

  return data;
};

/**
 * Get news articles for sitemap
 */
export const getNewsArticlesForSitemap = async (): Promise<
  SanityNewsArticle[]
> => {
  const { data } = await sanityFetch({
    query: getNewsArticlesForSitemapQuery,
  });

  return data;
};

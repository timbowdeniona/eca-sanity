import { loadQuery } from "@sanity/react-loader";
import { LoadQueryOptions } from "@/sanity/lib/store";
import { SanityNewsArticle } from "../schema/information/newsArticle";
import {
  getBlogArticleBySlugQuery,
  getBlogArticleWithMetaBySlugQuery,
  getBlogPostsForSitemapQuery,
  getNewsArticleBySlugQuery,
  getNewsArticlesForSitemapQuery,
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

export const getArticle = (
  slug: string,
  type: SanityArticleType,
  options?: LoadQueryOptions,
) =>
  loadQuery<SanityNewsArticle | null>(
    articlePageQueries[type],
    { slug },
    options,
  );

/**
 * Get an article with meta data
 */
export const getArticleWithMeta = (
  slug: string,
  type: SanityArticleType,
  options?: LoadQueryOptions,
) =>
  loadQuery<SanityPageWithMetadata | null>(
    articlePageWithMetaQueries[type],
    { slug },
    options,
  );

/**
 * Get blog posts for sitemap
 */
export const getBlogPostsForSitemap = (options?: LoadQueryOptions) =>
  loadQuery<SanityBlogPost[]>(getBlogPostsForSitemapQuery, undefined, options);

/**
 * Get news articles for sitemap
 */
export const getNewsArticlesForSitemap = (options?: LoadQueryOptions) =>
  loadQuery<SanityNewsArticle[]>(
    getNewsArticlesForSitemapQuery,
    undefined,
    options,
  );

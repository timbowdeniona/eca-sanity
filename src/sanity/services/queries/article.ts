import { groq } from "next-sanity";

import {
  blogPostFragment,
  newsArticleFragment,
} from "../fragments/documents/article";
import { pageMetaFragment } from "../fragments/objects/pageMeta";

export const getNewsArticleBySlugQuery = groq`
  *[_type == "newsArticle" && slug.current == $slug][0] {
    ${newsArticleFragment}
  }
`;

export const getNewsArticlesQuery = groq`
  *[_type == "newsArticle"] {
    ${newsArticleFragment}
  }
`;

export const getNewsArticlesByClubQuery = groq`
  *[_type == "newsArticle" && $id in clubs[]._ref] {
    ${newsArticleFragment}
  }
`;

export const getNewsArticleByIdQuery = groq`
  *[_type == "newsArticle" && _id == $id] {
    ${newsArticleFragment}
  }
`;

export const getBlogArticleBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogPostFragment}
  }
`;

export const getNewsArticleWithMetaBySlugQuery = groq`
  *[_type == "newsArticle" && slug.current == $slug][0] {
    _id,
    slug,
    pageMeta {
      ${pageMetaFragment}
    }
  }
`;

export const getBlogArticleWithMetaBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    slug,
    pageMeta {
      ${pageMetaFragment}
    }
  }
`;

export const getBlogPostsForSitemapQuery = groq`
  *[_type == "blogPost"] {
    _id,
    _updatedAt,
    slug
  }
`;

export const getNewsArticlesForSitemapQuery = groq`
  *[_type == "newsArticle"] {
    _id,
    _updatedAt,
    slug
  }
`;

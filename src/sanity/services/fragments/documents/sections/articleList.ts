import { groq } from "next-sanity";

import {
  blogPostFragment,
  newsArticleFragment,
} from "@/sanity/services/fragments/documents/article";
import { linkFragment } from "../link";
import { imageFragment } from "../image";
import makeLimitedItemsFragment from "@/utils/helpers/make-limited-items-fragment";

export const articleListFragment = groq`
  title,
  source,
  variant,
  "items": select(
    ${makeLimitedItemsFragment(
      "newsArticle",
      "latestNews",
      newsArticleFragment,
      "newsDate",
    )}

    ${makeLimitedItemsFragment(
      "blogPost",
      "latestBlogPost",
      blogPostFragment,
      "date",
    )}

    source == "reference" => items[] -> {
      _type == 'newsArticle' => {
        ${newsArticleFragment}
      },
      _type == 'blogPost' => {
        ${blogPostFragment}
      }
    },

    ${makeLimitedItemsFragment(
      "blogPost",
      "category",
      blogPostFragment,
      "date",
      {
        sourceRules: "&& category->_type == 'blog'",
        articleRules: "&& ^.category._ref == blog._ref",
      },
    )}

    ${makeLimitedItemsFragment(
      "newsArticle",
      "category",
      newsArticleFragment,
      "newsDate",
      {
        sourceRules: "&& category->_type == 'newsCategory'",
        articleRules: "&& ^.category._ref in categories[]._ref",
      },
    )}

    source == "custom" => customItems[] {
      date,
      headline,
      description,
      badge,
      image {
        ${imageFragment}
      },
      link
    },

    []
  ),
  ctas[] {
    link-> {
      ${linkFragment}
    },
    openInNewTab
  }
`;

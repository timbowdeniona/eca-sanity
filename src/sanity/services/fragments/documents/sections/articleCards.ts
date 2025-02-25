import { groq } from "next-sanity";

import {
  blogPostFragment,
  newsArticleFragment,
} from "@/sanity/services/fragments/documents/article";
import makeLimitedItemsFragment from "@/utils/helpers/make-limited-items-fragment";

export const articleCardsFragment = groq`
  title,
  description,
  source,
  variant,
  titlePlacement,
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

    source == "custom" => items[] -> {
      _type == 'newsArticle' => {
        ${newsArticleFragment}
      },
      _type == 'blogPost' => {
        ${blogPostFragment}
      }
    },

    source == "personalised" => [],
  )
`;

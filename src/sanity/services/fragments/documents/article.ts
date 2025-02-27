import { groq } from "next-sanity";

import { imageFragment } from "./image";

export const newsArticleFragment = groq`
  _id,
  _type,
  title,
  articleImage {
    ${imageFragment}
  },
  badgeVariant,
  badgeText,
  summary,
  contentSource,
  articleLink,
  internalPageSlug {
    current
  },
  slug {
    current
  },
  body,
  openInNewTab,
  newsDate,
  contactName,
`;

export const blogPostFragment = groq`
  _id,
  _type,
  title,
  blogPostImage {
    ${imageFragment}
  },
  blog->{
    title
  },
  author->{
    name
  },
  publicationDate,
  summary,
  contentSource,
  blogPostLink,
  internalPageSlug {
    current
  },
  slug {
    current
  },
  body,
  openInNewTab,
  keyword,
  relatedContent,
`;

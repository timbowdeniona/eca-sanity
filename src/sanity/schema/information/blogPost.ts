import type { SanityDocument } from "next-sanity";
import { defineField, defineType, Slug } from "sanity";
import { SanityArticleContentSource, SanityImage } from "@/sanity/schema/types";
import { SanityBlog } from "./blog";
import { SanityPerson } from "./person";
import defineArticleContentSourceField from "@/sanity/utils/defineArticleContentSourceField";
import { PATH_BLOG } from "@/configs/articles";
import { SanityPageMeta } from "../presentation/pageType/pageMeta";

export type SanityBlogPost = SanityDocument & {
  title: string;
  blogPostImage?: SanityImage;
  blog: SanityBlog;
  author: SanityPerson;
  publicationDate: string;
  summary: string;
  keyword?: Array<string>;
  relatedContent?: Array<string>;
  blogPostLink?: string;
  internalPageSlug?: Slug;
  slug?: Slug;
  contentSource: SanityArticleContentSource;
  openInNewTab?: boolean;
  pageMeta?: SanityPageMeta;
};

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "blogPostImage",
      type: "image",
      fields: [
        {
          title: "Alternate Text",
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "blog",
      title: "Blog Category",
      type: "reference",
      to: [{ type: "blog" }],
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "person" }],
    }),
    defineField({
      name: "publicationDate",
      type: "date",
    }),
    defineField({
      name: "summary",
      type: "text",
    }),
    ...defineArticleContentSourceField({
      externalUrlField: "blogPostLink",
      rootPath: PATH_BLOG,
    }),
    defineField({
      name: "relatedContent",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
    }),
  ],
});

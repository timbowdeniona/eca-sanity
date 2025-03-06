import type { FC } from "react";

import { ArticleList } from "@/components/storybook/article-list";
import { fallbackImage, PATH_BLOG, PATH_NEWS } from "@/configs/articles";
import {
  SanityArticleCustomData,
  SanityArticleList,
} from "@/sanity/schema/presentation/sectionType/sections/articleList";
import { SanityBlogPost } from "@/sanity/schema/information/blogPost";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import { urlForImage } from "@/sanity/lib/image";
import { getArticleLink } from "@/utils/helpers/article";

type Props = {
  section: SanityArticleList;
};

const ArticleListSection: FC<Props> = ({ section }) => {
  const [cta] = section.ctas ?? [];
  const articles = section.items?.map((item, index) => {
    if (item._type === "newsArticle") {
      return {
        id: item._id || index,
        image:
          urlForImage((item as SanityNewsArticle).articleImage?.asset) ??
          fallbackImage,
        imageAlt: (item as SanityNewsArticle).articleImage?.alt,
        highlightedText: (item as SanityNewsArticle)._createdAt,
        badge: "News",
        headline: (item as SanityNewsArticle).title,
        summary: (item as SanityNewsArticle).summary,
        link: getArticleLink(item as SanityBlogPost, {
          externalUrlField: "articleLink",
          rootPath: PATH_NEWS,
        }),
        logos: (item as SanityNewsArticle).logos,
        openInNewTab: item.openInNewTab ?? false,
      };
    } else if (item._type === "blogPost") {
      return {
        id: item._id || index,
        image:
          urlForImage((item as SanityBlogPost).blogPostImage?.asset) ??
          fallbackImage,
        imageAlt: (item as SanityBlogPost).blogPostImage?.alt,
        highlightedText: (item as SanityBlogPost).blog?.title,
        badge: "Blog Post",
        headline: (item as SanityBlogPost).title,
        summary: (item as SanityBlogPost).summary,
        link: getArticleLink(item as SanityBlogPost, {
          externalUrlField: "blogPostLink",
          rootPath: PATH_BLOG,
        }),
        openInNewTab: item.openInNewTab ?? false,
      };
    }
    return {
      id: item._id || index,
      image: urlForImage((item as SanityArticleCustomData).image?.asset) ?? "",
      imageAlt: (item as SanityArticleCustomData).image?.alt,
      highlightedText: (item as SanityArticleCustomData).date ?? "",
      badge: (item as SanityArticleCustomData).badge ?? "",
      headline: (item as SanityArticleCustomData).headline ?? "",
      summary: (item as SanityArticleCustomData).description ?? "",
      link: (item as SanityArticleCustomData).link ?? "/",
    };
  });

  return (
    <ArticleList
      articles={articles}
      cta={cta?.link?.title}
      ctaLink={cta?.link?.url}
      linkTarget={cta?.openInNewTab ? "_blank" : undefined}
      title={section.title}
      variant={section.variant}
    />
  );
};

export default ArticleListSection;

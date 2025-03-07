import type { FC } from "react";

import { fallbackImage, PATH_BLOG, PATH_NEWS } from "@/configs/articles";
import { SanityBlogPost } from "@/sanity/schema/information/blogPost";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import { ArticleCards } from "@/components/storybook/article-cards";
import { SanityArticleCards } from "@/sanity/schema/presentation/sectionType/sections/articleCards";
import { urlForImage } from "@/sanity/lib/image";
import { getArticleLink } from "@/utils/helpers/article";

export type Props = {
  section: SanityArticleCards;
};
const ArticleCardsSection: FC<Props> = ({ section }) => {
  const [cta] = section.ctas ?? [];
  const articles = (section.items ?? []).map((item, index) => {
    if (item._type === "newsArticle") {
      return {
        id: item._id || index,
        image:
          urlForImage((item as SanityNewsArticle).articleImage?.asset) ??
          fallbackImage,
        imageAlt: (item as SanityNewsArticle).articleImage?.alt,
        badge: "News",
        summary: (item as SanityNewsArticle).summary,
        link: getArticleLink(item as SanityBlogPost, {
          externalUrlField: "articleLink",
          rootPath: PATH_NEWS,
        }),
        openInNewTab: item.openInNewTab ?? false,
      };
    }

    return {
      id: item._id || index,
      image:
        urlForImage((item as SanityBlogPost).blogPostImage?.asset) ??
        fallbackImage,
      imageAlt: (item as SanityBlogPost).blogPostImage?.alt,
      badge: "Blog Post",
      summary: (item as SanityBlogPost).summary,
      link: getArticleLink(item as SanityBlogPost, {
        externalUrlField: "blogPostLink",
        rootPath: PATH_BLOG,
      }),
      openInNewTab: item.openInNewTab ?? false,
    };
  });

  return (
    <ArticleCards
      articles={articles}
      description={section.description}
      linkTarget={cta?.openInNewTab ? "_blank" : undefined}
      logos={true}
      title={section.title}
      titlePlacement={section.titlePlacement}
      variant={section.variant}
    />
  );
};

export default ArticleCardsSection;

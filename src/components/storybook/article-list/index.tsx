import { cn } from "@/utils/helpers/cn";
import { Button } from "../button";
import { ArticleItem } from "./article-item";
import { ComponentProps, HTMLAttributeAnchorTarget } from "react";

import ChevronRight from "@/components/storybook/icons/ChevronRight";

export type ArticleListItem = {
  id: string | number;
  image?: string;
  imageAlt?: string;
  badge?: string;
  highlightedText: string;
  headline: string;
  summary: string;
  link: string;
  openInNewTab?: boolean;
};

export type ArticleListProps = {
  title: string;
  variant: "primary" | "secondary";
  cta?: string;
  ctaLink?: string;
  articles: Array<ArticleListItem>;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"section">;

export const ArticleList = ({
  variant,
  title,
  articles,
  cta,
  ctaLink,
  linkTarget,
  ...props
}: ArticleListProps) => {
  // Hide section if there's no articles
  if (!articles || articles?.length == 0) {
    return null;
  }

  // TODO: `bg-transparent` and `borderClass`, we need to support proper bg color
  const bgColorClass = variant === "primary" ? "bg-transparent" : "bg-cyan-800";
  const titleColorClass =
    variant === "primary" ? "text-cyan-800" : "text-white";
  const labelVariant = variant === "primary" ? "cyan-800" : "red";

  return (
    <section
      {...props}
      className={cn(
        "@container flex justify-center",
        bgColorClass,
        props.className,
      )}
    >
      <div className="wrapper flex w-full flex-col pb-10 pt-4 @clg:pb-12 @clg:pt-8">
        <h2 className={cn("mb-6 @clg:mb-10", titleColorClass)}>{title}</h2>
        <ul className="mb-8 flex w-full flex-col items-start gap-4 @clg:mb-[48px] @clg:max-w-[1126px] @clg:self-center">
          {articles.map(article => (
            <li className={cn("w-full")} key={article.id}>
              <ArticleItem
                badge={article.badge}
                badgeVariant={labelVariant}
                headline={article.headline}
                highlightedText={article.highlightedText}
                image={article.image}
                imageAlt={article.imageAlt}
                link={article.link}
                linkTarget={article.openInNewTab ? "_blank" : undefined}
                summary={article.summary}
              />
            </li>
          ))}
        </ul>
        {cta && ctaLink && (
          <div className="flex justify-center">
            <Button
              className="flex flex-row items-center gap-2"
              href={ctaLink}
              mode="link"
              target={linkTarget}
              variant="primary"
            >
              {cta}
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

import type {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import Image from "next/image";

import Link from "@/components/base/link";
import { Label } from "@/components/storybook/label";
import Triangle from "@/components/storybook/icons/Triangle";
import { cn } from "@/utils/helpers/cn";
import createPreviewThumbnail from "@/sanity/utils/createPreviewThumbnail";

export type ArticleCardContentType = "aqaResource" | "newsArticle" | "blogPost";

export type ArticleItemProps = {
  badgeVariant?: "cyan-800" | "grey" | "green" | "red";
  badge?: string;
  date?: string;
  image?: string;
  imageAlt?: string;
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
  logos?: string[];
  metadata?: string;
  summary: string;
  triangleColor?: CSSProperties["color"];
  type?: ArticleCardContentType;
} & ComponentProps<"article">;

export const ArticleItem = ({
  badge,
  badgeVariant,
  date,
  image,
  imageAlt,
  link,
  linkTarget,
  logos,
  metadata,
  summary,
  triangleColor,
  type,
}: ArticleItemProps) => {
  return (
    <article
      className="group flex h-full flex-col bg-white"
      style={{ "--triangle-color": triangleColor } as CSSProperties}
    >
      <Link
        aria-label={summary}
        className="flex h-full flex-col"
        href={link}
        target={linkTarget}
      >
        <div className="relative">
          {badge && badgeVariant && (
            <Label className="absolute" variant={badgeVariant}>
              {badge}
              {logos}
            </Label>
          )}
          {image && (
            <div
              className={cn(
                "w-full relative aspect-[16/9]",
                triangleColor &&
                  "bg-grey flex flex-row justify-center items-center",
              )}
            >
              {triangleColor ? (
                <>
                  <Triangle className="absolute -right-px -top-px h-full w-auto [&>path]:fill-[var(--triangle-color)]" />
                  <div
                    className={cn(
                      "relative h-[90%] w-auto max-w-[50%] flex flex-col justify-center",
                    )}
                  >
                    {type === "aqaResource" ? (
                      createPreviewThumbnail(image, imageAlt, "large")
                    ) : (
                      <Image
                        alt={imageAlt || ""}
                        className="size-full object-contain drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
                        height={164}
                        src={image}
                        width={164}
                      />
                    )}
                  </div>
                </>
              ) : (
                <Image
                  alt={imageAlt || ""}
                  className="size-full object-cover"
                  height={180}
                  src={image}
                  width={320}
                />
              )}
            </div>
          )}
        </div>
        <div className="flex grow flex-col py-4 pl-6 pr-4">
          <div
            className={cn(
              "text-neutral group-hover:underline group-hover:text-red flex-grow pb-[31px] lg:pb-[26px]",
            )}
          >
            <p
              className={cn(
                "line-clamp-2 lg:line-clamp-3",
                triangleColor
                  ? "text-[20px] lg:text-[22px] leading-[28px] lg:leading-[32px] font-semibold"
                  : "lead",
              )}
            >
              {summary}
            </p>
          </div>
          {date && (
            <time
              className="mb-[4px] block text-red lg:mb-[3px]"
              dateTime={date}
            >
              {date}
            </time>
          )}
          {metadata && (
            <p className="text-neutral">
              <b>{metadata}</b>
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

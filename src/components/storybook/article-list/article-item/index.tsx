import { ComponentProps, HTMLAttributeAnchorTarget } from "react";
import Image from "next/image";

import Link from "@/components/base/link";
import { Label } from "@/components/storybook/label";

type ArticleItemProps = {
  badgeVariant: "cyan-800" | "grey" | "green" | "red";
  badge?: string;
  image?: string;
  imageAlt?: string;
  highlightedText: string;
  headline: string;
  summary: string;
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"article">;

export const ArticleItem = ({
  image,
  imageAlt,
  badge,
  highlightedText,
  headline,
  summary,
  badgeVariant,
  link,
  linkTarget,
}: ArticleItemProps) => {
  // NOTE: The @container class is (should be) defined in the parent component
  return (
    <article className="group relative flex flex-col bg-cyan-800 @4xl:flex-row @cmd:gap-6">
      <Link
        aria-label={summary}
        className="absolute inset-0 z-10"
        href={link}
        target={linkTarget}
      />
      <div className="relative">
        {badge && (
          <Label className="absolute" variant={badgeVariant}>
            {badge}
          </Label>
        )}
        <div className="aspect-[16/9] w-full @4xl:w-[360px]">
          {image && (
            <Image
              alt={imageAlt || ""}
              className="size-full object-cover"
              height={180}
              src={image}
              width={320}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch pb-6 pl-6 pr-4 pt-4 @4xl:p-6 @4xl:py-4 @4xl:pl-0">
        <p className="text-white">{highlightedText}</p>
        <h3 className="text-white group-hover:underline">{headline}</h3>
        <p className="line-clamp-3 text-white">{summary}</p>
      </div>
    </article>
  );
};

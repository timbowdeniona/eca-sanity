import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";
import { Button } from "@/components/storybook/button";
import LinkIcon from "@/components/storybook/icons/LinkIcon";
import isString from "lodash/isString";

export type Props = {
  className?: string;
  heading: string;
  description: string | ReactNode;
  link: string;
  linkText: string;
  linkTarget?: HTMLAttributeAnchorTarget;
  youtubeEmbedUrl?: string;
  image?: string;
  alt?: string;
  mediaType: "image" | "youtube-embed" | "none";
  mediaPosition?: "right" | "left";
  variant: "primary" | "secondary";
};

const mediaDimensions =
  "aspect-[16/9] md:min-w-[350px] lg:min-w-[391px] w-full md:w-auto lg:size-full";

export const Promo = ({
  className,
  heading,
  description,
  link,
  linkText,
  linkTarget,
  youtubeEmbedUrl,
  image,
  alt,
  mediaType,
  mediaPosition,
  variant,
}: Props) => {
  // Determine if the promo has media.
  const hasMedia: boolean =
    !!(image || youtubeEmbedUrl) && mediaType !== "none";

  return (
    <div
      className={cn(
        "flex flex-col justify-between",
        variant === "primary" && "bg-purple text-white",
        variant === "secondary" && "bg-white text-neutral",
        hasMedia && "md:max-h-[271px] overflow-hidden",
        hasMedia && mediaPosition === "right"
          ? "md:flex-row-reverse"
          : "md:flex-row",
        className,
      )}
      data-testid="promo-container"
    >
      {hasMedia && (
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="promo-media flex shrink-0 overflow-hidden md:max-w-[350px] lg:max-w-[391px]"
          data-testid="promo-media"
        >
          {mediaType === "youtube-embed" && youtubeEmbedUrl && (
            <iframe
              allowFullScreen
              className={cn("md:aspect-auto lg:aspect-[16/9]", mediaDimensions)}
              data-testid="promo-embed"
              loading="lazy"
              src={youtubeEmbedUrl}
              title={alt}
            ></iframe>
          )}
          {/* We prio the youtubeEmbedUrl if both youtubeEmbedUrl and image are present */}
          {mediaType === "image" && image && (
            <Image
              alt={alt || heading}
              className={cn(
                "object-cover object-center md:aspect-[16/9]",
                mediaDimensions,
              )}
              data-testid="promo-image"
              height={196.875}
              sizes="100vw"
              src={image}
              style={{ width: "100%", height: "auto" }}
              width={350}
            />
          )}
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-6 p-6 flex-1",
          !hasMedia && "md:flex-row md:items-center",
        )}
      >
        <div className="flex flex-1 flex-col gap-2">
          <h2
            className={cn(
              "md:line-clamp-2 lg:line-clamp-3",
              variant === "secondary" && "text-purple",
            )}
            data-testid="promo-heading"
          >
            {heading}
          </h2>
          {isString(description) ? (
            <p
              className="lead md:line-clamp-3 lg:line-clamp-4"
              data-testid="promo-description"
            >
              {description}
            </p>
          ) : (
            description
          )}
        </div>
        <div className="flex md:shrink-0">
          <Button
            className="flex shrink-0 items-center gap-2"
            color="red"
            data-testid="promo-link"
            href={link}
            mode="link"
            target={linkTarget}
            variant="primary"
          >
            {linkText}
            <LinkIcon className="shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Promo;

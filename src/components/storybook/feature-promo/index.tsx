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
  "aspect-[16/9] @cmd:min-w-[350px] @clg:min-w-[391px] w-full @cmd:w-auto @clg:size-full";

export const FeaturePromo = ({
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

  // NOTE: @container is (should be) defined in the parent component.
  return (
    <div
      className={cn(
        "flex flex-col justify-between",
        variant === "primary" && "bg-purple text-white",
        variant === "secondary" && "bg-white text-neutral",
        hasMedia && "@cmd:max-h-[271px] overflow-hidden",
        hasMedia && mediaPosition === "right"
          ? "@cmd:flex-row-reverse"
          : "@cmd:flex-row",
        className,
      )}
      data-testid="feat-promo-container"
    >
      {hasMedia && (
        <div
          className="flex shrink-0 overflow-hidden @cmd:max-w-[350px] @clg:max-w-[391px]"
          data-testid="feat-promo-media"
        >
          {mediaType === "youtube-embed" && youtubeEmbedUrl && (
            <iframe
              allowFullScreen
              className={cn(
                "@cmd:aspect-auto @clg:aspect-[16/9]",
                mediaDimensions,
              )}
              data-testid="feat-promo-embed"
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
                "object-cover object-center @cmd:aspect-[16/9]",
                mediaDimensions,
              )}
              data-testid="feat-promo-image"
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
          !hasMedia && "@cmd:flex-row @cmd:items-center",
        )}
      >
        <div className="flex flex-1 flex-col gap-2">
          <h2
            className={cn(
              "@cmd:line-clamp-2 @clg:line-clamp-3",
              variant === "secondary" && "text-purple",
            )}
            data-testid="feat-promo-heading"
          >
            {heading}
          </h2>
          {isString(description) ? (
            <p
              className="lead @cmd:line-clamp-3 @clg:line-clamp-4"
              data-testid="feat-promo-description"
            >
              {description}
            </p>
          ) : (
            description
          )}
        </div>
        <div className="flex @cmd:shrink-0">
          <Button
            className="flex shrink-0 items-center gap-2"
            color="red"
            data-testid="feat-promo-link"
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

export default FeaturePromo;

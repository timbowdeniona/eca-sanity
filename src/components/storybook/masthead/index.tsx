import type {
  ComponentProps,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";
import { Button } from "../button";
import { toVideoEmbedUrl } from "@/utils/helpers/toVideoEmbedUrl";
import VideoPlayerIframe from "@/components/storybook/video-player/iframe";

type MastheadProps = {
  children?: ReactNode;
  variant: "primary" | "secondary";
  mode?: "hero" | "section";
  image?: string;
  imageXl?: string;
  imageLg?: string;
  imageMd?: string;
  imageSm?: string;
  mediaAlt?: string;
  text?: string;
  subtext?: string;
  cta?: string;
  ctaLink?: string;
  ctaTarget?: HTMLAttributeAnchorTarget | undefined;
  alignment?: "top" | "middle" | "bottom";
  mediaType?: "image" | "video";
  videoUrl?: string;
} & ComponentProps<"section">;

export const Masthead = ({
  children,
  variant,
  mode = "hero",
  image,
  imageXl,
  imageLg,
  imageMd,
  imageSm,
  mediaAlt,
  text,
  subtext,
  cta,
  ctaLink,
  ctaTarget,
  alignment = "top",
  mediaType = "image",
  videoUrl,
}: MastheadProps) => {
  const bgColorClass =
    variant === "primary" ? "bg-purple text-white" : "bg-grey text-purple";

  return (
    <section
      className={cn(
        "flex flex-col relative",
        bgColorClass,
        mode === "section" && "wrapper",
      )}
    >
      <div
        className={cn(
          "md:absolute md:w-1/2 md:h-full md:right-0 md:top-0 -mx-5 md:mx-0 z-[1]",
        )}
      >
        {mediaType === "image" && (
          <picture>
            <source
              height={(375 * 3) / 2}
              media="(min-width: 1441px)"
              srcSet={imageXl || imageLg || imageMd || imageSm || image}
              width={(1024 * 3) / 2}
            />
            <source
              height={375}
              media="(min-width: 1025px)"
              srcSet={imageLg || imageMd || imageSm || image}
              width={1024}
            />
            <source
              height={375 / 2}
              media="(min-width: 641px)"
              srcSet={imageMd || imageSm || image}
              width={1024 / 2}
            />
            <Image
              alt={mediaAlt || ""}
              className="size-full max-h-[280px] object-cover md:max-h-full"
              height={375 / 3}
              priority
              src={imageSm || image || ""}
              width={1024 / 3}
            />
          </picture>
        )}
        {mediaType === "video" && videoUrl && (
          <VideoPlayerIframe alt={mediaAlt} src={toVideoEmbedUrl(videoUrl)} />
        )}
      </div>
      <div
        className={cn(
          "relative self-center lg:bg-transparent z-0 [&_img]:object-contain",
          mode === "section" ? "w-full" : "wrapper",
        )}
      >
        <div
          className={cn(
            "flex flex-col md:w-1/2 gap-6 pr-5 [.page-nested_&]:pl-5 py-6 md:py-12 lg:min-h-[304px]",
            mode === "section" && "xl:pl-5",
            alignment === "top" && "justify-start",
            alignment === "middle" && "justify-center",
            alignment === "bottom" && "justify-end",
          )}
        >
          <div className="flex flex-col items-start gap-2 lg:gap-4">
            {children || (
              <>
                <h1>{text}</h1>
                <p className="lead">{subtext}</p>
              </>
            )}
          </div>
          {!!cta && !!ctaLink && (
            <div className="flex">
              <Button
                color="red"
                href={ctaLink}
                mode="link"
                target={ctaTarget}
                variant={variant}
              >
                {cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

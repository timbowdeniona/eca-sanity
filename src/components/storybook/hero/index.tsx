import type {
  ComponentProps,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";
import { Button } from "../button";

type HeroProps = {
  children?: ReactNode;
  variant: "primary" | "secondary";
  image: string;
  imageXl?: string;
  imageLg?: string;
  imageMd?: string;
  imageSm?: string;
  imageAlt?: string;
  text?: string;
  subtext?: string;
  cta?: string;
  ctaLink?: string;
  ctaTarget?: HTMLAttributeAnchorTarget | undefined;
} & ComponentProps<"section">;

export const Hero = ({
  children,
  variant,
  image,
  imageXl,
  imageLg,
  imageMd,
  imageSm,
  imageAlt,
  text,
  subtext,
  cta,
  ctaLink,
  ctaTarget,
}: HeroProps) => {
  const bgColorClass =
    variant === "primary" ? "bg-purple text-white" : "bg-dark-red text-white";

  return (
    <section className={cn("@container flex flex-col relative", bgColorClass)}>
      <div className="aspect-[1024/375] w-full @clg:max-h-[480px]">
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
            alt={imageAlt || ""}
            className="size-full object-cover"
            height={375 / 3}
            priority
            src={imageSm || image}
            width={1024 / 3}
          />
        </picture>
      </div>
      <div
        className={cn(
          "wrapper self-center gap-6 pb-8 pt-6 @cmd:pb-12 @clg:absolute @clg:bg-transparent @clg:pb-0 @clg:pt-16",
        )}
      >
        <div className="flex flex-col items-start gap-2 @clg:w-[600px] @clg:gap-4">
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
    </section>
  );
};

import type { ComponentProps } from "react";
import React, { forwardRef } from "react";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";

type TertiaryTitle = {
  variant: "tertiary";
  description?: string;
  image: string;
  imageAlt?: string;
};

type SecondaryTitle = {
  variant: "secondary";
  description?: string;
  color: string;
};

type PrimaryTitle = {
  variant: "primary";
  subtitle?: string;
  color: string;
  textColor?: string;
};

type TitleBarProps = {
  title: string;
} & (PrimaryTitle | SecondaryTitle | TertiaryTitle) &
  ComponentProps<"section">;

export const TitleBar = forwardRef<HTMLElement, TitleBarProps>(
  ({ variant, className, title, ...props }, ref) => {
    const { subtitle, color, textColor = "text-white" } = props as PrimaryTitle;
    const { color: secondaryColor } = props as SecondaryTitle;
    const { image, imageAlt } = props as TertiaryTitle;
    const { description } = props as SecondaryTitle | TertiaryTitle;

    return (
      <header
        className={cn(
          "z-0 flex overflow-hidden relative",
          variant === "primary" && `bg-${color} ${textColor}`,
          variant === "secondary" && `bg-${secondaryColor}`,
          variant === "secondary" &&
            secondaryColor === "white" &&
            "text-purple",
          variant === "secondary" && secondaryColor !== "white" && "text-white",
          variant === "tertiary" && "bg-purple text-white",
          className,
        )}
        ref={ref}
      >
        {image && (
          <div
            className={cn(
              "absolute top-0 h-full",
              variant === "tertiary"
                ? "left-[60%] w-2/5 hidden md:block"
                : "left-1/2 w-1/2",
            )}
          >
            <div className="relative aspect-[16/9] size-full overflow-hidden">
              <Image
                alt={imageAlt || ""}
                className="size-full object-cover"
                height={400}
                src={image}
                width={1200}
              />
            </div>
          </div>
        )}

        <div
          className={cn(
            "wrapper gap-2 z-30 pb-[16px] pt-[22px] md:pt-16 md:pb-[36px]",
            variant === "primary" && "min-h-20 md:min-h-40 lg:min-h-[180px]",
            variant === "secondary" &&
              "min-h-[240px] md:min-h-[208px] lg:min-h-[240px]",
            variant === "tertiary" &&
              "min-h-[148px] md:min-h-[232px] lg:min-h-[288px]",
          )}
        >
          <h1
            className={cn(
              variant === "secondary" &&
                secondaryColor === "white" &&
                "text-purple",
            )}
          >
            {title}
            {subtitle && (
              <sub className="bottom-0 left-[0.25em] text-[0.625em] font-semibold leading-[1.4] lg:bottom-[-0.05em] lg:left-[0.75em] lg:text-[0.34375em] lg:leading-[1.454545]">
                {subtitle}
              </sub>
            )}
          </h1>
          {description && (
            <p
              className={cn(
                "lead line-clamp-4 md:line-clamp-2",
                variant === "secondary" && "lg:max-w-[924px]",
                variant === "tertiary" && "w-4/5",
              )}
            >
              {description}
            </p>
          )}
        </div>
      </header>
    );
  },
);

export default TitleBar;

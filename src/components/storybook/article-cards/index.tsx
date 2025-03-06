"use client";

import type {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import { useState } from "react";

import { Button } from "../button";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArticleItem } from "./article-item";
import { SwiperOptions } from "swiper/types";

import ChevronRight from "@/components/storybook/icons/ChevronRight";
import ChevronLeft from "@/components/storybook/icons/ChevronLeft";
import { cn } from "@/utils/helpers/cn";
import { ArticleCardContentType } from "./article-item";

export type ArticleCardsItem = {
  id: string | number;
  badge?: string;
  date?: string;
  image?: string;
  imageAlt?: string;
  isResource?: boolean;
  logos: string[];
  metadata?: string;
  summary: string;
  link: string;
  openInNewTab?: boolean;
  type?: ArticleCardContentType;
};

type ArticleCardsProps = {
  className?: string;
  variant?: "primary" | "secondary";
  titlePlacement?: "top" | "left";
  title: string;
  description?: string;
  articles: ArticleCardsItem[];
  linkTarget?: HTMLAttributeAnchorTarget;
  swiperOptions?: Omit<SwiperOptions, "modules" | "breakpoints" | "navigation">;
  primaryColor?: CSSProperties["color"];
  secondaryColor?: CSSProperties["color"];
} & ComponentProps<"div">;

export const ArticleCards = ({
  className,
  variant = "primary",
  titlePlacement = "top",
  title,
  description,
  articles,
  linkTarget,
  swiperOptions,
  primaryColor,
  secondaryColor,
}: ArticleCardsProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  // NOTE: Please be aware that the swiper.params state is not updating on resize for some reason, which is why I've created a new state.
  const [isNavigationEnabled, setIsNavigationEnabled] = useState<boolean>();

  // Hide section if there's no articles
  if (!articles || articles?.length == 0) {
    return null;
  }

  const bgColorClass = {
    primary: "bg-grey text-purple",
    secondary: "bg-purple text-white",
  };
  const descriptionColorClass = {
    primary: "text-neutral",
    secondary: "text-white",
  };
  const divContainerClass = cn(
    "wrapper justify-center pt-4 pb-8 @cmd:pb-10 @cmd:pt-5 lg:[.wrapper_&]:px-6",
    titlePlacement === "top" && "@clg:flex-col @clg:py-6",
    titlePlacement === "left" &&
      "flex-col @clg:flex-row @clg:py-12 @clg:gap-10",
    primaryColor ? "gap-4 @clg:gap-6" : "gap-6",
  );
  const headerContainerClass = cn(
    "flex flex-col gap-2",
    titlePlacement === "left" && "@clg:w-1/4 @clg:gap-4",
  );
  // NOTE: Please note that the navigation button is not positioned in the center of the image.
  // Instead, I've placed it at the top quarter of the card as an alternative.
  const navigationButtonClass = cn(
    "absolute z-10 rounded-none w-12 h-12 p-0 justify-center",
    primaryColor ? "top-[56px]" : "top-1/4",
    !isNavigationEnabled && "hidden",
    isNavigationEnabled && "@cmd:flex @csm:hidden",
  );

  const handleChange = (swiper: SwiperClass) => {
    setSwiper(swiper);
    setIsNavigationEnabled(swiper.params.enabled && swiper.params.loop);
  };

  const swiperBreakpoints: {
    [width: number]: SwiperOptions;
  } = {
    0: {
      direction: "vertical",
      enabled: false,
      loop: false,
      slidesPerView: 6,
      spaceBetween: 16,
    },
    641: {
      direction: "horizontal",
      enabled: articles.length > 2,
      loop: articles.length > 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      direction: "horizontal",
      enabled:
        (titlePlacement === "left" && articles.length > 3) ||
        (titlePlacement === "top" && articles.length > 4),
      loop:
        (titlePlacement === "left" && articles.length > 3) ||
        (titlePlacement === "top" && articles.length > 4),
      slidesPerView: titlePlacement === "left" ? 3 : 4,
      spaceBetween: 40,
    },
  };

  if (!articles.length) {
    return <></>;
  }

  return (
    <div
      className={cn(
        "@container flex justify-center",
        bgColorClass[variant],
        className,
      )}
    >
      <div className={divContainerClass}>
        <div className={headerContainerClass}>
          <h2>{title}</h2>
          {description && (
            <p
              className={cn(
                "@clg:text-[18px] @clg:leading-[28px] font-semibold",
                titlePlacement === "top" && "@clg:max-w-[924px]",
                descriptionColorClass[variant],
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div
          className={cn(
            "relative w-full",
            titlePlacement === "left" && "@clg:w-3/4",
          )}
        >
          <Button
            className={cn(
              primaryColor ? "left-[-24px]" : "left-[-10px]",
              navigationButtonClass,
            )}
            onClick={() => swiper?.slidePrev()}
            type="button"
            variant="primary"
            {...(secondaryColor && primaryColor
              ? {
                  color: "custom",
                  customColor: secondaryColor,
                  customHoverColor: primaryColor,
                }
              : {
                  color: "purple-40",
                })}
          >
            <ChevronLeft />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            className={cn(
              primaryColor ? "right-[-24px]" : "right-[-10px]",
              navigationButtonClass,
            )}
            onClick={() => swiper?.slideNext()}
            type="button"
            variant="primary"
            {...(secondaryColor && primaryColor
              ? {
                  color: "custom",
                  customColor: secondaryColor,
                  customHoverColor: primaryColor,
                }
              : {
                  color: "purple-40",
                })}
          >
            <ChevronRight />
            <span className="sr-only">Next</span>
          </Button>

          <Swiper
            {...swiperOptions}
            breakpoints={swiperBreakpoints}
            breakpointsBase="container"
            // Note: !touch-auto added to remove pan-x and fix not scrollable card on mobile
            className={cn(
              "relative !touch-auto",
              !swiper && "invisible max-h-[320px]",
            )}
            onResize={handleChange}
            onSwiper={handleChange}
          >
            {articles.map((item, index) => (
              <SwiperSlide className="!h-auto" key={`${item.id}-${index}`}>
                <ArticleItem
                  badge={item.badge}
                  badgeVariant="cyan-800"
                  date={item.date}
                  logos={item.logos || []}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  linkTarget={item?.openInNewTab ? "_blank" : linkTarget}
                  metadata={item.metadata}
                  summary={item.summary}
                  triangleColor={item.isResource ? primaryColor : undefined}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

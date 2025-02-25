"use client";

import { ComponentProps, HTMLAttributeAnchorTarget, useState } from "react";

import { Button } from "../button";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

import ChevronRight from "@/components/storybook/icons/ChevronRight";
import ChevronLeft from "@/components/storybook/icons/ChevronLeft";
import { cn } from "@/utils/helpers/cn";
import { VideoCardItem } from "./video-card-item";

type VideoCardsItemProps = {
  id: string | number;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
};

type VideoCardsProps = {
  variant: "primary" | "secondary";
  title: string;
  description: string;
  items: Array<VideoCardsItemProps>;
  swiperOptions?: Omit<SwiperOptions, "modules" | "breakpoints" | "navigation">;
} & ComponentProps<"div">;

export const VideoCards = ({
  variant,
  title,
  description,
  items,
  swiperOptions,
}: VideoCardsProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  // NOTE: Please be aware that the swiper.params state is not updating on resize for some reason, which is why I've created a new state.
  const [isNavigationEnabled, setIsNavigationEnabled] = useState<boolean>();

  // Hide section if there's no item
  if (items.length === 0) {
    return null;
  }

  const divContainerClass = cn(
    "flex flex-col justify-center gap-6 pt-4 pb-8 @cmd:pb-10 @cmd:pt-5 px-5 @clg:px-10 w-full @cxl:w-[1408px] @cxl:px-0 @clg:flex-col @clg:pt-6 @clg:pb-12",
  );
  // NOTE: Please note that the navigation button is not positioned in the center of the image.
  // Instead, I've placed it at the top quarter of the card as an alternative.
  const navigationButtonClass = cn(
    "absolute z-10 top-1/4 rounded-none w-12 h-12 p-0 justify-center",
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
      enabled: items.length > 2,
      loop: items.length > 2,
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      direction: "horizontal",
      enabled: items.length > 3,
      loop: items.length > 3,
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <div
      className={cn(
        "@container flex justify-center",
        variant === "primary" && "bg-purple text-white",
        variant === "secondary" && "bg-grey text-neutral",
      )}
    >
      <div className={divContainerClass}>
        <div className="flex flex-col gap-1 @cmd:gap-2">
          <h2 className={cn(variant === "secondary" && "text-purple")}>
            {title}
          </h2>
          <p className="lead">{description}</p>
        </div>
        <div className="relative w-full">
          {
            <Button
              className={cn("left-[-10px]", navigationButtonClass)}
              color="purple-20"
              onClick={() => swiper?.slidePrev()}
              type="button"
              variant="primary"
            >
              <ChevronLeft className="fill-white" />
              <span className="sr-only">Previous</span>
            </Button>
          }
          {
            <Button
              className={cn("right-[-10px]", navigationButtonClass)}
              color="purple-20"
              onClick={() => swiper?.slideNext()}
              type="button"
              variant="primary"
            >
              <ChevronRight className="fill-white" />
              <span className="sr-only">Next</span>
            </Button>
          }

          <Swiper
            {...swiperOptions}
            breakpoints={swiperBreakpoints}
            breakpointsBase="container"
            className={cn(
              "relative !touch-auto",
              !swiper && "invisible max-h-[320px]",
            )}
            onResize={handleChange}
            onSwiper={handleChange}
          >
            {items.map(item => (
              <SwiperSlide className="!h-auto" key={item.id}>
                <VideoCardItem
                  description={item.description}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  linkTarget={item.linkTarget}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

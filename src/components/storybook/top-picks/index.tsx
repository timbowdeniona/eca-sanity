"use client";

import {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
  useState,
} from "react";

import { Button } from "../button";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

import ChevronRight from "@/components/storybook/icons/ChevronRight";
import ChevronLeft from "@/components/storybook/icons/ChevronLeft";
import { cn } from "@/utils/helpers/cn";
import { TopPickItem } from "./top-pick-item";

type TopPicksItemProps = {
  id: string | number;
  qualificationLevel: string;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  link: string;
};

type TopPicksProps = {
  primaryColor: CSSProperties["color"];
  secondaryColor: CSSProperties["color"];
  tertiaryColor: CSSProperties["color"];
  title: string;
  items: Array<TopPicksItemProps>;
  swiperOptions?: Omit<SwiperOptions, "modules" | "breakpoints" | "navigation">;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"div">;

export const TopPicks = ({
  title,
  items,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  swiperOptions,
  linkTarget,
}: TopPicksProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  // NOTE: Please be aware that the swiper.params state is not updating on resize for some reason, which is why I've created a new state.
  const [isNavigationEnabled, setIsNavigationEnabled] = useState<boolean>();

  // Hide section if there's no item
  if (items.length === 0) {
    return null;
  }

  const divContainerClass = cn(
    "flex flex-col justify-center gap-6 pt-4 pb-8 md:pb-10 md:pt-5 px-5 lg:px-10 w-full xl:w-[1408px] xl:px-0 lg:flex-col lg:pt-6 lg:pb-12",
  );
  // NOTE: Please note that the navigation button is not positioned in the center of the image.
  // Instead, I've placed it at the top quarter of the card as an alternative.
  const navigationButtonClass = cn(
    "absolute z-10 top-1/4 rounded-none w-12 h-12 p-0 justify-center",
    !isNavigationEnabled && "hidden",
    isNavigationEnabled && "md:flex sm:hidden",
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
      enabled: items.length > 4,
      loop: items.length > 4,
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const styles = {
    "--top-picks-primary-color": primaryColor,
    "--top-picks-secondary-color": secondaryColor,
    "--top-picks-tertiary-color": tertiaryColor,
  } as CSSProperties;

  return (
    <div
      className="flex justify-center bg-[color:var(--top-picks-primary-color)] text-white"
      style={styles}
    >
      <div className={divContainerClass}>
        <h2>{title}</h2>
        <div className="relative w-full">
          {
            <Button
              className={cn("left-[-10px]", navigationButtonClass)}
              {...(secondaryColor && tertiaryColor
                ? {
                    color: "custom",
                    customColor: secondaryColor,
                    customHoverColor: tertiaryColor,
                  }
                : {
                    color: "purple-40",
                  })}
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
              {...(secondaryColor && tertiaryColor
                ? {
                    color: "custom",
                    customColor: secondaryColor,
                    customHoverColor: tertiaryColor,
                  }
                : {
                    color: "purple-40",
                  })}
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
            className={cn(
              "relative !touch-auto",
              !swiper && "invisible max-h-[320px]",
            )}
            onResize={handleChange}
            onSwiper={handleChange}
          >
            {items.map(item => (
              <SwiperSlide className="!h-auto" key={item.id}>
                <TopPickItem
                  badge={item.qualificationLevel}
                  badgeColor={primaryColor}
                  description={item.description}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  link={item.link}
                  linkTarget={linkTarget}
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

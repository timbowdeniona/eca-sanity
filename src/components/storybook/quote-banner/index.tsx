import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";
import QuoteMarks from "../icons/QuoteMarks";
import QuoteStroke from "../icons/QuoteStroke";

type QuoteBannerProps = {
  variant: "primary" | "secondary";
  quote: string;
  source: string;
  image?: string;
  imageAlt?: string;
} & ComponentProps<"div">;

export const QuoteBanner = ({
  variant,
  quote,
  source,
  image,
  imageAlt,
}: QuoteBannerProps) => {
  return (
    <div className={cn("flex justify-center @container")}>
      <div className="flex w-full px-5 py-6 @4xl:px-10 @4xl:py-12 @cxl:w-[1408px] @cxl:px-0">
        <div
          className={cn(
            "flex text-white grow",
            variant === "primary" && "bg-purple",
            variant === "secondary" && "bg-dark-red",
          )}
        >
          <div className="flex grow flex-row overflow-hidden">
            {image && (
              <div className="hidden aspect-square overflow-hidden @4xl:block @4xl:w-[22%]">
                <Image
                  alt={imageAlt || ""}
                  className="size-full object-cover"
                  height={310}
                  src={image}
                  width={310}
                />
              </div>
            )}
            <div className="relative flex grow px-6 pb-[38px] pt-10 @4xl:py-[55px] @4xl:pl-12 @4xl:pr-[100px] @cmd:w-[350px] @cmd:gap-4 @cmd:px-[60px] @cmd:py-[39px]">
              <div>
                <QuoteStroke
                  className={cn(
                    "absolute bottom-0 -left-[179px] @cmd:left-0 @4xl:-left-[100px] @cmd:top-0 aspect-[378/255] @4xl:aspect-[406/273] h-full w-auto z-10",
                    variant === "primary" && "fill-purple-20",
                    variant === "secondary" && "fill-red",
                  )}
                />
              </div>
              <div className="relative z-20 flex flex-row gap-2">
                <div>
                  <QuoteMarks className="h-4 w-[24.367px] shrink-0" />
                </div>
                <figure className="flex flex-col gap-3">
                  <blockquote>
                    <h3>
                      {quote}
                      &#x201D;
                    </h3>
                  </blockquote>
                  <figcaption>
                    <p>{source}</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBanner;

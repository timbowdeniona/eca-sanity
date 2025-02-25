import type { ComponentProps, CSSProperties } from "react";
import { ArticleItemPlaceholder } from "../article-item/placeholder";
import { cn } from "@/utils/helpers/cn";
import { Placeholder } from "../../placeholder";
import ChevronLeft from "../../icons/ChevronLeft";
import ChevronRight from "../../icons/ChevronRight";

type ArticleCardsPlaceholderProps = {
  className?: string;
  variant?: "primary" | "secondary";
  titlePlacement?: "top" | "left";
  numberOfItems?: number;
  primaryColor?: CSSProperties["color"];
  secondaryColor?: CSSProperties["color"];
} & ComponentProps<"div">;

export const ArticleCardsPlaceholder = ({
  className,
  variant = "primary",
  titlePlacement = "top",
  numberOfItems = 4,
  primaryColor,
}: ArticleCardsPlaceholderProps) => {
  const bgColorClass = {
    primary: "bg-grey text-purple",
    secondary: "bg-purple text-white",
  };
  const divContainerClass = cn(
    "relative wrapper justify-center pt-4 pb-8 md:pb-10 md:pt-5",
    titlePlacement === "top" && "lg:flex-col lg:py-6",
    titlePlacement === "left" && "flex-col lg:flex-row lg:py-12 lg:gap-10",
    primaryColor ? "gap-4 lg:gap-6" : "gap-6",
  );
  const headerContainerClass = cn(
    "flex flex-col gap-2",
    titlePlacement === "left" && "lg:w-1/4 lg:gap-4",
  );

  return (
    <div
      className={cn("flex justify-center", bgColorClass[variant], className)}
    >
      <div className={divContainerClass}>
        <div className={headerContainerClass}>
          <div className="flex flex-col gap-1 md:gap-2">
            <Placeholder
              className={cn(
                "h-8 mb-2",
                titlePlacement === "top" ? "w-48" : "w-2/3",
              )}
            />
            <Placeholder
              className={cn(
                "h-6",
                titlePlacement === "left" ? "w-full" : "w-64",
              )}
            />
          </div>
        </div>
        <div
          className={cn(
            "grid gap-8 md:gap-10",
            titlePlacement === "left" && "lg:w-3/4",
            titlePlacement === "top" && "lg:grid-cols-4",
            titlePlacement === "left" && "lg:grid-cols-3",
          )}
        >
          {Array.from({ length: numberOfItems }, (_, index) => (
            <ArticleItemPlaceholder key={index} triangleColor={primaryColor} />
          ))}
        </div>
        <div className="hidden lg:flex">
          <div className="absolute left-[15px] top-[33%] z-10 flex size-12 flex-col items-center justify-center rounded-none bg-purple-40 p-0">
            <ChevronLeft fill="white" />
          </div>
          <div className="absolute right-[15px] top-[33%] z-10 flex size-12 flex-col items-center justify-center rounded-none bg-purple-40 p-0">
            <ChevronRight fill="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

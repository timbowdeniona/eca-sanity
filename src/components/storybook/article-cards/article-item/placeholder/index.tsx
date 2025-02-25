import type { ComponentProps, CSSProperties } from "react";
import { Placeholder } from "@/components/storybook/placeholder";
import Triangle from "@/components/storybook/icons/Triangle";
import { cn } from "@/utils/helpers/cn";

type ArticleItemPlaceholderProps = {
  triangleColor?: CSSProperties["color"];
} & ComponentProps<"article">;

export const ArticleItemPlaceholder = ({
  triangleColor,
  ...props
}: ArticleItemPlaceholderProps) => {
  return (
    <article
      className="group flex h-full flex-col bg-white"
      style={{ "--triangle-color": triangleColor } as CSSProperties}
      {...props}
    >
      <div className="flex h-full flex-col">
        <div className="relative">
          <div
            className={cn(
              "w-full relative aspect-[16/9]",
              triangleColor &&
                "bg-grey flex flex-row justify-center items-center",
            )}
          >
            {triangleColor ? (
              <>
                <Triangle className="absolute -top-px right-[-2px] h-full w-auto [&>path]:fill-[var(--triangle-color)]" />
                <div className="relative h-[90%] w-auto max-w-[50%]">
                  <Placeholder className="size-full object-contain" />
                </div>
              </>
            ) : (
              <Placeholder className="size-full" />
            )}
          </div>
        </div>
        <div className="flex grow flex-col py-4 pl-6 pr-4">
          <Placeholder
            className={cn(
              "w-full h-4 mb-2",
              triangleColor ? "h-6 mb-4" : "h-4 mb-2",
            )}
          />
          <Placeholder
            className={cn(
              "w-full h-4 mb-2",
              triangleColor ? "h-6 mb-4" : "h-4 mb-2",
            )}
          />
          <Placeholder
            className={cn(
              "w-full h-4 mb-2",
              triangleColor ? "h-6 mb-4" : "h-4 mb-2",
            )}
          />
          <Placeholder className="mb-2 h-4 w-1/2" />
          <Placeholder className="h-4 w-1/3" />
        </div>
      </div>
    </article>
  );
};

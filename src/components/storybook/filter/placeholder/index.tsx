"use client";

import { ComponentProps } from "react";

import { cn } from "@/utils/helpers/cn";
import CheckboxPlaceholder from "../../checkbox/placeholder";
import { Placeholder } from "../../placeholder";

type Props = {
  filterCount?: number;
  optionCount?: number;
} & ComponentProps<"div">;

export const FilterPlaceholder = ({
  className,
  filterCount = 2,
  optionCount = 4,
  ...props
}: Props) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2">
        {[...Array(filterCount).keys()].map(filterIndex => (
          <div
            className={cn("flex flex-col gap-2", className)}
            key={filterIndex}
          >
            <div className="relative flex h-[60px] w-full items-center bg-white/50 py-[10px] pl-6">
              <Placeholder className="h-6 w-[120px]" />
              <Placeholder className="absolute right-4 size-4" />
            </div>
            <div
              className={
                "flex max-h-[577px] flex-col gap-4 overflow-y-auto overflow-x-hidden bg-grey px-5 py-6"
              }
            >
              {[...Array(optionCount).keys()].map(index => (
                <CheckboxPlaceholder key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPlaceholder;

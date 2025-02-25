"use client";

import { ComponentProps } from "react";
import { Placeholder } from "../../placeholder";
import ChevronLeft from "../../icons/ChevronLeft";
import ChevronRight from "../../icons/ChevronRight";

type PlaceholderPaginationProps = {
  pageCount: number;
} & ComponentProps<"div">;

export const PaginationPlaceholder = ({
  pageCount = 4,
  ...props
}: PlaceholderPaginationProps) => {
  return (
    <div className="flex max-w-full items-center justify-center" {...props}>
      <Placeholder className="flex h-12 w-10 items-center justify-center rounded-none bg-white">
        <ChevronLeft className="fill-purple-80 opacity-50" />
        <span className="sr-only">Previous</span>
      </Placeholder>
      <div className="no-scrollbar overflow-x-scroll px-2 xl:overflow-hidden">
        <ul className="flex flex-row gap-2">
          {[...Array(pageCount).keys()].map(index => (
            <Placeholder
              className="flex h-12 w-10 items-center justify-center rounded-none bg-white"
              key={index}
            >
              <Placeholder className="h-4 w-1" />
            </Placeholder>
          ))}
        </ul>
      </div>
      <Placeholder className="flex h-12 w-10 items-center justify-center rounded-none bg-white">
        <ChevronRight className="fill-purple-80 opacity-50" />
        <span className="sr-only">Next</span>
      </Placeholder>
    </div>
  );
};

export default PaginationPlaceholder;

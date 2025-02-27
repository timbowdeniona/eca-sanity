"use client";

import { ComponentProps, useEffect, useState } from "react";

import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";

export type PaginationItem = {
  value: number;
  label: string;
};

type PaginationProps = {
  currentPage: number;
  onPageSelect?: (page: number) => void;
  pages: PaginationItem[];
} & ComponentProps<"div">;

export const Pagination = ({
  currentPage,
  onPageSelect,
  pages,
  ...props
}: PaginationProps) => {
  const maxButtons = 4;
  const [visiblePages, setVisiblePages] = useState<PaginationItem[]>([]);

  useEffect(() => {
    // Calculate the range of pages to display
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + maxButtons - 1, pages.length);
    const visiblePagesRange = pages.slice(startPage - 1, endPage);
    setVisiblePages(visiblePagesRange);
  }, [currentPage, pages]);

  const goToPage = (page: number) => {
    onPageSelect?.(page);
  };

  if (pages.length === 0) {
    return null;
  }

  return (
    <div className="flex max-w-full items-center justify-center" {...props}>
      <button
        className="group flex h-12 w-10 flex-none items-center justify-center border border-cyan-700 bg-white hover:bg-cyan-700 active:bg-cyan-700 disabled:opacity-50 disabled:hover:bg-white"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <ChevronLeft className="fill-cyan-700 group-hover:fill-white group-active:fill-white group-disabled:fill-cyan-800" />
        <span className="sr-only">Previous</span>
      </button>
      <div className="no-scrollbar overflow-x-scroll px-2 xl:overflow-hidden">
        <ul className="flex flex-row gap-2">
          {visiblePages.map(page =>
            currentPage !== page.value ? (
              <li
                className="flex h-12 w-10 cursor-pointer items-center justify-center border border-cyan-700 bg-white font-medium hover:bg-cyan-700 hover:text-white active:bg-cyan-700 active:text-white"
                key={page.value}
                onClick={() => goToPage(page.value)}
              >
                {page.label}
              </li>
            ) : (
              <li
                className="flex h-12 w-10 items-center justify-center bg-cyan-700 font-medium text-white"
                key={page.value}
              >
                {page.label}
              </li>
            ),
          )}
        </ul>
      </div>
      <button
        className="group flex h-12 w-10 flex-none items-center justify-center border border-cyan-700 bg-white hover:bg-cyan-700 active:bg-cyan-700 disabled:opacity-50 disabled:hover:bg-white"
        disabled={currentPage === pages.length}
        onClick={() => goToPage(currentPage + 1)}
      >
        <ChevronRight className="fill-cyan-700 group-hover:fill-white group-active:fill-white group-disabled:fill-cyan-800" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

"use client";

import { ComponentProps, useEffect, useRef, useState } from "react";

import Link from "@/components/base/link";
import ChevronRight from "../icons/ChevronRight";
import ChevronLeft from "../icons/ChevronLeft";
import { cn } from "@/utils/helpers/cn";

type AlphabetTabsProps = {
  activeLetters: string[];
} & ComponentProps<"section">;

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const AlphabetTabs = ({
  activeLetters,
  ...props
}: AlphabetTabsProps) => {
  const alphabetListRef = useRef<HTMLDivElement>(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [scrollIntervalId, setScrollIntervalId] =
    useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clean up interval on component unmount
    return () => {
      if (scrollIntervalId) {
        clearInterval(scrollIntervalId);
      }
    };
  }, [scrollIntervalId]);

  const startScrolling = (direction: "left" | "right") => {
    const intervalId = setInterval(() => {
      scrollAlphabetList(direction);
    }, 90);

    setScrollIntervalId(intervalId);
  };

  const stopScrolling = () => {
    if (scrollIntervalId) {
      clearInterval(scrollIntervalId);
      setScrollIntervalId(null);
    }
  };

  const scrollAlphabetList = (direction: "left" | "right") => {
    if (alphabetListRef.current) {
      const list = alphabetListRef.current;
      const scrollAmount = 90;

      if (direction === "right") {
        list.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        list.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }

      // Check if the left chevron should be shown or hidden
      setShowLeftChevron(list.scrollLeft > 0);
    }
  };

  const handleScroll = () => {
    if (alphabetListRef.current) {
      const { scrollLeft } = alphabetListRef.current;

      // If we have scrolled past the start, show the left chevron
      setShowLeftChevron(scrollLeft > 0);
    }
  };

  const preventContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  return (
    <section className="flex w-full flex-col items-center bg-grey" {...props}>
      <div className="wrapper items-start py-6 md:py-8 lg:py-12 xl:items-center">
        <div className="h-[2px] w-full bg-white" />
        <div className="flex max-w-full items-center justify-center gap-2 px-2">
          {showLeftChevron && (
            <button
              className={cn(
                "group flex h-12 w-10 flex-none items-center justify-center border select-none",
                "border-purple-80 bg-white hover:bg-purple-80 active:bg-purple xl:hidden",
              )}
              onContextMenu={preventContextMenu}
              onMouseDown={() => startScrolling("left")}
              onMouseUp={stopScrolling}
              onTouchEnd={stopScrolling}
              onTouchStart={() => startScrolling("left")}
              role="button"
            >
              <ChevronLeft className="fill-purple group-active:fill-white" />
              <span className="sr-only">Scroll left</span>
            </button>
          )}
          <div
            className="no-scrollbar overflow-x-scroll px-2 py-4 xl:overflow-hidden"
            onScroll={handleScroll}
            ref={alphabetListRef}
          >
            <ul className="flex flex-row gap-2">
              {letters.map(letter => (
                <li key={letter}>
                  {activeLetters?.includes(letter) ? (
                    <Link
                      className="flex h-12 w-10 items-center justify-center border border-purple-80 bg-white font-medium hover:bg-purple-80 active:bg-purple active:text-white"
                      href={`#${letter}`}
                    >
                      {letter}
                    </Link>
                  ) : (
                    <span className="flex h-12 w-10 items-center justify-center opacity-50">
                      {letter}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            className={cn(
              "group flex h-12 w-10 flex-none items-center justify-center border select-none",
              "border-purple-80 bg-white hover:bg-purple-80 active:bg-purple xl:hidden",
            )}
            onContextMenu={preventContextMenu}
            onMouseDown={() => startScrolling("right")}
            onMouseUp={stopScrolling}
            onTouchEnd={stopScrolling}
            onTouchStart={() => startScrolling("right")}
            role="button"
          >
            <ChevronRight className="fill-purple group-active:fill-white" />
            <span className="sr-only">Scroll right</span>
          </button>
        </div>
        <div className="h-[2px] w-full bg-white" />
      </div>
    </section>
  );
};

export default AlphabetTabs;

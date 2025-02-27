"use client";

import { ComponentProps, useEffect, useRef, useState } from "react";

import Link from "@/components/base/link";
import ChevronRight from "../icons/ChevronRight";
import ChevronLeft from "../icons/ChevronLeft";
import { cn } from "@/utils/helpers/cn";

type AlphabetTabsProps = {
  activeLetters: string[];
  onLetterSelect?: (letter: string) => void;
  selectedLetter?: string;
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
  onLetterSelect,
  selectedLetter = "",
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

  const handleLetterClick = (letter: string) => {
    if (onLetterSelect && activeLetters.includes(letter)) {
      if (selectedLetter === letter) {
        onLetterSelect("");
      } else {
        onLetterSelect(letter);
      }
    }
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
                "border-cyan-700 bg-white hover:bg-cyan-700 active:bg-cyan-700 xl:hidden",
              )}
              onContextMenu={preventContextMenu}
              onMouseDown={() => startScrolling("left")}
              onMouseUp={stopScrolling}
              onTouchEnd={stopScrolling}
              onTouchStart={() => startScrolling("left")}
              role="button"
            >
              <ChevronLeft className="fill-cyan-700 group-hover:fill-white group-active:fill-white" />
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
                  <button
                    className={cn(
                      "flex h-12 w-10 items-center justify-center border",
                      activeLetters.includes(letter)
                        ? selectedLetter === letter
                          ? "bg-cyan-700 text-white border-cyan-700"
                          : "bg-white text-cyan-900 border-cyan-700 hover:bg-cyan-700 hover:text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200",
                    )}
                    disabled={!activeLetters.includes(letter)}
                    onClick={() => handleLetterClick(letter)}
                  >
                    {letter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={cn(
              "group flex h-12 w-10 flex-none items-center justify-center border select-none",
              "border-cyan-700 bg-white hover:bg-cyan-700 active:bg-cyan-700 xl:hidden",
            )}
            onContextMenu={preventContextMenu}
            onMouseDown={() => startScrolling("right")}
            onMouseUp={stopScrolling}
            onTouchEnd={stopScrolling}
            onTouchStart={() => startScrolling("right")}
            role="button"
          >
            <ChevronRight className="fill-cyan-700 group-hover:fill-white group-active:fill-white" />
            <span className="sr-only">Scroll right</span>
          </button>
        </div>
        <div className="h-[2px] w-full bg-white" />
      </div>
    </section>
  );
};

export default AlphabetTabs;

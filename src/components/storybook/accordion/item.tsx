"use client";

import type { CSSProperties, FC } from "react";
import { useEffect, useState } from "react";
import isString from "lodash/isString";

import type { SanityRichText } from "@/sanity/utils/richtext";
import RichText from "@/components/sanity/richtext";
import { cn } from "@/utils/helpers/cn";

export type ItemProps = {
  content: string | SanityRichText;
  isActive: boolean;
  onToggle: () => void;
  title: string;
};

const AccordionItem: FC<ItemProps> = ({
  content,
  isActive,
  onToggle,
  title,
}) => {
  const [height, setHeight] = useState(0);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.scrollHeight);
    }
  }, [ref]);

  return (
    <div>
      <dt
        className={cn(
          "flex flex-row items-center px-4 py-[18px] text-base font-semibold transition-colors duration-300 cursor-pointer select-none",
          isActive
            ? "bg-purple text-white"
            : "group/nav-link bg-grey [.page-nested_&]:bg-white text-neutral hover:bg-purple [.page-nested_&:hover]:bg-purple hover:text-white",
        )}
        onClick={onToggle}
      >
        <span className="grow">{title}</span>
        {isActive ? (
          <svg
            fill="none"
            height="4"
            viewBox="0 0 17 4"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.796875 0.148438H16.7969V3.34844H0.796875V0.148438Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            className="-translate-y-px"
            fill="none"
            height="17"
            viewBox="0 0 17 17"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-purple transition-colors duration-300 group-hover/nav-link:fill-white"
              clipRule="evenodd"
              d="M7.19688 10.3484V16.75H10.3969V10.3484H16.7969V7.14844H10.3969V0.75H7.19688V7.14844H0.796875V10.3484H7.19688Z"
              fillRule="evenodd"
            />
          </svg>
        )}
      </dt>
      <dd
        className={cn(
          "h-full overflow-hidden transition-[max-height,opacity,padding] duration-300 border border-t-0 border-gray-300",
          isActive
            ? "max-h-[var(--accordion-item-height)] opacity-100"
            : "max-h-0 opacity-0",
        )}
        style={
          {
            "--accordion-item-height": `${height}px`,
          } as CSSProperties
        }
      >
        <div className="bg-white p-4" ref={setRef}>
          {isString(content) ? <p>{}</p> : <RichText value={content} />}
        </div>
      </dd>
    </div>
  );
};

export default AccordionItem;

"use client";

import type { FC } from "react";
import { useState } from "react";

import type { ItemProps } from "./item";
import AccordionItem from "./item";
import { cn } from "@/utils/helpers/cn";

type Props = {
  className?: string;
  items: Pick<ItemProps, "content" | "title">[];
};

const Accordion: FC<Props> = ({ className, items }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems: number[]) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item: number) => item !== index)
        : [...prevOpenItems, index],
    );
  };

  return (
    <div className={cn("@container", className)}>
      <div
        className={cn(
          "wrapper py-2 [.page-nested_&]:px-0 [.is-first_&]:pt-0 [.is-last_&]:pb-0",
        )}
      >
        <dl className={cn("flex flex-col w-full gap-2")}>
          {(items ?? []).map((item, key: number) => (
            <AccordionItem
              content={item.content}
              isActive={openItems.includes(key)}
              key={key}
              onToggle={() => toggleItem(key)}
              title={item.title}
            />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Accordion;

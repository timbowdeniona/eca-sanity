import { type FC } from "react";
import { cn } from "@/utils/helpers/cn";
import {
  getBackgroundColour,
  getColumnClass,
  getColumnGap,
  getJustifyContent,
  getPaddingHorizontal,
  getPaddingVertical,
} from "@/utils/helpers/getTailwindClasses";

import type { SanityTwoColumn } from "@/sanity/schema/presentation/sectionType/sections/twoColumn";
import type { SanitySection } from "@/sanity/schema/presentation/pageType";

import Section from "../section";

interface Props {
  twoColumn: SanityTwoColumn;
}

const TwoColumnSection: FC<Props> = ({ twoColumn }) => {
  const leftColumnSpan = twoColumn.leftColumnSpan;
  const rightColumnSpan = 12 - leftColumnSpan;
  const firstColumn = twoColumn?.columns?.[0] ?? [];
  const secondColumn = twoColumn?.columns?.[1] ?? [];

  const processColumn = (data: SanitySection[]) => {
    return data
      ?.filter((section: SanitySection) => !!section)
      ?.map((section: SanitySection, key: number) => {
        return <Section key={key} section={section} />;
      });
  };

  return (
    <div className="wrapper px-0 @container">
      <div
        className={cn(
          "grid grid-cols-1 @cmd:grid-cols-12",
          getColumnGap(twoColumn.gapSize || 0),
          getPaddingHorizontal(twoColumn.rowPaddingHorizontal),
          getPaddingVertical(twoColumn.rowPaddingVertical),
        )}
      >
        <div
          className={cn(
            "flex flex-col",
            getJustifyContent(firstColumn.verticalAlignment),
            getColumnClass(leftColumnSpan),
            getPaddingHorizontal(firstColumn.paddingHorizontal),
            getPaddingVertical(firstColumn.paddingVertical),
            getBackgroundColour(firstColumn.backgroundColour),
          )}
        >
          {processColumn(firstColumn?.sections)}
        </div>
        <div
          className={cn(
            "flex flex-col",
            getJustifyContent(secondColumn.verticalAlignment),
            getColumnClass(rightColumnSpan),
            getPaddingHorizontal(secondColumn.paddingHorizontal),
            getPaddingVertical(secondColumn.paddingVertical),
            getBackgroundColour(secondColumn.backgroundColour),
          )}
        >
          {processColumn(secondColumn?.sections)}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;

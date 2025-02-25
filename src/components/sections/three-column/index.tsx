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

import type {
  SanityThreeColumn,
  SanityThreeColumnVariant,
} from "@/sanity/schema/presentation/sectionType/sections/threeColumn";
import type { SanitySection } from "@/sanity/schema/presentation/pageType";

import Section from "../section";

interface Props {
  threeColumn: SanityThreeColumn;
}

const ThreeColumnSection: FC<Props> = ({ threeColumn }) => {
  const { variant, columns, gapSize } = threeColumn;

  const getColumnSpans = (variant: SanityThreeColumnVariant): number[] => {
    switch (variant) {
      case "4-4-4":
        return [4, 4, 4];
      case "6-3-3":
        return [6, 3, 3];
      case "3-6-3":
        return [3, 6, 3];
      case "3-3-6":
        return [3, 3, 6];
      default:
        return [4, 4, 4];
    }
  };

  const columnSpans = getColumnSpans(variant);

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
          "grid grid-cols-1 @4xl:grid-cols-12",
          getColumnGap(gapSize || 0),
          getPaddingHorizontal(threeColumn.rowPaddingHorizontal),
          getPaddingVertical(threeColumn.rowPaddingVertical),
        )}
      >
        {columns.map((column, index) => (
          <div
            className={cn(
              "flex flex-col",
              getJustifyContent(column.verticalAlignment),
              getColumnClass(columnSpans[index]),
              getPaddingHorizontal(column.paddingHorizontal),
              getPaddingVertical(column.paddingVertical),
              getBackgroundColour(column.backgroundColour),
            )}
            key={index}
          >
            {processColumn(column.sections)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeColumnSection;

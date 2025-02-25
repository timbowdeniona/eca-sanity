import { type FC } from "react";
import { cn } from "@/utils/helpers/cn";
import {
  getBackgroundColour,
  getColumnGap,
  getJustifyContent,
  getPaddingHorizontal,
  getPaddingVertical,
} from "@/utils/helpers/getTailwindClasses";

import type { SanityFourColumn } from "@/sanity/schema/presentation/sectionType/sections/fourColumn";
import type { SanitySection } from "@/sanity/schema/presentation/pageType";

import Section from "../section";

interface Props {
  fourColumn: SanityFourColumn;
}

const FourColumnSection: FC<Props> = ({ fourColumn }) => {
  const { columns, gapSize } = fourColumn;

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
          getColumnGap(gapSize || 0),
          getPaddingHorizontal(fourColumn.rowPaddingHorizontal),
          getPaddingVertical(fourColumn.rowPaddingVertical),
        )}
      >
        {columns.map((column, index) => (
          <div
            className={cn(
              "@csm:col-span-6 @cmd:col-span-3",
              "flex flex-col",
              getJustifyContent(column.verticalAlignment),
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

export default FourColumnSection;

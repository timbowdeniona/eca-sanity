import type { FC } from "react";
import type { SanityTwoColumn } from "@/sanity/schema/presentation/sectionType/sections/twoColumn";
import { cn } from "@/utils/helpers/cn";
import {
  getBackgroundColour,
  getColumnClass,
  getColumnGap,
  getJustifyContent,
  getPaddingHorizontal,
  getPaddingVertical,
} from "@/utils/helpers/getTailwindClasses";
import { stegaClean } from "@sanity/client/stega";
import { createDataAttribute } from "@sanity/visual-editing";
import Section from "../section";
import { apiVersion, dataset, projectId } from "@/sanity/env";

interface Props {
  section: SanityTwoColumn;
  documentId?: string;
  documentType?: string;
}

const TwoColumnSection: FC<Props> = ({ section, documentId, documentType }) => {
  if (!section) {
    return null;
  }

  const leftColumnSpan = section.leftColumnSpan ?? 6;
  const rightColumnSpan = 12 - leftColumnSpan;
  const firstColumn = section.columns?.[0] ?? {};
  const secondColumn = section.columns?.[1] ?? {};

  const createDataAttributeConfig = {
    apiVersion,
    baseUrl: "/studio",
    dataset,
    projectId,
  };

  const processColumn = (data: any = [], columnIndex: number) => {
    if (!data) {
      return null;
    }

    if (!Array.isArray(data)) {
      if (data && typeof data === "object" && data._type) {
        // Apply stegaClean to individual section
        const cleanedSection = stegaClean(data);
        return <Section section={cleanedSection} />;
      }
      return null;
    }

    if (data.length === 0) {
      return null;
    }

    return data.map((sectionItem: any, key: number) => {
      if (!sectionItem) {
        return null;
      }

      // Apply stegaClean to each section item
      const cleanedSection = stegaClean(sectionItem);

      // Create path notation for drag and drop within the column
      const pathNotation = cleanedSection?._key
        ? `columns[${columnIndex}].sections[_key=="${cleanedSection._key}"]`
        : `columns[${columnIndex}].sections[${key}]`;

      const dataAttributes =
        createDataAttributeConfig && documentId && documentType && section._key
          ? {
              "data-sanity": createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: `sections[_key=="${section._key}"].${pathNotation}`,
              }).toString(),
            }
          : { "data-path": pathNotation };

      return (
        <div
          key={cleanedSection?._key || key}
          {...dataAttributes}
          className="section-item relative"
        >
          <Section key={key} section={cleanedSection} />
        </div>
      );
    });
  };

  // Create column container data attributes for column drag and drop
  const getColumnAttributes = (columnIndex: number) => {
    if (
      createDataAttributeConfig &&
      documentId &&
      documentType &&
      section._key
    ) {
      return {
        "data-sanity": createDataAttribute({
          ...createDataAttributeConfig,
          id: documentId,
          type: documentType,
          path: `sections[_key=="${section._key}"].columns[${columnIndex}]`,
        }).toString(),
      };
    }

    return {
      "data-column-index": columnIndex,
    };
  };

  // Create wrapper for columns array to enable drag and drop of columns
  const getColumnsArrayAttributes = () => {
    if (
      createDataAttributeConfig &&
      documentId &&
      documentType &&
      section._key
    ) {
      return {
        "data-sanity": createDataAttribute({
          ...createDataAttributeConfig,
          id: documentId,
          type: documentType,
          path: `sections[_key=="${section._key}"].columns`,
        }).toString(),
      };
    }

    return {};
  };

  return (
    <div className="wrapper px-0 @container">
      <div
        className={cn(
          "grid grid-cols-1 @cmd:grid-cols-12",
          getColumnGap(section.gapSize || 0),
          getPaddingHorizontal(section.rowPaddingHorizontal),
          getPaddingVertical(section.rowPaddingVertical),
        )}
        {...getColumnsArrayAttributes()}
      >
        <div
          className={cn(
            "flex flex-col relative",
            getJustifyContent(firstColumn.verticalAlignment),
            getColumnClass(leftColumnSpan),
            getPaddingHorizontal(firstColumn.paddingHorizontal),
            getPaddingVertical(firstColumn.paddingVertical),
            getBackgroundColour(firstColumn.backgroundColour),
          )}
          {...getColumnAttributes(0)}
        >
          <div className="column-content">
            {processColumn(firstColumn?.sections, 0)}
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col relative",
            getJustifyContent(secondColumn.verticalAlignment),
            getColumnClass(rightColumnSpan),
            getPaddingHorizontal(secondColumn.paddingHorizontal),
            getPaddingVertical(secondColumn.paddingVertical),
            getBackgroundColour(secondColumn.backgroundColour),
          )}
          {...getColumnAttributes(1)}
        >
          <div className="column-content">
            {processColumn(secondColumn?.sections, 1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;

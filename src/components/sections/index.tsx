"use client";

import type { FC, ReactNode } from "react";
import { stegaClean } from "@sanity/client/stega";

import type { SanitySection } from "@/sanity/schema/presentation/pageType";
import { cn } from "@/utils/helpers/cn";
import Section from "./section";
import { createDataAttribute } from "@sanity/visual-editing";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export type Props = {
  children?: (section: SanitySection) => ReactNode;
  sections?: SanitySection[];
  documentId?: string;
  documentType?: string;
};

const Sections: FC<Props> = ({
  children,
  sections,
  documentId,
  documentType,
}) => {
  const config = {
    projectId,
    dataset,
    apiVersion,
    baseUrl: "/studio",
  };

  // Ensure sections is always an array
  const sectionsArray = Array.isArray(sections) ? sections : [];

  // Apply stegaClean to all sections to prevent conflicts
  const cleanSections = stegaClean(sectionsArray);

  return (
    <div className="sections-container">
      {cleanSections.map((section, index) => {
        const pathNotation = section._key
          ? `sections[_key=="${section._key}"]`
          : `sections[${index}]`;

        const sectionDataAttribute =
          documentId && documentType
            ? createDataAttribute({
                ...config,
                id: documentId,
                type: documentType,
                path: pathNotation,
              }).toString()
            : undefined;

        return (
          <div
            key={section?._key || section?._id || index}
            data-sanity={sectionDataAttribute}
            className="section-wrapper"
            style={{
              position: "relative",
              margin: "10px 0",
            }}
          >
            <Section
              className={cn(
                index === 0 && "is-first",
                index === (cleanSections?.length ?? 0) - 1 && "is-last",
                index % 2 === 0 ? "is-odd" : "is-even",
              )}
              id={section?.sectionMeta?.id}
              section={sectionsArray[index]}
            >
              {children}
            </Section>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;

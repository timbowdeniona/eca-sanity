"use client";

import type { FC, ReactNode } from "react";
import type { SanitySection } from "@/sanity/schema/presentation/pageType";
import type { SanityDocument } from "@sanity/client";

import { createDataAttribute, useOptimistic } from "@sanity/visual-editing";
import { cn } from "@/utils/helpers/cn";
import Section from "./section";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export type SectionsProps = {
  children?: (section: SanitySection) => ReactNode;
  documentId: string;
  documentType: string;
  sections?: SanitySection[];
};

const createDataAttributeConfig = {
  apiVersion,
  baseUrl: "/studio",
  dataset,
  projectId,
};

const Sections: FC<SectionsProps> = ({
  children,
  documentId,
  documentType,
  sections: initialSections,
}) => {
  // Use optimistic updates for real-time editing
  const sections = useOptimistic<SanitySection[] | undefined, SanityDocument>(
    initialSections,
    (currentSections, action) => {
      if (action.id === documentId && action.document.sections) {
        return action.document.sections.map(
          (section: SanitySection) =>
            currentSections?.find(
              (s: SanitySection) =>
                s._key === section._key || s._id === section._id,
            ) || section,
        );
      }
      return currentSections;
    },
  );

  if (!sections?.length) {
    return null;
  }

  return (
    <div
      data-sanity={createDataAttribute({
        ...createDataAttributeConfig,
        id: documentId,
        type: documentType,
        path: "sections",
      }).toString()}
    >
      <div>
        {sections.map(section => {
          const DragHandle = ({ children }: { children: React.ReactNode }) => (
            <div
              data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: `sections[_key=="${section._key}"]`,
              }).toString()}
              style={{
                position: "relative",
              }}
            >
              {children}
            </div>
          );

          return (
            <DragHandle key={section._key}>
              <Section
                className={cn(
                  sections.indexOf(section) === 0 && "is-first",
                  sections.indexOf(section) === (sections?.length ?? 0) - 1 &&
                    "is-last",
                  sections.indexOf(section) % 2 === 0 ? "is-odd" : "is-even",
                )}
                documentId={documentId}
                documentType={documentType}
                id={section?.sectionMeta?.id}
                section={section}
              >
                {children}
              </Section>
            </DragHandle>
          );
        })}
      </div>
    </div>
  );
};

export default Sections;

"use client";

import type { FC, ReactNode } from "react";
import type { SanitySection } from "@/sanity/schema/presentation/pageType";
import type { SanityDocument } from "@sanity/client";

import { createDataAttribute, useOptimistic } from "@sanity/visual-editing";
import Sections from "./index";
import { apiVersion, dataset, projectId } from "@/sanity/env";

type Props = {
  documentId: string;
  documentType: string;
  sections?: SanitySection[];
  children?: (section: SanitySection) => ReactNode;
};

export const SectionParent: FC<Props> = ({
  documentId,
  documentType,
  sections: initialSections,
  children,
}) => {
  const config = {
    projectId,
    dataset,
    apiVersion,
    baseUrl: "/studio",
  };

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

  // Create the data attribute for the parent container
  const dataAttribute = createDataAttribute({
    ...config,
    id: documentId,
    type: documentType,
    path: "sections",
  }).toString();

  return (
    <div data-sanity={dataAttribute}>
      <Sections
        sections={sections}
        documentId={documentId}
        documentType={documentType}
      >
        {children}
      </Sections>
    </div>
  );
};

export default SectionParent;

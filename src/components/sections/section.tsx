"use client";

import type { FC, ReactNode } from "react";
import { useMemo } from "react";
import dynamic from "next/dynamic";

import type { SanitySection } from "@/sanity/schema/presentation/pageType";
import { cn } from "@/utils/helpers/cn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionComponents: Record<string, any> = {
  accordion: dynamic(() => import("./accordion")),
  articleCards: dynamic(() => import("./article-cards")),
  articleList: dynamic(() => import("./article-list")),
  codeBlock: dynamic(() => import("./code-block")),
  contactUs: dynamic(() => import("./contact-us")),
  cta: dynamic(() => import("./cta")),
  embed: dynamic(() => import("./embed")),
  featurePromo: dynamic(() => import("./feature-promo")),
  fourColumn: dynamic(() => import("./four-column")),
  hero: dynamic(() => import("./hero")),
  imageBlock: dynamic(() => import("./image-block")),
  keyFacts: dynamic(() => import("./key-facts")),
  masthead: dynamic(() => import("./masthead")),
  promoTextCards: dynamic(() => import("./promo-text-cards")),
  quickLinks: dynamic(() => import("./quick-links")),
  quoteBanner: dynamic(() => import("./quote-banner")),
  spacer: dynamic(() => import("./spacer")),
  textAndImage: dynamic(() => import("./text-and-image")),
  threeColumn: dynamic(() => import("./three-column")),
  twoColumn: dynamic(() => import("./two-column")),
  videoCards: dynamic(() => import("./video-cards")),
};

export type SectionProps = {
  children?: (section: SanitySection) => ReactNode;
  className?: string;
  documentId?: string;
  documentType?: string;
  id?: string;
  section: SanitySection;
};

const Section: FC<SectionProps> = ({
  children,
  className,
  documentId,
  documentType,
  id,
  section,
  ...props
}) => {
  const Component = useMemo(() => {
    const type = section?._type;
    return type ? sectionComponents[type] : null;
  }, [section]);

  if (!Component) {
    return null;
  }

  return (
    <section
      className={cn("section", `section-${section?._type}`, className)}
      data-sanity={section?._type}
      id={id}
      {...props}
    >
      {children ? (
        children(section)
      ) : (
        <Component
          documentId={documentId}
          documentType={documentType}
          section={section}
        />
      )}
    </section>
  );
};

export default Section;

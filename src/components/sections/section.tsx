"use client";

import type { FC, ReactNode } from "react";
import dynamic from "next/dynamic";

import type { SanitySection } from "@/sanity/schema/presentation/pageType";
import type { SanityAccordion } from "@/sanity/schema/presentation/sectionType/sections/accordion";
import type { SanityArticleCards } from "@/sanity/schema/presentation/sectionType/sections/articleCards";
import type { SanityArticleList } from "@/sanity/schema/presentation/sectionType/sections/articleList";
import type { SanityCards } from "@/sanity/schema/presentation/sectionType/sections/cards";
import type { SanityCodeBlock } from "@/sanity/schema/presentation/sectionType/sections/codeBlock";
import type { SanityContactUs } from "@/sanity/schema/presentation/sectionType/sections/contactUs";
import type { SanityCta } from "@/sanity/schema/presentation/sectionType/sections/cta";
import type { SanityEmbed } from "@/sanity/schema/presentation/sectionType/sections/embed";
import type { SanityFeaturePromo } from "@/sanity/schema/presentation/sectionType/sections/featurePromo";
import type { SanityFourColumn } from "@/sanity/schema/presentation/sectionType/sections/fourColumn";
import type { SanityHero } from "@/sanity/schema/presentation/sectionType/sections/hero";
import type { SanityImageBlock } from "@/sanity/schema/presentation/sectionType/sections/imageBlock";
import type { SanityKeyFacts } from "@/sanity/schema/presentation/sectionType/sections/keyFacts";
import type { SanityMasthead } from "@/sanity/schema/presentation/sectionType/sections/masthead";
import type { SanityQuickLinks } from "@/sanity/schema/presentation/sectionType/sections/quickLinks";
import type { SanityQuoteBanner } from "@/sanity/schema/presentation/sectionType/sections/quoteBanner";
import type { SanityPromoTextCards } from "@/sanity/schema/presentation/sectionType/sections/promoTextCards";
import type { SanitySpacer } from "@/sanity/schema/presentation/sectionType/sections/spacer";
import type { SanityTextAndImage } from "@/sanity/schema/presentation/sectionType/sections/textAndImage";
import type { SanityTextBlock } from "@/sanity/schema/presentation/sectionType/sections/textBlock";
import type { SanityThreeColumn } from "@/sanity/schema/presentation/sectionType/sections/threeColumn";
import type { SanityTwoColumn } from "@/sanity/schema/presentation/sectionType/sections/twoColumn";
import type { SanityVideoCards } from "@/sanity/schema/presentation/sectionType/sections/videoCards";
// Above the fold sections must be statically imported
import HeroSection from "./hero";
import MastheadSection from "./masthead";
import { cn } from "@/utils/helpers/cn";

// Sections that are most likely below the fold must be dyamically imported
const AccordionSection = dynamic(() => import("./accordion"));
const ArticleCardsSection = dynamic(() => import("./article-cards"));
const ArticleListSection = dynamic(() => import("./article-list"));
const CardsSection = dynamic(() => import("./cards"));
const CodeBlockSection = dynamic(() => import("./code-block"));
const ContactUsSection = dynamic(() => import("./contact-us"));
const CtaSection = dynamic(() => import("./cta"));
const EmbedSection = dynamic(() => import("./embed"));
const FeaturePromoSection = dynamic(() => import("./feature-promo"));
const FourColumnSection = dynamic(() => import("./four-column"));
const ImageBlockSection = dynamic(() => import("./image-block"));
const KeyFactsSection = dynamic(() => import("./key-facts"));
const QuickLinksSection = dynamic(() => import("./quick-links"));
const QuoteBannerSection = dynamic(() => import("./quote-banner"));
const PromoTextCardsSection = dynamic(() => import("./promo-text-cards"));
const SpacerSection = dynamic(() => import("./spacer"));
const TextAndImageSection = dynamic(() => import("./text-and-image"));
const TextBlock = dynamic(() => import("./text-block"));
const ThreeColumnSection = dynamic(() => import("./three-column"));
const TwoColumnSection = dynamic(() => import("./two-column"));
const VideoCardsSection = dynamic(() => import("./video-cards"));

type Props = {
  children?: (section: SanitySection) => ReactNode;
  id?: string;
  className?: string;
  section: SanitySection;
};

const Section: FC<Props> = ({ children, className, id, section }) => {
  return (
    <section className={cn(className)} id={id}>
      {(() => {
        switch (section?._type) {
          case "accordion":
            return <AccordionSection section={section as SanityAccordion} />;
          case "articleCards":
            return (
              <ArticleCardsSection section={section as SanityArticleCards} />
            );
          case "articleList":
            return (
              <ArticleListSection section={section as SanityArticleList} />
            );
          case "cards":
            return <CardsSection section={section as SanityCards} />;
          case "codeBlock":
            return <CodeBlockSection section={section as SanityCodeBlock} />;
          case "contactUs":
            return <ContactUsSection section={section as SanityContactUs} />;
          case "cta":
            return <CtaSection section={section as SanityCta} />;
          case "embed":
            return <EmbedSection section={section as SanityEmbed} />;
          case "featurePromo":
            return (
              <FeaturePromoSection section={section as SanityFeaturePromo} />
            );
          case "fourColumn":
            return (
              <FourColumnSection fourColumn={section as SanityFourColumn} />
            );
          case "hero":
            return <HeroSection section={section as SanityHero} />;
          case "imageBlock":
            return <ImageBlockSection section={section as SanityImageBlock} />;
          case "keyFacts":
            return <KeyFactsSection section={section as SanityKeyFacts} />;
          case "masthead":
            return <MastheadSection section={section as SanityMasthead} />;
          case "promoTextCards":
            return (
              <PromoTextCardsSection
                section={section as SanityPromoTextCards}
              />
            );
          case "quoteBanner":
            return (
              <QuoteBannerSection section={section as SanityQuoteBanner} />
            );
          case "quickLinks":
            return <QuickLinksSection section={section as SanityQuickLinks} />;
          case "spacer":
            return <SpacerSection section={section as SanitySpacer} />;
          case "textAndImage":
            return (
              <TextAndImageSection section={section as SanityTextAndImage} />
            );
          case "textBlock":
            return <TextBlock section={section as SanityTextBlock} />;
          case "threeColumn":
            return (
              <ThreeColumnSection threeColumn={section as SanityThreeColumn} />
            );
          case "twoColumn":
            return <TwoColumnSection twoColumn={section as SanityTwoColumn} />;
          case "videoCards":
            return <VideoCardsSection section={section as SanityVideoCards} />;
          default:
            return children?.(section) ?? <></>;
        }
      })()}
    </section>
  );
};

export default Section;

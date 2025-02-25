import type { FC } from "react";

import type { SanityQuoteBanner } from "@/sanity/schema/presentation/sectionType/sections/quoteBanner";
import QuoteBanner from "@/components/storybook/quote-banner";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityQuoteBanner;
};
const QuoteBannerSection: FC<Props> = ({ section }) => (
  <QuoteBanner
    image={urlForImage(section.image?.asset) ?? ""}
    imageAlt={section.image?.alt ?? section.heading}
    quote={section.content}
    source={section.subtitle}
    variant={section.variant}
  />
);

export default QuoteBannerSection;

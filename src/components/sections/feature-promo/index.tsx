import { type FC, useMemo } from "react";

import type { SanityFeaturePromo } from "@/sanity/schema/presentation/sectionType/sections/featurePromo";
import FeaturePromo from "@/components/storybook/feature-promo";
import RichText from "@/components/sanity/richtext";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityFeaturePromo;
};
const FeaturePromoSection: FC<Props> = ({ section }) => {
  /**
   * Alt text based on the media type.
   */
  const altText = useMemo(() => {
    const fallback = section.heading;

    if (section.mediaType === "image") {
      return section.image?.alt || fallback;
    }

    if (section.mediaType === "youtube-embed") {
      return section.youtubeEmbed?.alt || fallback;
    }

    return fallback;
  }, [section]);

  return (
    <div className="flex w-full justify-center bg-grey px-5 py-6 @container xl:px-0">
      <FeaturePromo
        alt={altText}
        className="mx-auto w-full lg:max-w-[1126px] xl:w-[1165px]"
        description={<RichText value={section.content} />}
        heading={section.heading}
        image={urlForImage(section.image?.asset) ?? ""}
        link={section.buttons?.[0].link?.url ?? "/"}
        linkTarget={
          section.buttons?.[0].link?.openInNewTab ? "_blank" : undefined
        }
        linkText={section.buttons?.[0].link?.title ?? ""}
        mediaPosition={section.mediaPosition || "right"}
        mediaType={section.mediaType || "none"}
        variant={section.variant}
        youtubeEmbedUrl={section.youtubeEmbed?.url}
      />
    </div>
  );
};

export default FeaturePromoSection;

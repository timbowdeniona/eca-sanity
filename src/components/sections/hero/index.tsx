import type { FC } from "react";
import { useMemo } from "react";
import fromPairs from "lodash/fromPairs";

import type { SanityHero } from "@/sanity/schema/presentation/sectionType/sections/hero";
import type { Screen } from "@/sanity/schema/information/imageSet";
import { Hero } from "@/components/storybook/hero";
import RichText from "@/components/sanity/richtext";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityHero;
};

const HeroSection: FC<Props> = ({ section }) => {
  const { image, xl, lg, md, sm } = useMemo(
    () => ({
      image: urlForImage(section.image?.default.asset) ?? "",
      ...(fromPairs(
        (section.image?.screens ?? []).map(({ screen, image }) => [
          screen,
          urlForImage(image?.asset) ?? "",
        ]),
      ) as Record<Screen, string>),
    }),
    [section.image],
  );
  const [button] = section.buttons ?? [];

  return (
    <Hero
      cta={button?.link?.title}
      ctaLink={button?.link?.url}
      ctaTarget={button?.openInNewTab ? "_blank" : undefined}
      image={image}
      imageAlt={section.title}
      imageLg={lg}
      imageMd={md}
      imageSm={sm}
      imageXl={xl}
      variant={section.variant}
    >
      <RichText value={section.content ?? []} />
    </Hero>
  );
};

export default HeroSection;

import type { FC } from "react";
import { useMemo } from "react";
import fromPairs from "lodash/fromPairs";

import type { SanityMasthead } from "@/sanity/schema/presentation/sectionType/sections/masthead";
import type { Screen } from "@/sanity/schema/information/imageSet";
import { Masthead } from "@/components/storybook/masthead";
import RichText from "@/components/sanity/richtext";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityMasthead;
};

const MastheadSection: FC<Props> = ({ section }) => {
  const { image, xl, lg, md, sm } = useMemo(
    () => ({
      image: urlForImage(section.image?.default?.asset) ?? "",
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
    <Masthead
      alignment={section.alignment}
      cta={button?.link?.title}
      ctaLink={button?.link?.url}
      ctaTarget={button?.openInNewTab ? "_blank" : undefined}
      image={image}
      imageLg={lg}
      imageMd={md}
      imageSm={sm}
      imageXl={xl}
      mediaAlt={section.title}
      mediaType={section.mediaType || "image"}
      mode={section.mode}
      variant={section.variant}
      videoUrl={section.videoUrl?.url}
    >
      <RichText value={section.content ?? []} />
    </Masthead>
  );
};

export default MastheadSection;

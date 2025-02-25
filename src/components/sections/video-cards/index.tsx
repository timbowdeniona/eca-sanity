import type { FC } from "react";

import type { SanityVideoCards } from "@/sanity/schema/presentation/sectionType/sections/videoCards";
import { VideoCards } from "@/components/storybook/video-cards";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityVideoCards;
};
const VideoCardsSection: FC<Props> = ({ section }) => {
  const items = section.items.map((item, index) => ({
    id: item._key || index,
    title: item.heading,
    description: item.content,
    image: urlForImage(item.image?.asset) ?? "",
    imageAlt: item.image?.alt || "",
    link: item.button?.link?.url || "/",
    linkTarget: item.button?.openInNewTab ? "_blank" : undefined,
  }));

  return (
    <VideoCards
      description={section.description}
      items={items}
      title={section.title}
      variant={section.variant}
    />
  );
};

export default VideoCardsSection;

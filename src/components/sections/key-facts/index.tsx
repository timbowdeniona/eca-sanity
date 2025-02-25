import type { FC } from "react";
import { vercelStegaSplit } from "@vercel/stega";

import { KeyFacts } from "@/components/storybook/key-facts";
import { SanityKeyFacts } from "@/sanity/schema/presentation/sectionType/sections/keyFacts";
import { SanityKeyFactImage } from "@/sanity/schema/information/keyFactImage";
import { SanityKeyFactText } from "@/sanity/schema/information/keyFactText";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityKeyFacts;
};
const KeyFactsSection: FC<Props> = ({ section }) => {
  const { cleaned: mode } = vercelStegaSplit(section.mode);
  const { cleaned: imageDisplayStyle } = vercelStegaSplit(
    section.imageDisplayStyle ?? "cover",
  );
  if (mode === "image") {
    const items = section.items.map((item, index) => {
      return {
        id: item._id || index,
        image: urlForImage((item as SanityKeyFactImage).image.asset) ?? "",
        imageAlt: (item as SanityKeyFactImage).articleimageImage?.alt,
        description: (item as SanityKeyFactImage).description,
        title: (item as SanityKeyFactImage).title,
      };
    });

    return (
      <KeyFacts
        imageDisplayStyle={
          imageDisplayStyle as typeof section.imageDisplayStyle
        }
        items={items}
        mode="image"
        variant={section.variant}
      />
    );
  }

  const items = section.items.map((item, index) => {
    return {
      id: item._id || index,
      value: (item as SanityKeyFactText).value,
      name: (item as SanityKeyFactText).name,
      description: (item as SanityKeyFactImage).description,
    };
  });

  return <KeyFacts items={items} mode="text" />;
};

export default KeyFactsSection;

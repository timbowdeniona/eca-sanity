import type { FC } from "react";

import type { SanityTextBlock } from "@/sanity/schema/presentation/sectionType/sections/textBlock";
import RichText from "@/components/sanity/richtext";
import TextBlock from "@/components/storybook/text-block";

type Props = {
  section: SanityTextBlock;
};
const TextBlockSection: FC<Props> = ({ section }) => (
  <TextBlock
    body={<RichText value={section.content} />}
    headline={section.headline}
    paddingHorizontal={section.paddingHorizontal}
    paddingVertical={section.paddingVertical}
    variant={section.variant}
  />
);

export default TextBlockSection;

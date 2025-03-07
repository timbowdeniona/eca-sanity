import { type FC } from "react";

import type { SanityEmbed } from "@/sanity/schema/presentation/sectionType/sections/embed";
import Embed from "@/components/storybook/embed";

interface Props {
  section: SanityEmbed;
}

const EmbedSection: FC<Props> = ({ section }) => {
  const { embedLink, minHeight } = section;

  return (
    <Embed
      embedLink={embedLink?.url ?? embedLink?.internal}
      minHeight={minHeight}
    />
  );
};

export default EmbedSection;

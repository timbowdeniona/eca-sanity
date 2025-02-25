import type { FC } from "react";

import type { SanityCards } from "@/sanity/schema/presentation/sectionType/sections/cards";
import Cards from "@/components/storybook/cards";

type Props = {
  section: SanityCards;
};
const CardsSection: FC<Props> = ({ section }) => {
  const links = section.links.map(item => ({
    title: item.link.title,
    color: item.aqaColour?.primary,
    link: item.link?.url ?? item.link?.internal,
    linkTarget: item.openInNewTab ? "_blank" : undefined,
  }));

  return (
    <section>
      <Cards
        description={section.description}
        headline={section.headline}
        links={links}
      />
    </section>
  );
};

export default CardsSection;

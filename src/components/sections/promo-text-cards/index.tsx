import type { FC } from "react";

import type { SanityPromoTextCards } from "@/sanity/schema/presentation/sectionType/sections/promoTextCards";
import PromoTextCards from "@/components/storybook/promo-text-cards";

type Props = {
  section: SanityPromoTextCards;
};
const PromoTextCardsSection: FC<Props> = ({ section }) => {
  const items = section.items.map((item, index) => ({
    id: item._key || index,
    variant: item.variant,
    title: item.heading,
    description: item.content,
    linkText: item.button?.link?.title,
    link: item.button?.link?.url ?? item.button?.link?.internal ?? "",
    linkTarget: item.button?.openInNewTab ? "_blank" : undefined,
  }));

  return (
    <PromoTextCards
      description={section.description}
      items={items}
      title={section.title}
    />
  );
};

export default PromoTextCardsSection;

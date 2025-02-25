import type { FC } from "react";

import type { SanityAccordion } from "@/sanity/schema/presentation/sectionType/sections/accordion";
import Accordion from "@/components/storybook/accordion";

interface Props {
  section: SanityAccordion;
}

const AccordionSection: FC<Props> = ({ section }) => (
  <Accordion
    items={(section.items ?? []).map(item => ({
      content: item.content,
      title: item.title,
    }))}
  />
);

export default AccordionSection;

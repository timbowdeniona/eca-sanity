import type { FC } from "react";

import type { SanityQuickLinks } from "@/sanity/schema/presentation/sectionType/sections/quickLinks";
import { QuickLinks } from "@/components/storybook/quick-links";

type Props = {
  section: SanityQuickLinks;
};
const QuickLinksSection: FC<Props> = ({ section }) => (
  <QuickLinks
    links={(section.links ?? []).map(link => ({
      target: link.openInNewTab ? "_blank" : undefined,
      title: link.link?.title ?? "",
      url: link.link?.url ?? "/",
    }))}
    title={section.title}
  />
);

export default QuickLinksSection;

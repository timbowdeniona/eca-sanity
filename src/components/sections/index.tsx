import type { FC, ReactNode } from "react";

import type { SanitySection } from "@/sanity/schema/presentation/pageType";
import { cn } from "@/utils/helpers/cn";
import Section from "./section";

export type Props = {
  children?: (section: SanitySection) => ReactNode;
  sections?: SanitySection[];
};

const Sections: FC<Props> = ({ children, sections }) => {
  return (
    <>
      {(sections ?? []).map((section, index) => (
        <Section
          className={cn(
            index === 0 && "is-first",
            index === (sections?.length ?? 0) - 1 && "is-last",
            index % 2 === 0 ? "is-odd" : "is-even",
          )}
          id={section.sectionMeta?.id}
          key={`${section?._id}-${index}`}
          section={section}
        >
          {children}
        </Section>
      ))}
    </>
  );
};

export default Sections;

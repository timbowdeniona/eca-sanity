import type { FC } from "react";

import type { SanityContactUs } from "@/sanity/schema/presentation/sectionType/sections/contactUs";
import { ContactUs } from "@/components/storybook/contact-us";
import { XTimeline } from "@/components/storybook/x-timeline";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityContactUs;
};
const ContactUsSection: FC<Props> = ({ section }) => (
  <section className="flex justify-center bg-grey @container">
    <div className="grid w-full grid-cols-1 gap-x-10 gap-y-6 px-5 py-6 @4xl:grid-cols-2 @4xl:gap-y-10 @cxl:w-[1408px] @cxl:px-0">
      <ContactUs
        aLevelEmail={section.aLevelEmail}
        email={section.email}
        gcseEmail={section?.gcseEmail}
        headline={section.headline}
        image={urlForImage(section?.image?.asset) ?? ""}
        imageAlt={section?.image?.alt}
        name={section?.name}
        officeHours={section?.officeHours}
        primaryColor="var(--aqa-purple-primary)"
        role={section?.role}
        secondaryColor="var(--aqa-purple-secondary)"
        telephone={section?.telephone}
      />
      {section.xUsername && (
        <XTimeline
          alt={section.xTimelineAlt || ""}
          headline={section.xHeadline}
          username={section.xUsername}
        />
      )}
    </div>
  </section>
);

export default ContactUsSection;

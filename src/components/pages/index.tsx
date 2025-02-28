import type { FC } from "react";

import SocialShare from "@/components/layout/social-share";
import CrumbTrail from "@/components/layout/crumb-trail";
import { SanityPage } from "@/sanity/schema/presentation/pageType";
import { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import Sections from "../sections";

export interface PageProps {
  breadcrumbEnabled?: boolean;
  data: SanityPage | null;
  socialShare?: SanitySocialShare | null;
}

const Page: FC<PageProps> = ({ breadcrumbEnabled, data, socialShare }) => {
  const rootUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!data) {
    return null;
  }

  return (
    <main className="bg-grey">
      {breadcrumbEnabled && (
        <CrumbTrail
          colour="neutral"
          currentPage={data?.title ?? ""}
          variant="primary"
        />
      )}
      {socialShare && (
        <SocialShare rootUrl={rootUrl ?? ""} socialShare={socialShare} />
      )}
      <Sections
        documentId={data._id}
        documentType="page"
        sections={data.sections}
      />
    </main>
  );
};

export default Page;

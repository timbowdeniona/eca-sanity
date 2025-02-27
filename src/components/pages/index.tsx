import type { FC } from "react";

import Sections from "../sections";
import SocialShare from "@/components/layout/social-share";
import CrumbTrail from "@/components/layout/crumb-trail";
import { SanityPage } from "@/sanity/schema/presentation/pageType";
import { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";

export interface PageProps {
  breadcrumbEnabled?: boolean;
  data: SanityPage | null;
  socialShare?: SanitySocialShare | null;
}

const Page: FC<PageProps> = ({ breadcrumbEnabled, data, socialShare }) => {
  const rootUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <main className="bg-grey">
      {breadcrumbEnabled && (
        <CrumbTrail
          color="neutral"
          currentPage={data?.title ?? ""}
          variant="primary"
        />
      )}
      {socialShare && (
        <SocialShare rootUrl={rootUrl ?? ""} socialShare={socialShare} />
      )}
      <Sections sections={data?.sections} />;
    </main>
  );
};

export default Page;

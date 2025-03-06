import type { FC } from "react";
import type { SanityPage } from "@/sanity/schema/presentation/pageType";
import type { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import type { SanityClub } from "@/sanity/schema/information/club";

import SocialShare from "@/components/layout/social-share";
import CrumbTrail from "@/components/layout/crumb-trail";
import { ClubSearch } from "@/components/club-search";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";

export interface PageProps {
  breadcrumbEnabled?: boolean;
  page: SanityPage | null;
  clubs: SanityClub[] | null;
  data: SanityNewsArticle[];
  socialShare?: SanitySocialShare | null;
}

const EcaMembersPage: FC<PageProps> = ({
  breadcrumbEnabled,
  clubs,
  page,
  socialShare,
}) => {
  const rootUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <main className="bg-grey">
      {breadcrumbEnabled && (
        <CrumbTrail
          colour="neutral"
          currentPage={page?.title ?? ""}
          variant="primary"
        />
      )}
      {socialShare && (
        <SocialShare rootUrl={rootUrl ?? ""} socialShare={socialShare} />
      )}
      <ClubSearch clubs={clubs ?? []} />
    </main>
  );
};

export default EcaMembersPage;

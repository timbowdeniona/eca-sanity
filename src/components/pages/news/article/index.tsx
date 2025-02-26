import type { FC } from "react";

import SocialShare from "@/components/layout/social-share";
import CrumbTrail from "@/components/layout/crumb-trail";
import { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";

export interface NewsPageProps {
  data: SanityNewsArticle | null;
  socialShare: SanitySocialShare | null;
}

const NewsPage: FC<NewsPageProps> = ({ data, socialShare }) => {
  const rootUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <main className="bg-grey">
      <CrumbTrail
        color="neutral"
        currentPage={data?.title ?? ""}
        variant="primary"
      />
      <SocialShare rootUrl={rootUrl ?? ""} socialShare={socialShare} />
    </main>
  );
};

export default NewsPage;

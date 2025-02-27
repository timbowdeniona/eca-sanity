import type { FC } from "react";

import SocialShare from "@/components/layout/social-share";
import CrumbTrail from "@/components/layout/crumb-trail";
import { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import TitleBar from "@/components/storybook/title-bar";
import NewsArticle from "@/components/news";

export interface NewsPageProps {
  data: SanityNewsArticle | null;
  socialShare: SanitySocialShare | null;
}

const NewsPage: FC<NewsPageProps> = ({ data, socialShare }) => {
  const rootUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <main className="bg-grey">
      <CrumbTrail
        colour="neutral"
        currentPage={data?.title ?? ""}
        variant="primary"
      />
      <SocialShare rootUrl={rootUrl ?? ""} socialShare={socialShare} />
      <TitleBar color="cyan-800" title={data?.title ?? ""} variant="primary" />
      <NewsArticle data={data} />
    </main>
  );
};

export default NewsPage;

import type { FC } from "react";

import type { ArticleListItem } from "@/components/storybook/article-list";
import SocialShare from "@/components/layout/social-share";
import CrumbTrail from "@/components/layout/crumb-trail";
import { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";
import { SanityClub } from "@/sanity/schema/information/club";
import { ArticleList } from "@/components/storybook/article-list";
import { makeImageUrl } from "@/sanity/lib/image";
import { PATH_NEWS } from "@/configs/articles";

export interface MemberListingPageProps {
  data: SanityNewsArticle[] | null;
  club: SanityClub;
  socialShare: SanitySocialShare | null;
}

const MemberListingPage: FC<MemberListingPageProps> = ({
  data,
  club,
  socialShare,
}) => {
  const rootUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const club1 = club;
  const articles: ArticleListItem[] =
    data?.map(article => ({
      id: article._id,
      headline: article.title,
      summary: article.summary,
      link: `${PATH_NEWS}/${article?.slug?.current}`,
      logos: article.logos,
      image: makeImageUrl(article.articleImage),
      date: article.date,
      description: article.description,
      highlightedText: article.highlightedText,
    })) || [];

  return (
    <main className="bg-grey">
      <CrumbTrail colour="neutral" currentPage="News" variant="primary" />
      <SocialShare rootUrl={rootUrl ?? ""} socialShare={socialShare} />
      <div className="flex items-center justify-center p-4 pt-10 text-4xl text-cyan-800 ">
        {club1.club}
      </div>
      <ArticleList articles={articles} title="News" variant="primary" />
    </main>
  );
};

export default MemberListingPage;

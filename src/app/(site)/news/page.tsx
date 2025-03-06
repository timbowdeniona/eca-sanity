import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import NewsListingPage from "@/components/pages/news";
import { getNewsArticles, getNewsArticlesByClub } from "@/sanity/services/getArticle";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> => {
  return getPageMetadata("news");
};

export default async function NewsRoute() {
  
  const data = await getNewsArticles();
  const socialShare = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return <NewsListingPage data={data} socialShare={socialShare} />;
}

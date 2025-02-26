import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import NewsPage from "@/components/pages/news/article";
import { getArticle } from "@/sanity/services/getArticle";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  return getPageMetadata(`${params.slug}`);
};

export default async function NewsRoute(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const data = await getArticle(slug, "newsArticle");
  const socialShare = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return <NewsPage data={data} socialShare={socialShare} />;
}

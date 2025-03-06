import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import MemberListingPage from "@/components/pages/eca-members/member";
import { getNewsArticlesByClub } from "@/sanity/services/getArticle";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";
import { getClubById } from "@/sanity/services/getClub";

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

  const club = await getClubById(slug);
  const data = await getNewsArticlesByClub(slug);
  const socialShare = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return <MemberListingPage data={data} socialShare={socialShare} club={club} />;
}

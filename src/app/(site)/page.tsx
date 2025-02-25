import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import Page from "@/components/pages/page";
import { getPageBySlug } from "@/sanity/services/getPage";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> =>
  getPageMetadata("/");

export default async function IndexRoute() {
  const { data } = await getPageBySlug("/");
  const { data: socialShare } = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return <Page data={data} socialShare={socialShare} />;
}

import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import Page from "@/components/pages";
import { getPageBySlug } from "@/sanity/services/getPage";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  return getPageMetadata(`${params.slug}`);
};

export default async function DynamicRoute(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const data = await getPageBySlug(slug);
  const socialShare = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return <Page breadcrumbEnabled data={data} socialShare={socialShare} />;
}

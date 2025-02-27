import type { Metadata } from "next";

import { getPageSubpageMetadata } from "@/utils/helpers/getPageMetadata";

import Page from "@/components/pages";
import { getSubpageBySlug } from "@/sanity/services/getPage";
import getSocialShare from "@/sanity/services/getSocialShare";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateMetadata = async (props: {
  params: Promise<{ slug: string; subpage: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  return getPageSubpageMetadata(
    `${params.slug}`,
    [...params.subpage].join("/"),
  );
};

export default async function DynamicRoute(props: {
  params: Promise<{ slug: string; subpage: string[] }>;
}) {
  const { slug, subpage } = await props.params;

  // Get the last slug in the path (current page)
  const currentSlug = subpage[subpage.length - 1];
  // Get the parent slug in the path (parent page)
  const parentSlug = subpage[subpage.length - 2] || slug;

  const data = await getSubpageBySlug(parentSlug, currentSlug);
  const socialShare = await getSocialShare();

  if (!data) {
    return notFound();
  }

  return <Page breadcrumbEnabled data={data} socialShare={socialShare} />;
}

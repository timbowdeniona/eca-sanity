import type { Metadata } from "next";
import { getPageMetadata } from "@/utils/helpers/getPageMetadata";

import Page from "@/components/pages";
import { getPageBySlug } from "@/sanity/services/getPage";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> =>
  getPageMetadata("/");

export default async function IndexRoute() {
  const data = await getPageBySlug("/");

  if (!data) {
    return notFound();
  }

  return <Page data={data} />;
}

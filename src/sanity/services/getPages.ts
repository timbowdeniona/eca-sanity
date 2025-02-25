"use server";

import type { SanityPage } from "@/sanity/schema/presentation/pageType";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGES_FOR_SITEMAP_QUERY } from "./queries/page";

export const getPagesForSitemap = async (): Promise<SanityPage[]> => {
  const { data } = await sanityFetch({
    query: PAGES_FOR_SITEMAP_QUERY,
    params: { types: ["page", "subpage"] },
  });

  return data;
};

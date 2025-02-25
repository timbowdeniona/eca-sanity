"use server";

import type { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import { sanityFetch } from "@/sanity/lib/live";
import { getSocialShareQuery } from "./queries/socialShare";

export const getSocialShare = async (): Promise<SanitySocialShare | null> => {
  const { data } = await sanityFetch({
    query: getSocialShareQuery,
  });

  return data;
};

export default getSocialShare;

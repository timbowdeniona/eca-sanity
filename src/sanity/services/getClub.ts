"use server";

import type { SanityClub } from "@/sanity/schema/information/club";
import { sanityFetch } from "@/sanity/lib/live";
import CLUBS_QUERY from "./queries/club";

export const getClubs = async (): Promise<SanityClub[]> => {
  const { data } = await sanityFetch({
    query: CLUBS_QUERY,
  });

  return data;
};

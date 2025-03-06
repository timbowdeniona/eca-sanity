"use server";

import type { SanityClub } from "@/sanity/schema/information/club";
import { sanityFetch } from "@/sanity/lib/live";
import CLUBS_QUERY, { CLUBS_QUERY_BY_ID } from "./queries/club";

export const getClubs = async (): Promise<SanityClub[]> => {
  const { data } = await sanityFetch({
    query: CLUBS_QUERY,
  });

  return data;
};

export const getClubById = async (id: string): Promise<SanityClub> => {
  const { data } = await sanityFetch({
    query: CLUBS_QUERY_BY_ID,
    params: { id },
  });

  return data;
};

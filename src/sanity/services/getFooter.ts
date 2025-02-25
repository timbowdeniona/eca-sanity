"use server";

import type { SanityFooter } from "../schema/presentation/layout/footer";
import { sanityFetch } from "@/sanity/lib/live";
import { getFooterQuery } from "./queries/footer";

const getFooter = async (): Promise<SanityFooter | null> => {
  const { data } = await sanityFetch({
    query: getFooterQuery,
  });

  return data;
};

export default getFooter;

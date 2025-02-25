"use server";

import type { SanityHeader } from "../schema/presentation/layout/header";
import { sanityFetch } from "@/sanity/lib/live";
import { getHeaderQuery } from "./queries/header";

const getHeader = async (): Promise<SanityHeader | null> => {
  const { data } = await sanityFetch({
    query: getHeaderQuery,
  });

  return data;
};

export default getHeader;

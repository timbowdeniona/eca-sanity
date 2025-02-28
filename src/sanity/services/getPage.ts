"use server";

import type { Slug } from "sanity";
import type { SanityPage } from "@/sanity/schema/presentation/pageType";
import { sanityFetch } from "@/sanity/lib/live";

import {
  PAGE_BY_SLUG_QUERY,
  PAGE_WITH_META_QUERY,
  SUBPAGE_BY_SLUG_QUERY,
  SUBPAGE_WITH_META_QUERY,
} from "./queries/page";

export const getPageBySlug = async (
  pageSlug: string,
): Promise<SanityPage | null> => {
  const { data } = await sanityFetch({
    query: PAGE_BY_SLUG_QUERY,
    params: { pageSlug },
  });

  return data;
};

export const getSubpageBySlug = async (
  parentSlug: string,
  currentSlug: string,
): Promise<SanityPage | null> => {
  const { data } = await sanityFetch({
    query: SUBPAGE_BY_SLUG_QUERY,
    params: { parentSlug, currentSlug },
  });

  return data;
};

export const getPageWithMeta = async (
  slug: string,
): Promise<Pick<SanityPage, "_id" | "pageMeta" | "slug"> | null> => {
  const { data } = await sanityFetch({
    query: PAGE_WITH_META_QUERY,
    params: { slug },
  });

  return data;
};

export const getPageSubpageWithMeta = async (
  slug: string,
  subpage: string,
): Promise<{
  slug: Slug;
  subpages: Pick<SanityPage, "_id" | "pageMeta" | "slug">[];
} | null> => {
  const { data } = await sanityFetch({
    query: SUBPAGE_WITH_META_QUERY,
    params: { slug, subpage },
  });

  return data;
};

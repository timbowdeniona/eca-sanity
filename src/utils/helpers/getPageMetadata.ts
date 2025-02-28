import type { Metadata } from "next";
import trim from "lodash/trim";

import { SanityPageMeta } from "./../../sanity/schema/presentation/pageType/pageMeta";
import favicon from "@/../../public/favicon.ico";
import appleIcon from "@/../../public/apple-touch-icon.png";
import {
  getPageSubpageWithMeta,
  getPageWithMeta,
} from "@/sanity/services/getPage";
import getCanonicalUrl from "./getCanonicalUrl";

/**
 * Format the metadata for the page.
 */
export const formatPageMetadata = (
  pageMeta?: SanityPageMeta | null,
  url?: string,
) => {
  const title = pageMeta?.title ?? "IONA Sanity Demo";
  const description = pageMeta?.description ?? "";
  const keywords = pageMeta?.keywords ?? "";
  const canonicalUrl =
    pageMeta?.canonicalUrl?.current ?? pageMeta?.canonicalUrl;

  return {
    title,
    description,
    keywords,
    icons: {
      icon: favicon.src,
      apple: appleIcon.src,
    },
    alternates: {
      canonical: canonicalUrl
        ? getCanonicalUrl(String(canonicalUrl))
        : url
          ? getCanonicalUrl(url)
          : url,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: pageMeta?.image?.asset?.url ?? "",
          width: pageMeta?.image?.asset?.metadata?.dimensions?.width ?? 0,
          height: pageMeta?.image?.asset?.metadata?.dimensions?.height ?? 0,
          alt: pageMeta?.title ?? "IONA Sanity Demo",
        },
      ],
      url,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ""),
    robots: {
      index: !["noindex", "none"].includes(pageMeta?.robots ?? ""),
      follow: !["nofollow", "none"].includes(pageMeta?.robots ?? ""),
    },
  };
};

export const getPageMetadata = async (
  slug: string,
  subpage?: string,
): Promise<Metadata> => {
  const page = await getPageWithMeta(slug);

  const url = ["", ...[trim(slug, "/"), subpage].filter(slug => !!slug)].join(
    "/",
  );

  return formatPageMetadata(page?.pageMeta, url);
};

export const getPageSubpageMetadata = async (
  slug: string,
  subpage: string,
): Promise<Metadata> => {
  const page = await getPageSubpageWithMeta(slug, subpage);

  const url = ["", ...[slug, subpage].filter(slug => !!slug)].join("/");

  return formatPageMetadata(page?.subpages?.[0]?.pageMeta, url);
};

import type { LoadQueryOptions } from "../lib/store";
import { loadQuery } from "../lib/store";

import type { SanityPage } from "@/sanity/schema/presentation/pageType";

import { PAGES_FOR_SITEMAP_QUERY } from "./queries/page";

export const getPagesForSitemap = (options?: LoadQueryOptions) =>
  loadQuery<SanityPage[]>(
    PAGES_FOR_SITEMAP_QUERY,
    { types: ["page", "subpage"] },
    options,
  );

import type { LoadQueryOptions } from '../lib/store';
import { loadQuery } from '../lib/store';

import type { Slug } from 'sanity';
import type { SanityPage } from '@/sanity/schema/presentation/pageType';

import {
  PAGE_BY_SLUG_QUERY,
  SUBPAGE_BY_SLUG_QUERY,
  PAGE_WITH_META_QUERY,
  SUBPAGE_WITH_META_QUERY,
} from './queries/page';

export const getPageBySlug = (pageSlug: string, options?: LoadQueryOptions) =>
  loadQuery<SanityPage | null>(PAGE_BY_SLUG_QUERY, { pageSlug }, options);

export const getSubpageBySlug = (
  parentSlug: string,
  currentSlug: string,
  options?: LoadQueryOptions,
) => loadQuery<SanityPage | null>(SUBPAGE_BY_SLUG_QUERY, { parentSlug, currentSlug }, options);

export const getPageWithMeta = (slug: string, options?: LoadQueryOptions) =>
  loadQuery<Pick<SanityPage, '_id' | 'pageMeta' | 'slug'> | null>(
    PAGE_WITH_META_QUERY,
    {
      slug,
    },
    options,
  );

export const getPageSubpageWithMeta = (slug: string, subpage: string, options?: LoadQueryOptions) =>
  loadQuery<{
    slug: Slug;
    subpages: Pick<SanityPage, '_id' | 'pageMeta' | 'slug'>[];
  } | null>(
    SUBPAGE_WITH_META_QUERY,
    {
      slug,
      subpage,
    },
    options,
  );

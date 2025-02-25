import type { FileAsset, ImageAsset, Slug } from "sanity";

import type { Display } from "../types";
import { SanitySection } from "./presentation/pageType";
import { SanityPageMeta } from "./presentation/pageType/pageMeta";

export type ImageMedia = ImageAsset & {
  altText: string | null;
};

export type SanityImage = {
  asset: ImageMedia | null;
  display?: Display;
  alt?: string;
  className?: string;
};

export type SanityFile = {
  asset: FileAsset;
  alt?: string;
};

export type SanityYouTubeEmbed = {
  url: string;
  alt?: string;
};

export type SanityVerticalAlignment = "top" | "middle" | "bottom" | "spread";

export type SanityColumn = {
  title: string;
  backgroundColour: string;
  verticalAlignment?: SanityVerticalAlignment;
  paddingVertical: number;
  paddingHorizontal: number;
  sections: SanitySection[];
};

export type SanityArticleContentSource =
  | "externalUrl"
  | "internalPageSlug"
  | "contentBody";

export type SanityArticleType = "blogPost" | "newsArticle";

export type SanityPageWithMetadata = {
  _id?: string;
  slug: Slug;
  pageMeta?: SanityPageMeta;
};

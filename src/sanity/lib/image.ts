import createImageUrlBuilder from "@sanity/image-url";
import type {
  SanityAsset,
  SanityImageSource,
} from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (
  source: SanityImageSource | null | undefined | SanityAsset,
): string | undefined => {
  return (
    makeImageUrl((source as SanityAsset)?.url) ||
    makeImageUrl(source) ||
    undefined
  );
};

export const makeImageUrl = (
  source: SanityImageSource | null | undefined | SanityAsset,
): string | undefined => {
  if (!source) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max").url();
};

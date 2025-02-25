import { groq } from "next-sanity";

import { imageFragment } from "../image";
import { linkFragment } from "../link";

export const featurePromoFragment = groq`
  variant,
  heading,
  content,
  image {
    ${imageFragment}
  },
  youtubeEmbed {
    url,
    alt
  },
  mediaPosition,
  mediaType,
  buttons[] {
    link-> {
      ${linkFragment}
    },
    openInNewTab
  }
`;

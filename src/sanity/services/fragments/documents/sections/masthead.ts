import { groq } from "next-sanity";

import { imageSetFragment } from "../../objects/imageSet";
import { linkFragment } from "../link";

export const mastheadFragment = groq`
  title,
  variant,
  mode,
  image {
    ${imageSetFragment}
  },
  content,
  alignment,
  buttons[] {
    link-> {
      ${linkFragment}
    },
    openInNewTab
  },
  mediaType,
  videoUrl -> {
    ${linkFragment}
  }
`;

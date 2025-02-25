import { groq } from "next-sanity";

import { imageSetFragment } from "../../objects/imageSet";
import { linkFragment } from "../link";

export const heroFragment = groq`
  title,
  variant,
  image {
    ${imageSetFragment}
  },
  content,
  buttons[] {
    link-> {
      ${linkFragment}
    },
    openInNewTab
  }
`;

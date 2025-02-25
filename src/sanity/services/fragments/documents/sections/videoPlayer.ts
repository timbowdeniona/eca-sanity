import { groq } from "next-sanity";

import { linkFragment } from "../link";
import { imageFragment } from "../image";

export const videoPlayerFragment = groq`
  bgImage {
    ${imageFragment}
  },
  fullWidth,
  paddingVertical,
  paddingHorizontal,
  variant,
  videoUrl -> {
    ${linkFragment}
  }
`;

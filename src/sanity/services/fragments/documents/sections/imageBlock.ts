import { groq } from "next-sanity";

import { imageFragment } from "../image";

export const imageBlockFragment = groq`
  caption,
  image {
    ${imageFragment}
  },
  alt,
  alignment,
  width,
  widthPixels,
  overrideWidth,
  paddingVertical,
  paddingHorizontal
`;

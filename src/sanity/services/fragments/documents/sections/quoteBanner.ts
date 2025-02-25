import { groq } from "next-sanity";

import { imageFragment } from "../image";

export const quoteBannerFragment = groq`
  variant,
  image {
    ${imageFragment}
  },
  content,
  subtitle
`;

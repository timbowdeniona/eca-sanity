import { groq } from "next-sanity";

import { imageFragment } from "../documents/image";

export const pageMetaFragment = groq`
  title,
  description,
  keywords[],
  canonicalUrl,
  image {
    ${imageFragment}
  },
  robots
`;

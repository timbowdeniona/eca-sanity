import { groq } from "next-sanity";

import { imageFragment } from "../documents/image";

export const keyFactImageFragment = groq`
  _id,
  image {
    ${imageFragment}
  },
  description,
  title
`;

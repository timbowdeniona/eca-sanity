import { groq } from "next-sanity";

import { imageFragment } from "../image";
import { richtextFragment } from "../richtext";

export const textAndImageFragment = groq`
  title,
  content[] {
    ${richtextFragment}
  },
  image {
    ${imageFragment}
  },
  imagePosition
`;

import { groq } from "next-sanity";

import { imageFragment } from "../documents/image";

export const imageSetFragment = groq`
  default {
    ${imageFragment}
  },
  screens[] {
    screen,
    image {
      ${imageFragment}
    }
  }
`;

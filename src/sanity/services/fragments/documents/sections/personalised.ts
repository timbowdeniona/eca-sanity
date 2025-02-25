import { groq } from "next-sanity";

import { heroFragment } from "./hero";

export const personalisedFragment = groq`
  variations[] {
    roles[],
    sections[]-> {
      _id,
      _type,
      _type == 'hero' => {
        ${heroFragment}
      },
    }
  }
`;

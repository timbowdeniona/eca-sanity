import { groq } from "next-sanity";

import { richtextFragment } from "../richtext";

export const accordionFragment = groq`
  items[] {
    title,
    content[] {
      ${richtextFragment}
    }
  }
`;

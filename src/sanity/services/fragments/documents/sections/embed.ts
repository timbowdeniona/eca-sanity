import { groq } from "next-sanity";

import { linkFragment } from "../link";

export const embedFragment = groq`
  consent,
  embedLink -> {
    ${linkFragment}
  },
  minHeight
`;

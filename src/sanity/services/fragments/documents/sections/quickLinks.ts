import { groq } from "next-sanity";

import { linkFragment } from "../link";

export const quickLinksFragment = groq`
  title,
  links[] {
    link-> {
      ${linkFragment}
    },
    openInNewTab
  }
`;

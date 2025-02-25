import { groq } from "next-sanity";

import { linkFragment } from "../fragments/documents/link";

export const footerFragment = groq`
  links[] -> {
    _type,
    ${linkFragment},
  },
  socials[]-> {
    ${linkFragment}
  },
  credits
`;

export const getFooterQuery = groq`
  *[_type == "footer"][0] {
    ${footerFragment}
  }
`;

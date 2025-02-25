import { groq } from "next-sanity";

import { linkFragment } from "../link";

export const promoTextCardsFragment = groq`
  title,
  description,
  items[] {
    _key,
    heading,
    content,
    variant,
    button {
      link-> {
        ${linkFragment}
      },
      openInNewTab
    }
  }
`;

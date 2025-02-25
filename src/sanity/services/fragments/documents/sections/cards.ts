import { groq } from "next-sanity";

import { linkFragment } from "../link";

export const cardsFragment = groq`
  headline,
  description,
  links[] {
    link-> {
      ${linkFragment}
    },
    aqaColour-> {
      name,
      "primary": primary.hex,
      "secondary": secondary.hex,
      "tertiary": tertiary.hex
    },
    openInNewTab
  }
`;

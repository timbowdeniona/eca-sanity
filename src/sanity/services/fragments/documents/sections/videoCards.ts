import { groq } from "next-sanity";

import { linkFragment } from "../link";
import { imageFragment } from "../image";

export const videoCardsFragment = groq`
  title,
  description,
  variant,
  titlePlacement,
  items[] {
    _key,
    heading,
    content,
    image {
      ${imageFragment}
    },
    button {
      link-> {
        ${linkFragment}
      },
      openInNewTab
    }
  }
`;

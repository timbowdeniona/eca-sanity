import { groq } from "next-sanity";

import { linkFragment } from "../link";

export const ctaFragment = groq`
  title,
  link -> {
    ${linkFragment}
  },
  variant,
  colour,
  icon,
  padding,
  position,
  openInNewTab
`;

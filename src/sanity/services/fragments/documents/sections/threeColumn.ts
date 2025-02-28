import { groq } from "next-sanity";

import { sectionsFragment } from "./sections";

export const threeColumnFragment = groq`
  title,
  variant,
  rowPaddingHorizontal,
  rowPaddingVertical,
  columns[] {
    title,
    backgroundColour,
    verticalAlignment,
    paddingVertical,
    paddingHorizontal,
    sections[] {
      ${sectionsFragment}
    }
  },
  gapSize
`;

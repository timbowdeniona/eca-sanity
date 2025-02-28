import { groq } from "next-sanity";

import { sectionsFragment } from "./sections";

export const twoColumnFragment = groq`
  title,
  leftColumnSpan,
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

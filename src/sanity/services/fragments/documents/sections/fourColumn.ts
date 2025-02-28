import { groq } from "next-sanity";

import { sectionsFragment } from "./sections";

export const fourColumnFragment = groq`
  title,
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

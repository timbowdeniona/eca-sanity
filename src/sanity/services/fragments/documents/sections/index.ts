import { groq } from "next-sanity";

import { sectionsFragment as sectionsWithoutColums } from "./sections";
import { twoColumnFragment } from "./twoColumn";
import { threeColumnFragment } from "./threeColumn";
import { fourColumnFragment } from "./fourColumn";

export const sectionsFragment = groq`
  ${sectionsWithoutColums},
  _type == 'twoColumn' => {
    ${twoColumnFragment}
  },
  _type == 'threeColumn' => {
    ${threeColumnFragment}
  },
  _type == 'fourColumn' => {
    ${fourColumnFragment}
  }
`;

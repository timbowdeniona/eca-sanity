import { groq } from "next-sanity";
import { richtextFragment } from "../richtext";

export const textBlockFragment = groq`
  headline,
  paddingVertical,
  paddingHorizontal,
  content[] {
    ${richtextFragment}
  },
  variant,
`;

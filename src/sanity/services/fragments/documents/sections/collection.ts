import { groq } from "next-sanity";

import { mastheadFragment } from "./masthead";

export const collectionFragment = groq`
  _id,
  _type,
  sectionMeta {
    id
  },
  type == "masthead" => {
    "sections": *[_type == 'masthead'] {
      _id,
      _type,
      ${mastheadFragment}
    }
  }
`;

import { groq } from "next-sanity";

import { imageFragment } from "../image";
import { fileFragment } from "../fileFragment";

export const resourceCardsFragment = groq`
  title,
  description,
  source,
  variant,
  titlePlacement,
  items[] -> {
    _id,
    title,
    description,
    author,
    subject,
    qualification,
    thumbnail {
      ${imageFragment}
    },
    file { 
      ${fileFragment}
    },
    publicationDate,
    permissions,
    isFile,
  }
`;

import { groq } from "next-sanity";

import { imageFragment } from "../image";

export const contactUsFragment = groq`
  headline,
  name,
  email,
  gcseEmail,
  aLevelEmail,
  role,
  telephone,
  officeHours,
  xUsername,
  xHeadline,
  xTimelineAlt,
  image {
    ${imageFragment}
  }
`;

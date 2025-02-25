import { groq } from "next-sanity";

export const aqaColourFragment = groq`
  _id,
  _type,
  name,
  description,
  "primary": primary.hex,
  "secondary": secondary.hex,
  "tertiary": tertiary.hex
`;

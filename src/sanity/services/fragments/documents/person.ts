import { groq } from "next-sanity";

export const personFragment = groq`
  _id,
  _type,
  name,
  profile
`;

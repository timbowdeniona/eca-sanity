import { groq } from "next-sanity";

export const keyFactTextFragment = groq`
  _id,
  name,
  value,
  description
`;

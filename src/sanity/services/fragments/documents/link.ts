import { groq } from "next-sanity";

export const linkFragment = groq`
  _id,
  _type,
  title,
  "url": select(
    type == "reference" => "/" + coalesce(internal->slug.current, ""),
    type == "url" => url
  ),
  "internal": internal->slug.current
`;

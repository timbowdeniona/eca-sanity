import { groq } from "next-sanity";

export const socialShareFragment = groq`
  icons[] {
    _type,
    _id,
    title,
    shareLink,
    sharingText,
    identifier,
    enabled,
  }
`;

export const getSocialShareQuery = groq`
  *[_type == "socialShare"][0] {
    ${socialShareFragment}
  }
`;

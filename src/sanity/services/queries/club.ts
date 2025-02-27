import { groq } from "next-sanity";

export const CLUBS_QUERY = groq`
  *[_type == "club"] {
    _id,
    club,
    logo {
      asset-> {
        url
      }
    },
    country,
    memberType,
    website
  }
`;

export default CLUBS_QUERY;

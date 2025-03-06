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

export const CLUBS_QUERY_BY_ID = groq`
  *[_type == "club" && _id == $id][0] {
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

import { linkFragment } from "../fragments/documents/link";
import { groq } from "next-sanity";

export const headerFragment = groq`
  topBanner,
  topLinks[] {
    _type,
    _type == 'link' => {
      ${linkFragment}
    }
  },
  mainLinks[] {
    _type,
    link-> {
      ${linkFragment}
    },
    links[] -> {
      _type,
      _type == 'link' => {
        ${linkFragment}
      },
      _type == 'title' => {
        title
      },
    }
  }
`;

// NOTE: Header _id is set to "header"
export const getHeaderQuery = groq`
  *[_type == "header" && _id == 'header'][0] {
    ${headerFragment}
  }
`;

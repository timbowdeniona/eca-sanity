import { groq } from "next-sanity";
import { imageFragment } from "../image";
import { linkFragment } from "../link";

export const qualificationCardsFragment = groq`
  title,
  headline,
  paddingHorizontal,
  paddingVertical,
  items[] {
    _key,
    title,
    badges[],
    subtitle,
    content,
    image {
      ${imageFragment}
    },
    primaryLink {
      link-> {
        ${linkFragment}
      },
      openInNewTab
    },
    secondaryLinkLabel,
    secondaryLink {
      link-> {
        ${linkFragment}
      },
      openInNewTab
    }
  }
`;

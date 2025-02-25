import { groq } from "next-sanity";

import { keyFactImageFragment } from "../../objects/keyFactImage";
import { keyFactTextFragment } from "../../objects/keyFactText";

export const keyFactsFragment = groq`
  mode,
  variant,
  imageDisplayStyle,
  "items": select(
    mode == "text" => textItems[] {
      ${keyFactTextFragment}
    },

    mode == "image" => imageItems[] {
      ${keyFactImageFragment}
    }
  ),
`;

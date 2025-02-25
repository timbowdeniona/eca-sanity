import { groq } from "next-sanity";

export const imageFragment = groq`
  _key,
  _type,
  asset-> {
    _id,
    _type,
    altText,
    assetId,
    extension,
    metadata {
      dimensions {
        aspectRatio,
        height,
        width
      },
      hasAlpha,
      isOpaque
    },
    mimeType,
    originalFilename,
    title,
    url,
  },
  alt
`;

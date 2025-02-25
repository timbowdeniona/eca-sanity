import { groq } from "next-sanity";

export const fileFragment = groq`
  _key,
  _type,
  asset-> {
    assetId,
    extension,
    mimeType,
    originalFilename,
    path,
    sha1hash,
    size,
    uploadId,
    url,
    _createdAt,
    _id,
    _rev,
    _type,
    _updatedAt,
  },
  alt,
`;

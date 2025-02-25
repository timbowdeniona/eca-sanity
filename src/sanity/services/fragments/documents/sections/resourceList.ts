import { groq } from "next-sanity";
import { imageFragment } from "../image";
import { fileFragment } from "../fileFragment";

export const resourceListFragment = groq`
  headline,
  description,
  variant,
  items[] {
    badge,
    showFileType,
    resource -> {
      _id,
      title,
      description,
      author,
      subject,
      qualification,
      thumbnail {
        ${imageFragment}
      },
      file { 
        ${fileFragment}
      },
      publicationDate,
      permissions,
      isFile,
    }
  }
`;

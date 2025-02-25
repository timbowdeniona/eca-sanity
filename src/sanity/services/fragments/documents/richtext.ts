import { groq } from "next-sanity";
import { resourceListFragment } from "./sections/resourceList";
import { tableFragment } from "./sections/table";
import { imageFragment } from "./image";
import { ctaFragment } from "./sections/cta";
import { imageBlockFragment } from "./sections/imageBlock";
import { fileFragment } from "./fileFragment";

export const richtextFragment = groq`
  ...,
  _type == 'image' => {
    ${imageFragment}
  },
  _type == 'imageBlock' => {
    ${imageBlockFragment}
  },
  markDefs[] {
    ...,
    _type == 'link' => {
      href
    },
    _type == 'anchorTargetId' => {
      targetId
    },
    _type == 'internal' => {
      "href": coalesce(
        @.href->slug.current,
        @.href->url,
        @.href.url
      )
    },
    _type == 'resource' => {
      "resource": resource -> {
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
    }
    }
  },
  "content": *[_id == ^._ref] {
    _id,
    _type,
    _type == 'resourceList' => {
      ${resourceListFragment}
    },
    _type == 'table' => {
      ${tableFragment}
    },
    _type == 'cta' => {
      ${ctaFragment}
    }
  }
`;

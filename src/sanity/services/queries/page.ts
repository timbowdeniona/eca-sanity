import { groq } from "next-sanity";
import { sectionsFragment } from "@/sanity/services/fragments/documents/sections";
import { imageFragment } from "@/sanity/services/fragments/documents/image";
import { pageMetaFragment } from "../fragments/objects/pageMeta";

export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && 
    slug.current == $pageSlug && 
    !(_id in *[_type == "page"].subpages[]._ref)
  ][0] {
    _id,
    _type,
    title,
    type,
    slug,
    sections[]-> {
      ${sectionsFragment}
    },
    header {
      headline,
      description,
      image {
        ${imageFragment}
      },
      variant,
    }
  }
`;

export const SUBPAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && 
    _id in *[_type == "page"].subpages[]._ref &&
    slug.current == $currentSlug &&
    _id in *[_type == "page" && slug.current == $parentSlug].subpages[]._ref
  ][0] {
    _id,
    _type,
    title,
    type,
    slug,
    sections[]-> {
      ${sectionsFragment}
    },
    header {
      headline,
      description,
      image {
        ${imageFragment}
      },
      variant,
    }
  }
`;

export const PAGE_WITH_META_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    slug,
    pageMeta {
      ${pageMetaFragment}
    }
  }
`;

export const SUBPAGE_WITH_META_QUERY = groq`
  *[_type == "page" && type == "parent" && slug.current == $slug][0] {
    slug,
    "subpages": *[_id in ^.subpages[]._ref && slug.current == $subpage] {
      _id,
      slug,
      pageMeta {
        ${pageMetaFragment}
      }
    },
      ${pageMetaFragment}
  }
`;

export const PAGE_WITH_PARENTS_QUERY = groq`
  _id,
  _type,
  type,
  title,
  name,
  slug,
  "parents": *[_type == "page" && ^._id in subpages[]._ref] {
    _id,
    type,
    slug,
    "parents": *[_type == "page" && ^._id in subpages[]._ref] {
      _id,
      type,
      slug,
      "parents": *[_type == "page" && ^._id in subpages[]._ref] {
        _id,
        type,
        slug,
        "parents": *[_type == "page" && ^._id in subpages[]._ref] {
          _id,
          type,
          slug,
        }
      }
    }
  }
`;

export const PAGES_FOR_SITEMAP_QUERY = groq`
  *[
    _type in $types && type != "error" && 
    (defined(title) || defined(name)) && 
    (!defined(pageMeta.robots) || (pageMeta.robots != "noindex" && pageMeta.robots != "none"))
  ]{
    _id,
    _type,
    _updatedAt,
    type,
    "title": coalesce(title, name),
    "parents": *[_type in $types && ^._id in subpages[]._ref] {
      _id,
      type,
      slug
    },
    "slug": {
      "current": array::join(array::compact([
        *[_type in $types && ^._id in subpages[]._ref][0] {
          "url": *[_type in $types && ^._id in subpages[]._ref][0] {
            "url": *[_type in $types && ^._id in subpages[]._ref][0] {
              "url": *[_type in $types && ^._id in subpages[]._ref][0] {
                "url": *[_type in $types && ^._id in subpages[]._ref][0].slug.current
              }.url
            }.url
          }.url
        }.url,
        *[_type in $types && ^._id in subpages[]._ref][0] {
          "url": *[_type in $types && ^._id in subpages[]._ref][0] {
            "url": *[_type in $types && ^._id in subpages[]._ref][0] {
              "url": *[_type in $types && ^._id in subpages[]._ref][0].slug.current
            }.url
          }.url
        }.url,
        *[_type in $types && ^._id in subpages[]._ref][0] {
          "url": *[_type in $types && ^._id in subpages[]._ref][0] {
            "url": *[_type in $types && ^._id in subpages[]._ref][0].slug.current
          }.url
        }.url,
        *[_type in $types && ^._id in subpages[]._ref][0] {
          "url": *[_type in $types && ^._id in subpages[]._ref][0].slug.current
        }.url,
        *[_type in $types && ^._id in subpages[]._ref][0].slug.current,
        slug.current
      ]), "/")
    },
    pageMeta {
      robots
    }
  }
`;

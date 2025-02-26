import type { SanityDocument } from "next-sanity";
import { defineField, defineType, Slug } from "sanity";
import { SanityImage } from "@/sanity/schema/types";
import { SanityBlog } from "./blog";
import { SanityPerson } from "./person";
import defineArticleContentSourceField from "@/sanity/utils/defineArticleContentSourceField";
import { PATH_BLOG } from "@/configs/articles";
import { SanityPageMeta } from "../presentation/pageType/pageMeta";
import { Url } from "url";

export type SanityClub = SanityDocument & {
    name: string;
    logo?: SanityImage;
    countrry: string;
    memberType: string;
    website: Url;
  };

export default defineType({
    name: 'club',
    type: 'document',
    title: 'Club',
    fields: [
      defineField({
        name: 'club',
        type: 'string',
        title: 'Club Name'
      }),
      defineField({
        name: 'logo',
        type: 'image',
        title: 'Club Logo',
        options: {
          hotspot: true
        }
      }),
      defineField({
        name: 'country',
        type: 'string',
        title: 'Country'
      }),
      defineField({
        name: 'memberType',
        type: 'string',
        title: 'Member Type'
      }),
      defineField({
        name: 'website',
        type: 'url',
        title: 'Website'
      })
    ]
  });
  
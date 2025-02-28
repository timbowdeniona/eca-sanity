import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { SanityImage } from "@/sanity/schema/types";
import { Url } from "url";

export type SanityClub = SanityDocument & {
  name: string;
  logo?: SanityImage;
  country: string;
  memberType: string;
  website: Url;
};

export default defineType({
  name: "club",
  type: "document",
  title: "Club",
  fields: [
    defineField({
      name: "club",
      type: "string",
      title: "Club Name",
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Club Logo",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "country",
      type: "string",
      title: "Country",
    }),
    defineField({
      name: "memberType",
      type: "string",
      title: "Member Type",
    }),
    defineField({
      name: "website",
      type: "url",
      title: "Website",
    }),
  ],
});

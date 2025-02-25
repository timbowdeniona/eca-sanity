import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { SanityImage } from "@/sanity/schema/types";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";
import defineTitleField from "@/sanity/utils/defineTitle";
import { GrContactInfo } from "react-icons/gr";

export type SanityContactUs = SanityDocument & {
  headline: string;
  name?: string;
  image?: SanityImage;
  imageAlt?: string;
  email?: string;
  gcseEmail?: string;
  aLevelEmail?: string;
  role?: string;
  telephone?: string;
  officeHours?: string;
  xUsername?: string;
  xHeadline?: string;
  xTimelineAlt?: string;
};

export default defineType({
  type: "document",
  name: "contactUs",
  title: "Contact Us",
  icon: GrContactInfo,
  groups: [
    {
      name: "contactUs",
      title: "Contact Us",
    },
    {
      name: "xTimeline",
      title: "X Timeline",
    },
  ],
  fields: [
    defineTitleField(),
    defineField({
      group: "contactUs",
      name: "headline",
      type: "string",
      initialValue: "Contact Us",
      validation: rule => rule.required(),
    }),
    defineField({
      group: "contactUs",
      name: "name",
      title: "Contact Person",
      type: "string",
    }),
    defineField({
      group: "contactUs",
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          title: "Alternate Text",
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      group: "contactUs",
      name: "email",
      type: "string",
    }),
    defineField({
      group: "contactUs",
      name: "gcseEmail",
      title: "GCSE Email",
      type: "string",
    }),
    defineField({
      group: "contactUs",
      name: "aLevelEmail",
      title: "A-Level Email",
      type: "string",
    }),
    defineField({
      group: "contactUs",
      name: "role",
      type: "string",
    }),
    defineField({
      group: "contactUs",
      name: "telephone",
      type: "string",
    }),
    defineField({
      group: "contactUs",
      name: "officeHours",
      type: "string",
    }),
    defineField({
      group: "xTimeline",
      name: "xUsername",
      title: "X Username",
      description: "X/Twitter Username without @",
      type: "string",
      initialValue: "AQA",
    }),
    defineField({
      group: "xTimeline",
      name: "xHeadline",
      title: "X Headline",
      type: "string",
      initialValue: "Join the conversation",
    }),
    defineField({
      group: "xTimeline",
      name: "xTimelineAlt",
      title: "X Alternative Text",
      type: "string",
      initialValue: "Tweets by AQA",
    }),
    defineSectionMetaField(),
  ],
  preview: {
    select: {
      title: "title",
      headline: "headline",
      media: "image",
    },
    prepare: ({ title, headline, media }) => ({
      media,
      title: title || headline,
      subtitle: "Contact Us",
    }),
  },
});

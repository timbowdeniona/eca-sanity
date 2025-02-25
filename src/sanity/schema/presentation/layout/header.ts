import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityRichText } from "@/sanity/utils/richtext";
import type { SanityLink } from "../../information/link";
import defineRichTextField from "@/sanity/utils/richtext";

type MainLinkTitle = {
  _type: "title";
  title: string;
};
type MainLinkBreak = {
  _type: "break";
};
type MainLinkBlank = {
  _type: "blank";
};

export type MainLinkMember =
  | MainLinkTitle
  | SanityLink
  | MainLinkBreak
  | MainLinkBlank;

export type MainLink = {
  link: SanityLink;
  links?: MainLinkMember[];
};
export type SanityHeader = SanityDocument & {
  title: string;
  topBanner?: SanityRichText;
  topLinks?: SanityLink[];
  mainLinks?: MainLink[];
};

export default defineType({
  type: "document",
  name: "header",
  title: "Header",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineRichTextField({
      name: "topBanner",
      title: "Top Banner",
    }),
    defineField({
      name: "topLinks",
      title: "Top Links",
      type: "array",
      of: [
        defineArrayMember({
          name: "link",
          title: "Link",
          type: "reference",
          to: [
            {
              type: "link",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "mainLinks",
      title: "Main Links",
      type: "array",
      of: [
        defineArrayMember({
          name: "mainLink",
          title: "Main Link",
          type: "object",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "reference",
              to: [
                {
                  type: "link",
                },
              ],
              validation: rule => rule.required(),
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [
                defineArrayMember({
                  name: "title",
                  title: "Title",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: rule => rule.required(),
                    }),
                  ],
                  validation: rule => rule.required(),
                  preview: {
                    select: {
                      title: "title",
                    },
                    prepare: ({ title }) => ({
                      title,
                      subtitle: "Title",
                    }),
                  },
                }),
                defineArrayMember({
                  name: "link",
                  title: "Link",
                  type: "reference",
                  to: [
                    {
                      type: "link",
                    },
                  ],
                }),
                defineArrayMember({
                  name: "break",
                  title: "Break",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Break",
                      type: "string",
                      initialValue: "Break",
                      readOnly: true,
                    }),
                  ],
                }),
                defineArrayMember({
                  name: "blank",
                  title: "Blank",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Blank",
                      type: "string",
                      initialValue: "Blank",
                      readOnly: true,
                    }),
                  ],
                }),
                defineArrayMember({
                  name: "spacer",
                  title: "Spacer",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Spacer",
                      type: "string",
                      initialValue: "Spacer",
                      readOnly: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "link.title",
              subtitle: "link.url",
            },
          },
        }),
      ],
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Header",
      };
    },
  },
});

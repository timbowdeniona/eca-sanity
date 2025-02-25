import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityRichText } from "@/sanity/utils/richtext";
import type { SanityLink } from "../../information/link";
import defineRichTextField from "@/sanity/utils/richtext";

export type SanityFooterBreak = SanityDocument & {
  _type: "break";
};
export type SanityFooter = SanityDocument & {
  title: string;
  links?: (SanityLink | SanityFooterBreak)[];
  socials?: SanityLink[];
  credits?: SanityRichText;
};

export default defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "links",
      title: "Links",
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
      ],
    }),
    defineField({
      name: "socials",
      title: "Socials",
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
    defineRichTextField({
      name: "credits",
      title: "Credits",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Footer",
      };
    },
  },
});

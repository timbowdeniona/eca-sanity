import type { SanityDocument } from "next-sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { SelectIcon } from "@sanity/icons";

export type SocialShareItem = {
  title: string;
  identifier: string;
  shareLink: string;
  sharingText?: string;
  enabled: boolean;
};

export type SanitySocialShare = SanityDocument & {
  title: string;
  icons: SocialShareItem[];
};

export default defineType({
  type: "document",
  name: "socialShare",
  title: "Social Share Icons",
  icon: SelectIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "icons",
      title: "Icons",
      type: "array",
      of: [
        defineArrayMember({
          name: "icon",
          title: "Icon",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: rule => rule.required(),
            }),
            defineField({
              name: "identifier",
              title: "Identifier",
              type: "string",
              validation: rule => rule.required(),
            }),
            defineField({
              name: "shareLink",
              title: "Sharing Link",
              type: "string",
              description:
                "Used to create the sharing link for the particular Social Media platform",
              validation: rule => rule.required(),
            }),
            defineField({
              name: "sharingText",
              title: "Sharing Text",
              type: "string",
              description: "Used to add to the tweet/post when sharing a URL",
            }),
            defineField({
              name: "enabled",
              title: "Enabled",
              type: "boolean",
              validation: rule => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

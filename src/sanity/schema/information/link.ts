import { defineField, defineType, SanityDocument } from "sanity";
import { mediaByUrl } from "@/sanity/utils/mediaByUrl";
import isUndefined from "lodash/isUndefined";

export type SanityLinkType = "reference" | "url";

export type SanityLink = SanityDocument & {
  title: string;
  type: SanityLinkType;
} & (
    | { type: "url"; url: string; internal?: never }
    | { type: "reference"; internal: string; url?: never }
  );

const linkTypes: Record<SanityLinkType, string> = {
  reference: "Internal Page",
  url: "URL / Anchor Link (#)",
};

export default defineType({
  name: "link",
  title: "Links",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      initialValue: "url",
      options: {
        list: Object.keys(linkTypes).map(value => ({
          title: linkTypes[value as SanityLinkType],
          value,
        })),
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "internal",
      title: "Internal Page",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ document }) => document?.type !== "reference",
      validation: rule =>
        rule.custom((field, context) => {
          if (context.document?.type === "reference") {
            if (isUndefined(field)) {
              return "Reference is required";
            }

            if (context.document?.url) {
              return "The `URL / Anchor Link (#)` field must be empty";
            }
          }

          return true;
        }),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      hidden: ({ document }) => document?.type !== "url",
      validation: rule =>
        rule.custom((field, context) =>
          context.document?.type === "url"
            ? !isUndefined(field) || "URL is required"
            : true,
        ),
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
      internal: "internal",
      slug: "internal.slug.current",
    },
    prepare: ({ title, url, internal, slug }) => ({
      media: url && mediaByUrl(url),
      title,
      subtitle: url || (internal ? slug : ""),
    }),
  },
});

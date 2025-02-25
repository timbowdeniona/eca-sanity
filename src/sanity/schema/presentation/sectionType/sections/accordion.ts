import type { SanityDocument } from "next-sanity";
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

import type { SanityRichText } from "@/sanity/utils/richtext";
import defineRichTextField from "@/sanity/utils/richtext";
import defineSectionMetaField from "@/sanity/utils/defineSectionMetaField";

export type SanityAccordionItem = {
  title: string;
  content: SanityRichText;
};

export type SanityAccordion = SanityDocument & {
  title: string;
  items: SanityAccordionItem[];
};

export default defineType({
  type: "document",
  name: "accordion",
  title: "Accordion",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "For internal use only",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: rule => rule.required(),
            }),
            defineRichTextField({
              name: "content",
              title: "Content",
              validation: rule => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineSectionMetaField(),
  ],
});

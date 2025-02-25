import { defineArrayMember, defineField } from "sanity";
import isUndefined from "lodash/isUndefined";

import type {
  Attachment,
  BlockStyle,
  DefineOptions,
  SchemaField,
} from "@/sanity/types";
import type { RichTextValue } from "@/components/sanity/richtext";
import { existingBlockStyles } from "@/sanity/types";
import { PiImageLight, PiPlusLight } from "react-icons/pi";
import { MdNumbers } from "react-icons/md";
import { DocumentsIcon, LinkIcon } from "@sanity/icons";

export type SanityRichText = RichTextValue;

export type RichtextDefineOptions = DefineOptions & {
  attachments?: Attachment[];
  blockStyles?: BlockStyle[];
};

const defaultBlockStyles: BlockStyle[] = [
  "normal",
  "lead",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "blockquote",
];

const defineRichTextField = (
  schemaField: Omit<SchemaField, "type" | "of">,
  {
    attachments = ["imageBlock", "reference"],
    blockStyles = defaultBlockStyles,
    ...defineOptions
  }: RichtextDefineOptions = {},
) =>
  defineField(
    {
      ...schemaField,
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: blockStyles.map(value => ({
            title: existingBlockStyles[value],
            value,
          })),
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                icon: LinkIcon,
                fields: [
                  {
                    name: "href",
                    title: "Link",
                    description: "Use for hard-coded links or anchors.",
                    type: "string",
                  },
                ],
              },
              {
                name: "internal",
                type: "object",
                title: "Internal Page",
                icon: DocumentsIcon,
                fields: [
                  {
                    name: "href",
                    title: "Link",
                    description:
                      "Use to link to internal pages, anchor links (bookmarks) and external URLs.",
                    type: "reference",
                    to: [{ type: "link" }],
                  },
                ],
              },
              {
                name: "anchorTargetId",
                type: "object",
                title: "Anchor Target ID",
                icon: MdNumbers,
                fields: [
                  {
                    name: "targetId",
                    title: "Anchor Target ID",
                    type: "string",
                    description:
                      "ID for internal anchor links. E.g. `footer`, `what-you-can-request`, `contact-us`.",
                  },
                ],
              },
            ],
          },
        }),
        ...attachments
          .map(attachment => {
            switch (attachment) {
              case "image":
                return defineArrayMember({
                  type: "image",
                  icon: PiImageLight,
                  fields: [
                    {
                      title: "Alternate Text",
                      name: "alt",
                      type: "string",
                    },
                    {
                      title: "Class Name",
                      name: "className",
                      type: "string",
                    },
                  ],
                  title: "Image",
                });
              case "imageBlock":
                return defineArrayMember({
                  type: "imageBlock",
                  icon: PiImageLight,
                  title: "Image",
                });
              case "reference":
                return defineArrayMember({
                  type: "reference",
                  icon: PiPlusLight,
                  title: "Content",
                  to: [
                    {
                      type: "cta",
                    },
                  ],
                });
              default:
                return undefined;
            }
          })
          .filter(arrayMember => !isUndefined(arrayMember)),
      ],
    } as SchemaField,
    defineOptions as DefineOptions,
  );

export default defineRichTextField;

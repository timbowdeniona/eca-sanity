import type { SanityDocument } from "next-sanity";
import type { Slug, SlugValidationContext } from "sanity";
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";
import isUndefined from "lodash/isUndefined";
import trim from "lodash/trim";
import slugify from "slugify";

import type { SanityAQAColour } from "../../information/aqaColour";
import type { SanityImage } from "../../types";
import type { SanityPageMeta } from "./pageMeta";
import type { SanitySectionMeta } from "../sectionType/sectionMeta";

import type { SanityAccordion } from "@/sanity/schema/presentation/sectionType/sections/accordion";
import type { SanityArticleCards } from "../sectionType/sections/articleCards";
import type { SanityArticleList } from "../sectionType/sections/articleList";
import type { SanityFeaturePromo } from "@/sanity/schema/presentation/sectionType/sections/featurePromo";
import type { SanityFourColumn } from "@/sanity/schema/presentation/sectionType/sections/fourColumn";
import type { SanityHero } from "@/sanity/schema/presentation/sectionType/sections/hero";
import type { SanityImageBlock } from "@/sanity/schema/presentation/sectionType/sections/imageBlock";
import type { SanityKeyFacts } from "@/sanity/schema/presentation/sectionType/sections/keyFacts";
import type { SanityMasthead } from "@/sanity/schema/presentation/sectionType/sections/masthead";
import type { SanityPlaceholder } from "@/sanity/schema/presentation/sectionType/sections/placeholder";
import type { SanityQuickLinks } from "@/sanity/schema/presentation/sectionType/sections/quickLinks";
import type { SanityQuoteBanner } from "@/sanity/schema/presentation/sectionType/sections/quoteBanner";
import type { SanityPromoTextCards } from "@/sanity/schema/presentation/sectionType/sections/promoTextCards";
import type { SanityVideoCards } from "@/sanity/schema/presentation/sectionType/sections/videoCards";
import type { SanityTextAndImage } from "@/sanity/schema/presentation/sectionType/sections/textAndImage";
import type { SanityTextBlock } from "@/sanity/schema/presentation/sectionType/sections/textBlock";
import type { SanityThreeColumn } from "@/sanity/schema/presentation/sectionType/sections/threeColumn";
import type { SanityTwoColumn } from "@/sanity/schema/presentation/sectionType/sections/twoColumn";
import type { SanityContactUs } from "@/sanity/schema/presentation/sectionType/sections/contactUs";
import type { SanityCards } from "@/sanity/schema/presentation/sectionType/sections/cards";
import type { SanityCta } from "@/sanity/schema/presentation/sectionType/sections/cta";
import type { SanitySpacer } from "@/sanity/schema/presentation/sectionType/sections/spacer";
import type { SanityEmbed } from "@/sanity/schema/presentation/sectionType/sections/embed";

import { sections } from "../sectionType";
import { apiVersion } from "@/sanity/env";
import defineSectionsField from "../sectionType/defineSectionsField";

export type SanityPageType = "parent" | "child" | "static" | "error";

export type SanityPageStatus = "200" | "404" | "500";

export type SanityPageHeaderVariant = "purple" | "white";

export type SanitySection = { sectionMeta?: SanitySectionMeta } & (
  | SanityAccordion
  | SanityArticleCards
  | SanityArticleList
  | SanityCards
  | SanityContactUs
  | SanityCta
  | SanityEmbed
  | SanityFeaturePromo
  | SanityFourColumn
  | SanityHero
  | SanityImageBlock
  | SanityKeyFacts
  | SanityMasthead
  | SanityPlaceholder
  | SanityPromoTextCards
  | SanityQuoteBanner
  | SanityQuickLinks
  | SanitySpacer
  | SanityTextAndImage
  | SanityTextBlock
  | SanityThreeColumn
  | SanityTwoColumn
  | SanityVideoCards
);

type SanityPageHeader = {
  headline?: string;
  description?: string;
  variant?: SanityPageHeaderVariant;
  image?: SanityImage;
};

export type SanityPage = SanityDocument & {
  name: string;
  title: string;
  type: SanityPageType;
  status: SanityPageStatus;
  slug: Slug;
  header: SanityPageHeader;
  sections?: SanitySection[];
  subpages?: SanityPage[];
  pageMeta: SanityPageMeta;
  parents?: SanityPage[] | null;
};

export type SanityPageWithColour = SanityPage & {
  colour?: SanityAQAColour | null;
};

export const types: Record<SanityPageType, string> = {
  parent: "Parent",
  child: "Child",
  static: "Static",
  error: "Error",
};

const statuses: Record<SanityPageStatus, string> = {
  "200": "200: OK",
  "404": "404: Not Found",
  "500": "500: Server Error",
};

const headerVariants: Record<SanityPageHeaderVariant, string> = {
  purple: "Purple",
  white: "White",
};

export const pageType = defineType({
  type: "document",
  name: "page",
  title: "Pages",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the page used internally only within Sanity Studio",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      description:
        "Select 'parent' if the page contains subpages, else select 'child'.",
      type: "string",
      initialValue: "parent",
      validation: rule => rule.required(),
      options: {
        list: Object.keys(types).map(value => ({
          title: types[value as SanityPageType],
          value,
        })),
        layout: "radio",
      },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "200",
      validation: rule =>
        rule.custom((field, context) => {
          switch (context.document?.type) {
            case "error":
              return !isUndefined(field) || "Status is required";
            default:
              return true;
          }
        }),
      hidden: ({ document }) =>
        !["error"].includes((document?.type as string | undefined) ?? ""),
      options: {
        list: Object.keys(statuses).map(value => ({
          title: statuses[value as SanityPageStatus],
          value,
        })),
        layout: "radio",
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        isUnique: async (
          slug: string,
          context: SlugValidationContext,
        ): Promise<boolean> => {
          const { document, getClient } = context;
          const client = getClient({ apiVersion });
          const id = document?._id?.replace(/^drafts\./, "");
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug,
          };
          return client.fetch(
            `
            !defined(*[
              !(_id in [$draft, $published]) && 
              _type == 'page' &&
              type in ['parent', 'child', 'static'] &&
              slug.current == $slug
            ][0]._id)
          `,
            params,
          );
        },
        source: "title",
        slugify: (input: string) =>
          `/${slugify(input, {
            lower: true,
            strict: true,
          })}`,
      },
      validation: rule =>
        rule.custom((field, context) => {
          const value = field as Slug | undefined;
          switch (context.document?.type) {
            case "parent":
              if (isUndefined(value)) {
                return "Slug is required";
              }
              if (value?.current !== "/" && value?.current?.includes("/")) {
                return "Slug does not need to start with /";
              }
              return true;
            case "static":
              if (isUndefined(value)) {
                return "Slug is required";
              }
              if (value?.current !== "/" && value?.current?.includes("/")) {
                return "Slug does not need to start with /";
              }
              return true;
            case "child":
              if (isUndefined(value)) {
                return "Slug is required";
              }
              if (value?.current !== "/" && value?.current?.includes("/")) {
                return "Slug does not need to start with /";
              }
              if (trim(String(value?.current), "/ ").split("/").length > 1) {
                return "Child page cannot have a slug with more than one segment";
              }
              return true;
            default:
              return true;
          }
        }),
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      hidden: ({ document }) =>
        !["static", "parent"].includes(
          (document?.type as string | undefined) ?? "",
        ),
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "variant",
          title: "Variant",
          type: "string",
          initialValue: "purple",
          options: {
            list: Object.keys(headerVariants).map(value => ({
              title: headerVariants[value as SanityPageHeaderVariant],
              value,
            })),
            layout: "radio",
          },
        }),
      ],
    }),
    defineSectionsField(),
    defineField({
      name: "subpages",
      title: "Subpages",
      type: "array",
      hidden: ({ document }) =>
        !["parent"].includes((document?.type as string | undefined) ?? ""),
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            {
              type: "page",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "name",
      slug: "slug.current",
      status: "status",
      template: "template",
      title: "title",
      type: "type",
    },
    prepare: ({ name, slug, status, title, type }) => {
      switch (type) {
        case "child":
        case "parent":
        case "static":
          return {
            title: name ?? title,
            subtitle: slug,
          };
        case "error":
          return {
            title: name ?? title,
            subtitle: `Error: ${status}`,
          };
        default:
          return {
            title: name ?? title ?? "Untitled",
            subtitle: "Unknown page type",
          };
      }
    },
  },
});

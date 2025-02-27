import { defineArrayMember, defineField, defineType, Slug } from "sanity";
import { IoNewspaperOutline } from "react-icons/io5";
import { SanityDocument } from "next-sanity";
import { SanityAQAColour } from "./aqaColour";
import type {
  SanityArticleContentSource,
  SanityImage,
} from "@/sanity/schema/types";
import type { SanityRichText } from "@/sanity/utils/richtext";
import defineArticleContentSourceField from "@/sanity/utils/defineArticleContentSourceField";
import { PATH_NEWS } from "@/configs/articles";
import { SanityPageMeta } from "../presentation/pageType/pageMeta";
import { SanityNewsCategory } from "./newsCategory";
import { SanityClub } from "./club";

export type SanityNewsArticle = SanityDocument & {
  title: string;
  articleImage?: SanityImage;
  clubs: SanityClub[];
  badgeVariant: SanityAQAColour;
  badgeText: string;
  newsDate: Date;
  newsEndDate?: Date;
  showContactDetails: boolean;
  showOnHomepage: boolean;
  showOnNewspolicyPage: boolean;
  headline: string;
  contactName: string;
  contactEmail: string;
  contactPhoneNumber: string;
  summary: string;
  body: SanityRichText;
  articleLink?: string;
  internalPageSlug?: Slug;
  slug?: Slug;
  contentSource: SanityArticleContentSource;
  openInNewTab?: boolean;
  pageMeta?: SanityPageMeta;
  categories: Array<SanityNewsCategory>;
};

export default defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  icon: IoNewspaperOutline,
  groups: [
    {
      name: "summary",
      title: "Summary",
    },
    {
      name: "article",
      title: "Article",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "article",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "newsCategory" }],
        }),
      ],
    }),
    defineField({
      name: "clubs",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "club" }],
        }),
      ],
    }),
    defineField({
      name: "articleImage",
      type: "image",
      group: ["article", "summary"],
      fields: [
        {
          title: "Alternate Text",
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "headline",
      type: "string",
      group: ["article", "summary"],
    }),
    defineField({
      name: "contactName",
      type: "string",
      group: "summary",
    }),
    defineField({
      name: "contactEmail",
      type: "string",
      group: "summary",
    }),
    defineField({
      name: "contactPhoneNumber",
      type: "text",
      group: "summary",
    }),
    defineField({
      name: "newsDate",
      type: "date",
      group: "summary",
      title: "News Date",
    }),
    defineField({
      name: "newsEndDate",
      type: "date",
      group: "summary",
      title: "News End Date",
    }),
    defineField({
      name: "showContactDetails",
      type: "boolean",
      group: "summary",
      title: "Show Contact Details",
    }),
    defineField({
      name: "showOnHomePage",
      type: "boolean",
      group: "summary",
      title: "Show On Home Page",
    }),
    defineField({
      name: "showOnNewsPolicyPage",
      type: "boolean",
      group: "summary",
      title: "Show On Policy Page",
    }),
    defineField({
      name: "summary",
      type: "text",
    }),
    ...defineArticleContentSourceField({
      externalUrlField: "articleLink",
      rootPath: PATH_NEWS,
      group: "article",
    }),
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
    }),
  ],
});

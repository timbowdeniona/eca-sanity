import type { StructureBuilder } from "sanity/structure";
import { CogIcon } from "@sanity/icons";
import { DocumentsIcon } from "@sanity/icons";
import { MasterDetailIcon } from "@sanity/icons";
import { EnvelopeIcon } from "@sanity/icons";
import { ProjectsIcon } from "@sanity/icons";
import { IoShirtOutline } from "react-icons/io5";

import { filterItems } from "./utils";
import { sections } from "@/sanity/schema/presentation/sectionType";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Site Settings section
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.documentListItem()
                .schemaType("header")
                .title("Header")
                .id("header"),
              S.documentListItem()
                .schemaType("footer")
                .title("Footer")
                .id("footer"),
              S.documentListItem()
                .schemaType("socialShare")
                .title("Social Share Icons")
                .id("socialShare"),
            ]),
        ),
      S.divider(),
      // All Pages
      S.listItem()
        .title("Pages")
        .icon(DocumentsIcon)
        .child(
          S.documentList().title("Select a Page").filter('_type == "page"'),
        ),
      // News & Blogs
      S.listItem()
        .title("News")
        .icon(EnvelopeIcon)
        .child(S.documentList().title("News").filter('_type == "newsArticle"')),
      S.listItem()
        .title("Blogs")
        .icon(MasterDetailIcon)
        .child(S.documentList().title("Blogs").filter('_type == "blogPost"')),
      S.listItem()
        .title("Clubs")
        .icon(IoShirtOutline)
        .child(S.documentList().title("Clubs").filter('_type == "club"')),
      S.divider(),
      // All Sections
      S.listItem()
        .id("sections")
        .title("Sections")
        .icon(ProjectsIcon)
        .child(
          S.list()
            .id("sections")
            .title("Sections")
            .items(filterItems(S.documentTypeListItems(), sections)),
        ),
    ]);

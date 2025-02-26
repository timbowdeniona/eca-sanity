import { type SchemaTypeDefinition } from "sanity";

import { pageType } from "./presentation/pageType";
import aqaColour from "./information/aqaColour";
import button from "./information/button";
import card from "./information/card";
import club from "./information/club";
import imageSet from "./information/imageSet";
import keyFactImage from "./information/keyFactImage";
import keyFactText from "./information/keyFactText";
import link from "./information/link";
import pageMeta from "./presentation/pageType/pageMeta";
import sectionMeta from "./presentation/sectionType/sectionMeta";
import newsArticle from "./information/newsArticle";
import newsCategory from "./information/newsCategory";

import { sections } from "./presentation/sectionType";

import layout from "./presentation/layout";
import blog from "./information/blog";
import blogPost from "./information/blogPost";
import person from "./information/person";

export const information = [
  aqaColour,
  blog,
  blogPost,
  button,
  card,
  imageSet,
  keyFactImage,
  keyFactText,
  link,
  newsArticle,
  newsCategory,
  pageMeta,
  person,
  sectionMeta,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, ...layout, ...sections, ...information],
};

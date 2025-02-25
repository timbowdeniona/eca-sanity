import { groq } from "next-sanity";

import { accordionFragment } from "./accordion";
import { articleCardsFragment } from "./articleCards";
import { articleListFragment } from "./articleList";
import { cardsFragment } from "./cards";
import { codeBlockFragment } from "./codeBlock";
import { collectionFragment } from "./collection";
import { contactUsFragment } from "./contactUs";
import { ctaFragment } from "./cta";
import { embedFragment } from "./embed";
import { eventsFragment } from "./events";
import { featurePromoFragment } from "./featurePromo";
import { heroFragment } from "./hero";
import { imageBlockFragment } from "./imageBlock";
import { keyFactsFragment } from "./keyFacts";
import { mastheadFragment } from "./masthead";
import { personalisedFragment } from "./personalised";
import { placeholderFragment } from "./placeholder";
import { promoTextCardsFragment } from "./promoTextCards";
import { quickLinksFragment } from "./quickLinks";
import { qualificationCardsFragment } from "./qualificationCards";
import { quoteBannerFragment } from "./quoteBanner";
import { resourceCardsFragment } from "./resourceCards";
import { resourceListFragment } from "./resourceList";
import { spacerFragment } from "./spacer";
import { tableFragment } from "./table";
import { textAndImageFragment } from "./textAndImage";
import { textBlockFragment } from "./textBlock";
import { videoCardsFragment } from "./videoCards";
import { videoPlayerFragment } from "./videoPlayer";

export const sectionsFragment = groq`
  _id,
  _type,
  sectionMeta {
    id
  },
  _type == 'accordion' => {
    ${accordionFragment}
  },
  _type == 'articleCards' => {
    ${articleCardsFragment}
  },
  _type == 'articleList' => {
    ${articleListFragment}
  },
  _type == 'cards' => {
    ${cardsFragment}
  },
  _type == 'codeBlock' => {
    ${codeBlockFragment}
  },
  _type == 'sectionsCollection' => {
    ${collectionFragment}
  },
  _type == 'contactUs' => {
    ${contactUsFragment}
  },
  _type == 'cta' => {
    ${ctaFragment}
  },
  _type == 'embed' => {
    ${embedFragment}
  },
  _type == 'events' => {
    ${eventsFragment}
  },
  _type == 'featurePromo' => {
    ${featurePromoFragment}
  },
  _type == 'hero' => {
    ${heroFragment}
  },
  _type == 'imageBlock' => {
    ${imageBlockFragment}
  },
  _type == 'keyFacts' => {
    ${keyFactsFragment}
  },
  _type == 'masthead' => {
    ${mastheadFragment}
  },
  _type == 'personalised' => {
    ${personalisedFragment}
  },
  _type == 'placeholder' => {
    ${placeholderFragment}
  },
  _type == 'promoTextCards' => {
    ${promoTextCardsFragment}
  },
  _type == 'qualificationCards' => {
    ${qualificationCardsFragment}
  },
  _type == 'quickLinks' => {
    ${quickLinksFragment}
  },
  _type == 'quoteBanner' => {
    ${quoteBannerFragment}
  },
  _type == 'resourceCards' => {
    ${resourceCardsFragment}
  },
  _type == 'resourceList' => {
    ${resourceListFragment}
  },
  _type == 'spacer' => {
    ${spacerFragment}
  },
  _type == 'table' => {
    ${tableFragment}
  },
  _type == 'textAndImage' => {
    ${textAndImageFragment}
  },
  _type == 'textBlock' => {
    ${textBlockFragment}
  },
  _type == 'videoCards' => {
    ${videoCardsFragment}
  },
  _type == 'videoPlayer' => {
    ${videoPlayerFragment}
  }
`;

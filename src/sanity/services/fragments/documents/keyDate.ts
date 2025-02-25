import { groq } from "next-sanity";

export const keyDateFragment = groq`
  _id,
  _type,
  title,
  category,
  description,
  date,
  duration,
  keyDateType,
  source,
  qualification -> {
    _id,
    name,
    specificationNumber
  },
  qualificationLevel -> {
    _id,
    name,
  },
  startTime,
  subject -> {
    _id,
    name,
  },
  termSeries,
  outputText,
`;

import { groq } from "next-sanity";

export const eventsFragment = groq`
  _id,
  _type,
  title,
  description,
  source,
  variant,
  type,
  subject,
  qualification,
  "items": select(
    source == "subject" => *[_type == "keyDate" && (keyDateType == ^.type || ^.type == "all") && subject._ref == ^.subject._ref]{
      _id,
      _type,
      title,
      date,
      keyDateType,
      qualification,
      subject,
    },
    source == "qualification" => *[_type == "keyDate" && (keyDateType == ^.type || ^.type == "all") && qualification._ref == ^.qualification._ref]{
      _id,
      _type,
      title,
      date,
      keyDateType,
      qualification,
      subject,
    },
    source == "personalised" => []
  )
`;

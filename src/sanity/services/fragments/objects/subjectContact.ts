import { groq } from "next-sanity";
import { imageFragment } from "../documents/image";

export const subjectContactFragment = groq`
  contactPerson,
  contactPersonRole,
  contactEmail,
  contactGcseEmail,
  contactALevel,
  contactTelephone,
  officeHours,
  image {
    ${imageFragment}
  }
`;

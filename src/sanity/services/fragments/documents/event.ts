import { groq } from "next-sanity";

export const accessPlanitEventFragment = groq`
    _id,
    _type,
    educationTier,
    educationTierCode,
    subjects[],
    levels[],
    themes[],
    courseID,
    courseTitle,
    snippetSuitableFor,
    snippetFocus,
    snippetMoreInformation,
    eventNumber,
    location,
    reference,
    startDate,
    startTime,
    endDate,
    endTime,
    eventYear,
    fee,
    availability,
    trainer,
    bookingUrl,
    enquiryUrl,
    spacesAvailable,
    maxPlaces,
    additionalInformation,
    joiningInstructions,
    deliveryChannel,
    specCodes,
    sessional,
    publishDate,
    "eventsCount": count(*[_type == 'event' && availability != 'Cancelled' && courseID == ^.courseID]._id),
`;

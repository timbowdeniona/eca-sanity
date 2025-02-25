import Image from "next/image";

import iconLinkedIn from "../assets/images/icon-linkedin.svg";
import iconX from "../assets/images/icon-x.svg";
import iconYouTube from "../assets/images/icon-youtube.svg";

export const mediaByUrl = (url: string): JSX.Element | null => {
  if (url.includes("linkedin.com")) {
    return <Image alt="LinkedIn" src={iconLinkedIn} />;
  }
  if (url.includes("x.com") || url.includes("twitter.com")) {
    return <Image alt="X" src={iconX} />;
  }
  if (url.includes("youtube.com")) {
    return <Image alt="YouTube" src={iconYouTube} />;
  }
  return null;
};

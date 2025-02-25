"use client";

import { ComponentProps } from "react";
import { OTC_TARGETING } from "@/configs/one-trust";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { cn } from "@/utils/helpers/cn";
import Link from "@/components/base/link";

type XTimelineProps = {
  headline?: string;
  username: string;
  alt: string;
} & ComponentProps<"div">;

/**
 * Inject Twitter widget script.
 */
const injectScript = () => {
  const s = document.createElement("script");
  s.setAttribute("src", "https://platform.twitter.com/widgets.js");
  s.setAttribute("async", "true");
  document.head.appendChild(s);
};

export const XTimeline = ({ headline, username, alt }: XTimelineProps) => {
  const {
    loading,
    hasCookieConsent,
    showCookieConsent,
    acceptCookies,
    CookieConsentBanner,
    CookieConsentLoader,
  } = useCookieConsent(OTC_TARGETING, {
    postRender: injectScript,
  });

  return (
    <div className="flex flex-col gap-8 overflow-hidden bg-white p-6 lg:aspect-square lg:p-12 lg:pr-10">
      {headline && <h2 className="text-purple">{headline}</h2>}
      <div className="max-h-[400px] grow overflow-y-auto lg:max-h-none">
        {loading && <CookieConsentLoader className="py-4" />}
        {!loading && showCookieConsent && (
          <div className={cn("size-full bg-grey flex flex-col justify-end")}>
            <CookieConsentBanner className="bottom-0" onClick={acceptCookies} />
          </div>
        )}
        {!loading && hasCookieConsent && (
          <Link
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="twitter-timeline"
            data-dnt="true"
            href={"https://twitter.com/" + username}
          >
            {alt}
          </Link>
        )}
      </div>
    </div>
  );
};

export default XTimeline;

"use client";

import { OTC_PERFORMANCE } from "@/configs/one-trust";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

function GTMBodySnippet() {
  const { hasCookieConsent } = useCookieConsent(OTC_PERFORMANCE);

  return (
    !!gtmContainerId &&
    hasCookieConsent && (
      // Google Tag Manager (noscript)
      <noscript>
        <iframe
          height="0"
          src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
          style={{ display: "none", visibility: "hidden" }}
          width="0"
        />
      </noscript>
      // End Google Tag Manager (noscript)
    )
  );
}

export default GTMBodySnippet;

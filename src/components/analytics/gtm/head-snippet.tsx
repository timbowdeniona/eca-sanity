"use client";

import { OTC_PERFORMANCE } from "@/configs/one-trust";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import Script from "next/script";

const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

function GTMHeadSnippet() {
  const { hasCookieConsent } = useCookieConsent(OTC_PERFORMANCE);

  return (
    // Google Tag Manager
    !!gtmContainerId &&
    hasCookieConsent && (
      <Script
        className={`optanon-category-${OTC_PERFORMANCE}`}
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmContainerId}');`,
        }}
        id="gtm-head-script"
        type="text/plain"
      />
      // End Google Tag Manager
    )
  );
}

export default GTMHeadSnippet;

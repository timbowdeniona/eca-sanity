"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const oneTrustConfigId = process.env.NEXT_PUBLIC_ONE_TRUST_CONFIG_ID;

export default function OneTrustConsent() {
  const currentPath = usePathname();

  // OneTrust Support for SPA navigation
  // Source: https://my.onetrust.com/s/article/UUID-69162cb7-c4a2-ac70-39a1-ca69c9340046?language=en_US
  useEffect(() => {
    const settingBtns = document.getElementsByClassName("ot-sdk-show-settings");
    const cookieList = document.querySelector("#ot-sdk-cookie-policy");
    const consentSdk = document.getElementById("onetrust-consent-sdk");

    // Only run the code below if at least 1 setting button or cookie list is found
    if ((settingBtns || cookieList) && window.OneTrust) {
      // Remove the OneTrust SDK if it exists
      if (consentSdk) {
        consentSdk.remove();
      }

      if (window.OneTrust) {
        window.OneTrust.Init();

        setTimeout(() => {
          window.OneTrust?.LoadBanner();

          // Add event listener to setting buttons
          for (let i = 0; i < settingBtns.length; i++) {
            (settingBtns[i] as HTMLButtonElement).onclick = e => {
              e.stopImmediatePropagation();
              window.OneTrust?.ToggleInfoDisplay();
            };
          }
        }, 1000);
      }
    }
  }, [currentPath]);

  return (
    oneTrustConfigId && (
      <>
        {/* By removing OtAutoBlock.js, scripts including next.js chunks will no longer be 
            initially blocked thus avoiding unexpected functionality issues
        <Script
          src={`https://cdn-ukwest.onetrust.com/consent/${oneTrustConfigId}/OtAutoBlock.js`}
          type="text/javascript"
        /> */}
        <Script
          data-domain-script={oneTrustConfigId}
          src="https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js"
          type="text/javascript"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: "function OptanonWrapper() {}",
          }}
          id="optanon-wrapper-script"
          type="text/javascript"
        />
      </>
    )
  );
}

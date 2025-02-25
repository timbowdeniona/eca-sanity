import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { CookieCategory } from "@/configs/one-trust";
import CookieConsentBanner from "@/components/storybook/cookie-consent-banner";
import CookieConsentLoader from "@/components/storybook/cookie-consent-banner/loader";

/**
 * Convert OptanonConsent cookie string to object.
 */
export const getOptanonConsentObject = () => {
  const consent = Cookie.get("OptanonConsent")?.split("&");

  return consent?.reduce((acc: Record<string, string>, item: string) => {
    const [key, value] = item.split("=");
    acc[key] = value;
    return acc;
  }, {});
};

export const useCookieConsent = (
  cookieCategory: CookieCategory,
  options?: {
    postRender?: () => void;
  },
) => {
  const [loading, setLoading] = useState(true);
  const [hasCookieConsent, setHasCookieConsent] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const consent = getOptanonConsentObject();

    // If user has accepted the cookie category, render the component.
    if (consent?.groups?.includes(`${cookieCategory}:1`)) {
      processRendering();
    }
    // Otherwise, show cookie consent.
    else {
      setShowCookieConsent(true);
    }

    // Hide loader.
    setLoading(false);

    window.addEventListener("OneTrustGroupsUpdated", handleRenderCheck);

    return () => {
      window.removeEventListener("OneTrustGroupsUpdated", handleRenderCheck);
    };
  }, []);

  /**
   * Check if component should be rendered based on cookie category acceptance.
   */
  const handleRenderCheck = () => {
    if (window.OnetrustActiveGroups?.includes(cookieCategory)) {
      processRendering();
    }
  };

  /**
   * Accept Category cookie and render the component.
   */
  const acceptCookies = () => {
    if (!window.OneTrust) {
      return;
    }

    window.OneTrust?.UpdateConsent("Category", `${cookieCategory}:1`);
    processRendering();
  };

  /**
   * Render component and hide cookie consent.
   */
  const processRendering = () => {
    setHasCookieConsent(true);
    setShowCookieConsent(false);
    options?.postRender?.();
  };

  return {
    loading,
    hasCookieConsent,
    showCookieConsent,
    acceptCookies,
    setLoading,
    setHasCookieConsent,
    setShowCookieConsent,
    CookieConsentBanner,
    CookieConsentLoader,
  };
};

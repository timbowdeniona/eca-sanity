"use client";

import React from "react";
import CirclePlayIcon from "@/components/storybook/icons/CirclePlayIcon";
import { OTC_TARGETING } from "@/configs/one-trust";
import { cn } from "@/utils/helpers/cn";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import Link from "@/components/base/link";

type Props = {
  alt?: string;
  border?: boolean;
  src: string;
};

function VideoPlayerIframe({ border = false, src, alt }: Props) {
  const {
    loading,
    hasCookieConsent,
    showCookieConsent,
    acceptCookies,
    CookieConsentBanner,
    CookieConsentLoader,
  } = useCookieConsent(OTC_TARGETING);

  return (
    <>
      {loading && (
        <CookieConsentLoader
          className={cn("aspect-video", border && "border-[6px] border-red")}
        />
      )}
      {!loading && showCookieConsent && (
        <div
          className={cn(
            "grid aspect-video size-full place-content-center bg-grey relative",
            border && "border-[6px] border-red",
          )}
        >
          <CirclePlayIcon className="size-24 fill-[#BDBDBD]" />
          <CookieConsentBanner
            className="absolute bottom-0"
            description={
              <span>
                You can either accept tracking cookies to play this embedded
                video, or you can watch the video directly{" "}
                {
                  <Link
                    className="text-red underline"
                    href={src}
                    target="_blank"
                  >
                    here.
                  </Link>
                }
              </span>
            }
            onClick={acceptCookies}
            title="Accept cookies to watch this video"
          />
        </div>
      )}
      {!loading && hasCookieConsent && (
        <iframe
          allowFullScreen
          className={cn(
            `optanon-category-${OTC_TARGETING}`,
            "aspect-video size-full",
            border && "border-[6px] border-red",
          )}
          data-testid="embed-iframe"
          loading="lazy"
          src={src}
          title={alt}
        />
      )}
    </>
  );
}

export default VideoPlayerIframe;

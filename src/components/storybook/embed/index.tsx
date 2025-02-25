import { ComponentProps, type FC } from "react";
import { cn } from "@/utils/helpers/cn";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import type { CookieCategory } from "@/configs/one-trust";

type Props = {
  className?: string;
  consent?: CookieCategory;
  embedLink: string;
  minHeight?: number;
} & ComponentProps<"div">;

export const Embed: FC<Props> = ({
  className,
  consent,
  embedLink,
  minHeight = 180, // Default minimum height
  ...props
}) => {
  const {
    loading,
    hasCookieConsent,
    showCookieConsent,
    acceptCookies,
    CookieConsentBanner,
    CookieConsentLoader,
  } = useCookieConsent(consent ?? "C0001");
  return (
    <>
      {loading && (
        <CookieConsentLoader className={cn("aspect-video max-h-[280px]")} />
      )}
      {!loading && showCookieConsent && (
        <div
          className={cn(
            "grid aspect-video max-h-[280px] size-full place-content-center bg-grey relative",
          )}
        >
          <CookieConsentBanner
            className="absolute bottom-0"
            description={
              <span>
                You will need to accept tracking cookies before you can view.
              </span>
            }
            onClick={acceptCookies}
            title="Accept cookies to access this content"
          />
        </div>
      )}
      {!loading && hasCookieConsent && (
        <div className="wrapper" {...props}>
          <div className={cn("w-full", className)}>
            <iframe
              className="w-full"
              loading="lazy"
              src={embedLink}
              style={{ minHeight }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Embed;

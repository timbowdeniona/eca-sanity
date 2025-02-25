import { useCookieConsent } from "@/hooks/use-cookie-consent";
import type { CookieCategory } from "@/configs/one-trust";
import { cn } from "@/utils/helpers/cn";
type Props = {
  content: string;
  consent?: CookieCategory;
};

function CodeBlock({ content, consent }: Props) {
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
        <div dangerouslySetInnerHTML={{ __html: content || "" }} />
      )}
    </>
  );
}

export default CodeBlock;

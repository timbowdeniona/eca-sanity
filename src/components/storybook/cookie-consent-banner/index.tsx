import { ReactNode } from "react";
import { Button } from "@/components/storybook/button";
import { cn } from "@/utils/helpers/cn";
import ChevronRight from "@/components/storybook/icons/ChevronRight";
import Link from "@/components/base/link";

export type Props = {
  onClick?: () => void;
  className?: string;
  title?: string;
  description?: string | ReactNode;
};

// NOTE: `@container/ckc` means container class for cookie consent
export const CookieConsentBanner = ({
  className,
  onClick,
  title = "Cookie consent required",
  description = "Accept cookies to view this content.",
}: Props) => {
  return (
    <div className={cn("w-full p-0.5 @container/ckc sm:p-4", className)}>
      <div className="border border-[#DC7D28] bg-[#F8E5D4] p-2 @cmd/ckc:p-4">
        <strong className="mb-1 block text-xs text-neutral @csm/ckc:text-sm @cmd/ckc:text-base">
          {title}
        </strong>
        <p className="text-xs text-neutral @csm/ckc:text-sm">
          {description}
          <span className="ml-1 hidden @cmd/ckc:inline">
            Further information can be found in our{" "}
            <Link
              className="text-red underline"
              href="https://www.aqa.org.uk/about-us/cookie-notice"
              target="_blank"
            >
              cookie notice.
            </Link>
          </span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            className="h-auto !px-3 !py-1.5 text-sm @cmd/ckc:h-12 @cmd/ckc:p-[unset] @cmd/ckc:!px-6 @cmd/ckc:!py-0 @cmd/ckc:text-base"
            mode="button"
            onClick={onClick}
            variant="primary"
          >
            Accept
            <span className="ml-1.5 hidden @sm/ckc:inline">cookies</span>
          </Button>
          <Button
            className="inline-flex h-auto !border-none !bg-transparent !px-3 !py-1.5 text-sm @cmd/ckc:hidden @cmd/ckc:h-12 @cmd/ckc:p-[unset] @cmd/ckc:!px-6 @cmd/ckc:!py-0 @cmd/ckc:text-base"
            href="https://www.aqa.org.uk/about-us/cookie-notice"
            mode="link"
            target="_blank"
            variant="secondary"
          >
            <span className="mr-1.5 hidden @sm/ckc:inline">Cookie</span>
            Notice
            <ChevronRight className="ml-2 inline-block size-3 fill-red @cmd/ckc:size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;

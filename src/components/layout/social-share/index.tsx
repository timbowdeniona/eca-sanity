"use client";

import type { FC } from "react";
import { usePathname } from "next/navigation";

import type { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import SocialShareComponent from "@/components/storybook/social-share";

type Props = {
  rootUrl: string;
  socialShare: SanitySocialShare | null;
};

const SocialShare: FC<Props> = ({ rootUrl, socialShare }) => {
  const pathname = usePathname();

  return (
    <SocialShareComponent
      items={
        socialShare?.icons.map(item => ({
          identifier: item.identifier,
          shareLink: `${item.shareLink}${rootUrl}${pathname}`,
          sharingText: item.sharingText,
          enabled: item.enabled,
        })) ?? []
      }
    />
  );
};

export default SocialShare;

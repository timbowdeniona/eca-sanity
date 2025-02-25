import type { ComponentProps, ReactNode } from "react";

import Link from "@/components/base/link";
import WhatsAppShareIcon from "../icons/WhatsAppShareIcon";
import FacebookShareIcon from "../icons/FacebookShareIcon";
import LinkedInShareIcon from "../icons/LinkedInShareIcon";
import XShareIcon from "../icons/XShareIcon";

export type SocialShareItem = {
  identifier: string;
  shareLink: string;
  sharingText?: string;
  enabled: boolean;
};

type Props = {
  items: Array<SocialShareItem>;
} & ComponentProps<"div">;

const SocialShare = ({ items }: Props) => {
  const socialShareIcons: Record<
    string,
    {
      component: ReactNode;
      title: string;
    }
  > = {
    whatsapp: {
      component: (
        <WhatsAppShareIcon className="size-8 fill-purple hover:fill-purple-40" />
      ),
      title: "WhatsApp",
    },
    linkedin: {
      component: (
        <LinkedInShareIcon className="size-8 fill-purple hover:fill-purple-40" />
      ),
      title: "LinkedIn",
    },
    facebook: {
      component: (
        <FacebookShareIcon className="size-8 fill-purple hover:fill-purple-40" />
      ),
      title: "Facebook",
    },
    x: {
      component: (
        <XShareIcon className="size-8 fill-purple hover:fill-purple-40" />
      ),
      title: "X",
    },
  };

  const filteredSocialShareItems = items.map((item, index) => {
    const icon = Object.keys(socialShareIcons).find(
      identifier => item.identifier === identifier,
    );
    if (!icon || !item.enabled) {
      return null;
    }

    return (
      <li key={item.identifier || index}>
        <Link href={item.shareLink} target="_blank">
          {socialShareIcons[icon]?.component}
          <span className="sr-only">{socialShareIcons[icon]?.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-white">
      <div className="wrapper px-5 py-2 lg:px-10 xl:px-0">
        <div className="flex flex-col items-end">
          <div className="flex flex-row items-center gap-4">
            <p className="font-semibold text-purple">Share this page</p>
            <ul className="flex shrink-0 gap-4">{filteredSocialShareItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;

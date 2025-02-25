import type { FC, ReactNode } from "react";

import type { MarkType } from "@/sanity/types";
import Link from "@/components/base/link";
import { cn } from "@/utils/helpers/cn";
import ExternalLink from "@/components/storybook/icons/ExternalLink";

type MarkLinkValue = {
  href: string;
};

type MarkAnchorTargetIdValue = {
  targetId: string;
};

export type MarkComponentProps = {
  children: ReactNode;
  className?: string;
  value: MarkLinkValue | MarkAnchorTargetIdValue;
};

const markComponents: Record<MarkType, FC<MarkComponentProps>> = {
  link: ({ children, value, className }) => {
    let href = (value as MarkLinkValue)?.href;
    const classNames = cn(
      "text-interface-blue hover:underline hover:text-interface-blue/90",
      className,
    );

    // Regular expression patterns
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
    const telPattern = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
    const urlPattern = /^(?:https?:\/\/)?(?:www\.)?[^\s.]+\.[^\s]{2,}$/i;
    const isMailto = href?.startsWith("mailto:");

    // Check if the href is an email address
    if (emailPattern.test(href) || isMailto) {
      if (!isMailto) {
        href = `mailto:${href}`;
      }
      return (
        <Link className={classNames} href={href}>
          {children}
        </Link>
      );
    }

    // Check if the href is a telephone number
    if (telPattern.test(href)) {
      href = `tel:${href}`;
      return (
        <Link className={classNames} href={href}>
          {children}
        </Link>
      );
    }

    // Check if the href is an external URL
    if (!href?.startsWith("/") && urlPattern.test(href)) {
      if (!href?.startsWith("http")) {
        href = `https://${href}`;
      }
      return (
        <Link
          className={cn(
            "inline-flex flex-row items-center gap-2 fill-interface-blue hover:fill-interface-blue/90",
            classNames,
          )}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
          <ExternalLink className="size-3" />
        </Link>
      );
    }

    // If it's not an email, tel, or external URL, treat it as an internal link
    return (
      <Link className={classNames} href={href ?? ""}>
        {children}
      </Link>
    );
  },

  // Use the same logic for internal links
  internal: ({ children, value, className }) => {
    return markComponents.link({ children, value, className });
  },

  anchorTargetId: ({ children, value }) => {
    return (
      <span id={(value as MarkAnchorTargetIdValue).targetId}>{children}</span>
    );
  },

  sub: ({ children, className }) => <sub className={className}>{children}</sub>,
  sup: ({ children, className }) => <sup className={className}>{children}</sup>,
};

export default markComponents;

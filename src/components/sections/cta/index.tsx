import type { FC } from "react";
import { cn } from "@/utils/helpers/cn";

import type { SanityCta } from "@/sanity/schema/presentation/sectionType/sections/cta";
import { Button } from "@/components/storybook/button";
import ChevronRight from "@/components/storybook/icons/ChevronRight";
import ExternalLink from "@/components/storybook/icons/ExternalLink";

type Props = {
  section: SanityCta;
};

const CtaSection: FC<Props> = ({ section }) => {
  const {
    colour,
    icon,
    link,
    openInNewTab,
    padding,
    position,
    title,
    variant,
  } = section;

  const iconComponent =
    icon !== "none" ? (
      <span className="ml-2">
        {icon === "internal" ? (
          <ChevronRight />
        ) : icon == "external" ? (
          <ExternalLink />
        ) : (
          ""
        )}
      </span>
    ) : null;

  return (
    <div
      className={cn(
        "wrapper px-0 flex-row",
        padding === "small" && "py-2",
        padding === "medium" && "py-4",
        padding === "large" && "py-6",
        padding === "xlarge" && "py-8",
        position === "left" && "items-start",
        position === "centre" && "items-center",
        position === "right" && "items-end",
      )}
    >
      <Button
        color={colour}
        href={link?.url ?? link?.internal}
        mode="link"
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        target={openInNewTab ? "_blank" : undefined}
        type="link"
        variant={variant}
      >
        {title}
        {iconComponent}
      </Button>
    </div>
  );
};

export default CtaSection;

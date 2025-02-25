import type {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import Image from "next/image";

import Link from "@/components/base/link";
import { Label } from "@/components/storybook/label";

type TopPickItemProps = {
  badgeColor: CSSProperties["color"];
  badge: string;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"div">;

export const TopPickItem = ({
  badgeColor,
  badge,
  image,
  imageAlt,
  title,
  description,
  link,
  linkTarget,
}: TopPickItemProps) => {
  return (
    <div className="group flex h-full flex-col bg-white text-neutral">
      <Link
        aria-label={title}
        className="absolute inset-0 z-10"
        href={link}
        target={linkTarget}
      />
      <div className="relative">
        <Label className="absolute" customColor={badgeColor} variant="custom">
          {badge}
        </Label>
        <div className="aspect-[16/9] w-full">
          <Image
            alt={imageAlt || ""}
            className="size-full object-cover"
            height={180}
            src={image}
            width={320}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-6 py-4 text-neutral">
        <h3 className="group-hover:text-red group-hover:underline">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

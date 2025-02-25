import type { ComponentProps, HTMLAttributeAnchorTarget } from "react";
import Image from "next/image";

import Link from "@/components/base/link";
import Play from "../../icons/Play";

type VideoCardItemProps = {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"div">;

export const VideoCardItem = ({
  image,
  imageAlt,
  title,
  description,
  link,
  linkTarget,
}: VideoCardItemProps) => {
  return (
    <div className="group flex h-full flex-col bg-white text-neutral">
      <Link
        aria-label={title}
        className="absolute inset-0 z-10"
        href={link}
        target={linkTarget}
      />
      <div className="relative">
        <Play className="absolute bottom-0 left-0 size-12 [&_rect]:fill-red group-hover:[&_rect]:fill-red-60" />
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
        <h3 className="line-clamp-3 group-hover:text-red group-hover:underline lg:line-clamp-4">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

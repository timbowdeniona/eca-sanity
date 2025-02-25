import Image from "next/image";
import React from "react";

import { cn } from "@/utils/helpers/cn";
import UserIcon from "@/components/storybook/icons/UserIcon";

type Props = {
  className?: string;
  src?: string;
  alt: string;
  size?: number;
  rounded?: boolean;
};

export function Avatar({
  className,
  src,
  alt,
  size = 48,
  rounded = true,
}: Props) {
  return src ? (
    <Image
      alt={alt}
      aria-label={alt}
      className={cn("object-cover", { "rounded-full": rounded }, className)}
      data-testid="avatar-image"
      height={size}
      role="img"
      src={src}
      width={size}
    />
  ) : (
    <UserIcon
      aria-label={alt}
      className={cn(className, { "rounded-full": rounded })}
      data-testid="avatar-icon"
      role="img"
      style={{ width: size, height: size }}
    />
  );
}

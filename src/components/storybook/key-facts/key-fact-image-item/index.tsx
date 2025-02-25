import { ComponentProps } from "react";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";

type KeyFactImageItemProps = {
  variant?: "primary" | "secondary";
  imageDisplayStyle: "icon" | "cover";
  image: string;
  imageAlt?: string;
  description: string;
  title?: string;
} & ComponentProps<"div">;

export const KeyFactImageItem = ({
  variant = "primary",
  imageDisplayStyle,
  image,
  imageAlt,
  description,
  title,
}: KeyFactImageItemProps) => {
  const bottomBorderClassNames = {
    primary: "bg-purple",
    secondary: "bg-red",
  };

  // NOTE: Parent @container class is declared in the parent component
  return (
    <div className="flex h-full flex-col bg-white text-center">
      <div
        className={cn(
          "h-[142px] @cmd:h-[180px] overflow-hidden",
          imageDisplayStyle === "cover" && "aspect-[16/9]",
          imageDisplayStyle === "icon" && "flex items-center justify-center",
        )}
      >
        <Image
          alt={imageAlt || ""}
          className={cn(
            "object-cover",
            imageDisplayStyle === "cover" && "w-full h-full",
            imageDisplayStyle === "icon" && "h-[52px] @cmd:h-[90px] w-auto",
          )}
          height={180}
          src={image}
          width={320}
        />
      </div>

      {title && (
        <p
          className={cn(
            "h3 text-purple px-2",
            imageDisplayStyle === "cover" && "mt-8",
          )}
        >
          {title}
        </p>
      )}

      <p className="lead flex-auto px-4 pb-6 pt-3 @cmd:px-6 @cmd:pt-6 lg:pb-8">
        {description}
      </p>

      <div
        className={cn("h-1 w-full", variant && bottomBorderClassNames[variant])}
      />
    </div>
  );
};

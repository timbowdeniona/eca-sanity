import { ComponentProps, ReactNode } from "react";
import isString from "lodash/isString";
import Image from "next/image";

import { cn } from "@/utils/helpers/cn";

type Props = {
  title: string;
  body: string | ReactNode;
  image: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
} & ComponentProps<"div">;

export const TextAndImage = ({
  className,
  title,
  body,
  image,
  imageAlt,
  imagePosition,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "@container flex justify-center bg-grey text-neutral py-6 w-full px-5",
        className,
      )}
      {...props}
    >
      <div className="flex w-full flex-col gap-6 @cmd:gap-12 @cxl:w-[1408px]">
        <div
          className={cn(
            "flex flex-col @cmd:flex-row gap-6 @cmd:gap-16",
            imagePosition === "right"
              ? "@cmd:flex-row-reverse"
              : "@cmd:flex-row",
          )}
        >
          <div className="flex items-center @cmd:w-2/5">
            <div className="aspect-[16/9] grow overflow-hidden">
              <Image
                alt={imageAlt || ""}
                className="size-full object-cover"
                height={196.875}
                src={image}
                width={350}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 @cmd:w-3/5">
            <h2 className="text-purple">{title}</h2>
            {isString(body) ? <p>{body}</p> : body}
          </div>
        </div>
        <div className="h-1 w-full bg-purple-40" />
      </div>
    </div>
  );
};

export default TextAndImage;

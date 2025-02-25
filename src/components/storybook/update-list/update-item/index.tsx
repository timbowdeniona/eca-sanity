import type {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";

import Link from "@/components/base/link";
import { Label } from "@/components/storybook/label";

type UpdateItemProps = {
  title: string;
  date: string;
  link: string;
  type: string;
  primaryColor: CSSProperties["color"];
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"article">;

export const UpdateItem = ({
  title,
  date,
  link,
  primaryColor,
  type,
  linkTarget,
}: UpdateItemProps) => {
  return (
    <article className="group relative flex flex-col gap-3 lg:gap-0">
      <Link
        aria-label={title}
        className="absolute inset-0 z-10"
        href={link}
        target={linkTarget}
      />
      <div className="flex flex-row items-center justify-between gap-4 bg-grey px-4 py-3 lg:h-12 lg:bg-white lg:p-0">
        <p className="h-full shrink-0 items-center text-red lg:flex lg:w-[112px] lg:bg-grey lg:pl-3">
          <b>{date}</b>
        </p>
        <p className="hidden lg:flex">
          <b className="line-clamp-1">{title}</b>
        </p>
        <Label customColor={primaryColor} variant="custom">
          {type}
        </Label>
      </div>
      <p className="block pl-4 lg:hidden">
        <b>{title}</b>
      </p>
      <div className="h-1 w-full bg-grey"></div>
    </article>
  );
};

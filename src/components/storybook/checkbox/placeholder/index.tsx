"use client";

import { ComponentProps } from "react";

import { cn } from "@/utils/helpers/cn";
import { Placeholder } from "../../placeholder";

type Props = ComponentProps<"div">;

export const CheckboxPlaceholder = ({ className, ...props }: Props) => {
  return (
    <div className={cn("flex gap-4 items-center", className)} {...props}>
      <div className="flex cursor-pointer items-center gap-4">
        <Placeholder className="relative size-6 rounded-none" />
        <Placeholder className="h-6 w-40" />
      </div>
    </div>
  );
};

export default CheckboxPlaceholder;

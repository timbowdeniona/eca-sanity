import { cn } from "@/utils/helpers/cn";
import React from "react";

type Props = {
  className?: string;
};

function CookieConsentLoader({ className }: Props) {
  return (
    <div
      className={cn("grid size-full place-content-center bg-grey", className)}
    >
      <div className="size-8 animate-spin rounded-full border-b-2 border-red" />
    </div>
  );
}

export default CookieConsentLoader;

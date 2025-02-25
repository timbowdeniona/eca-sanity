import type { ReactNode } from "react";
import { cn } from "@/utils/helpers/cn";

type TypographyProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Typography({
  children,
  variant = "primary",
  className,
}: TypographyProps) {
  return <span className={cn(`font-${variant}`, className)}>{children}</span>;
}

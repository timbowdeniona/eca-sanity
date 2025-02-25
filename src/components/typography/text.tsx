import type { ReactNode } from "react";
import { cn } from "@/utils/helpers/cn";
import { Typography } from "./index";

const variants = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  body: "text-base",
  small: "text-sm",
} as const;

type TextProps = {
  variant?: keyof typeof variants;
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  fontVariant?: "primary" | "secondary";
};

export function Text({
  variant = "body",
  as: Component = "div",
  children,
  className,
  fontVariant = "primary",
}: TextProps) {
  return (
    <Typography variant={fontVariant}>
      <Component className={cn(variants[variant], className)}>
        {children}
      </Component>
    </Typography>
  );
}

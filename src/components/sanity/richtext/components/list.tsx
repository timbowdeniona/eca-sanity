import type { FC } from "react";

import type { ListItemType } from "@/sanity/types";
import type { BlockComponentProps } from "./block";
import { cn } from "@/utils/helpers/cn";

const listComponents: Record<ListItemType, FC<BlockComponentProps>> = {
  bullet: ({ children, className }) => (
    <ul className={cn("list-disc", className)}>{children}</ul>
  ),
  number: ({ children, className }) => (
    <ol className={cn("list-decimal", className)}>{children}</ol>
  ),
};

export default listComponents;

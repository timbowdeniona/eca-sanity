import type { FC } from "react";

import type { ListItemType } from "@/sanity/types";
import type { BlockComponentProps } from "./block";

const listItemComponents: Record<ListItemType, FC<BlockComponentProps>> = {
  bullet: ({ children, className }) => (
    <li className={className}>{children}</li>
  ),
  number: ({ children, className }) => (
    <li className={className}>{children}</li>
  ),
};

export default listItemComponents;

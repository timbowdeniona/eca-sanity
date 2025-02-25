import type { FC, ReactNode } from "react";
import clsx from "clsx";

import type { BlockStyle } from "@/sanity/types";

export type BlockComponentProps = {
  children: ReactNode;
  className?: string;
};

const blockComponents: Record<BlockStyle, FC<BlockComponentProps>> = {
  lead: ({ children, className }) => (
    <p className={clsx("lead", className)}>{children}</p>
  ),
  normal: ({ children, className }) => <p className={className}>{children}</p>,
  blockquote: ({ children, className }) => (
    <blockquote className={className}>{children}</blockquote>
  ),
  h1: ({ children, className }) => <h1 className={className}>{children}</h1>,
  h2: ({ children, className }) => <h2 className={className}>{children}</h2>,
  h3: ({ children, className }) => <h3 className={className}>{children}</h3>,
  h4: ({ children, className }) => <h4 className={className}>{children}</h4>,
  h5: ({ children, className }) => <h5 className={className}>{children}</h5>,
  h6: ({ children, className }) => <h6 className={className}>{children}</h6>,
  pre: ({ children, className }) => <pre className={className}>{children}</pre>,
};

export default blockComponents;

import type { FC } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

export type BaseLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

const BaseLink: FC<BaseLinkProps> = ({
  children,
  prefetch = false,
  ...props
}) => (
  <Link {...props} prefetch={prefetch}>
    {children}
  </Link>
);

export default BaseLink;

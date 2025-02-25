"use client";

import type { ComponentProps, ReactNode } from "react";

import Link from "@/components/base/link";
import UserIcon from "../../icons/UserIcon";
import { LinkItem } from "..";

type Props = {
  chilren?: ReactNode;
  tagline?: string;
  links?: Array<LinkItem>;
  signIn: ReactNode;
} & ComponentProps<"nav">;

export const TopBar = ({ tagline, children, links, signIn }: Props) => {
  // Hide TopBar if there's no links
  if (!links || links?.length == 0) {
    return null;
  }

  return (
    <nav className="hidden bg-purple fill-white text-white md:flex">
      <div className="wrapper px-4 md:px-5 xl:p-0">
        <div className="flex h-12 items-center justify-between">
          <div>
            <div className="hidden lg:block">
              {children || <p className="lead">{tagline}</p>}
            </div>
          </div>
          <ul className="flex items-center gap-6 justify-self-end">
            {links.map(item => (
              <li key={item.id}>
                <Link
                  className="flex items-center gap-2 fill-white hover:underline"
                  href={item.link || "/"}
                  target={item.target}
                >
                  <h4>{item.text}</h4>
                  {item?.type === "profile" && <UserIcon className="size-6" />}
                </Link>
              </li>
            ))}
            <li>{signIn}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import { ComponentProps } from "react";

import Link from "@/components/base/link";
import { cn } from "@/utils/helpers/cn";
import ChevronRight from "../icons/ChevronRight";

export type Breadcrumb = {
  link: string;
  label: string;
};

type Props = {
  currentPage: string;
  items: Array<Breadcrumb>;
  variant: "primary" | "secondary";
  colour?: "neutral" | "purple";
} & ComponentProps<"div">;

const CrumbTrail = ({
  currentPage,
  items,
  variant,
  colour = "purple",
}: Props) => {
  return (
    <div
      className={cn(
        "hidden lg:block relative wrapper px-5 lg:px-10 xl:px-0",
        variant === "secondary" && "py-2",
      )}
    >
      <nav
        className={cn(
          "flex flex-row gap-4",
          variant === "primary" && "absolute top-3 z-10",
        )}
      >
        <ol
          className={cn(
            "flex gap-4 shrink-0 items-center",
            colour === "purple" && "text-purple fill-purple",
            colour === "neutral" && "text-neutral fill-neutral",
          )}
        >
          <li key="home">
            <Link className="hover:underline" href="/">
              Home
            </Link>
          </li>
          {items.map((item: Breadcrumb, index) => (
            <li
              className="flex flex-row items-center gap-3"
              key={`${item.label}-${index}`}
            >
              <ChevronRight className="h-3 opacity-50" />
              <div>
                <Link className="hover:underline" href={item.link}>
                  {item.label}
                </Link>
              </div>
            </li>
          ))}
          <li
            className="flex flex-row items-center gap-3"
            key={`current-${currentPage}`}
          >
            <ChevronRight className="h-3 opacity-50" />
            <div>{currentPage}</div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default CrumbTrail;

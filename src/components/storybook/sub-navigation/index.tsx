import type {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "@/components/base/link";
import { cn } from "@/utils/helpers/cn";
import ChevronDown from "../icons/ChevronDown";

type SubNavLink = {
  target?: HTMLAttributeAnchorTarget;
  title: string;
  url: string;
};
type SubNavigationProps = {
  activeLinkIndex?: number;
  color: CSSProperties["color"];
  links: SubNavLink[];
} & ComponentProps<"div">;

export const SubNavigation = ({
  activeLinkIndex,
  color,
  links,
}: SubNavigationProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeLink = links[activeLinkIndex ?? 0];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className={cn(
        "wrapper border-b-[4px] lg:border-b-0 relative transition-colors",
        open ? "border-transparent" : "border-[color:var(--border-color)]",
      )}
      style={{ "--border-color": color } as CSSProperties}
    >
      {!!activeLink && (
        <button
          className="z-10 flex flex-row items-center bg-white px-4 pb-[14px] pt-[18px] text-left text-base font-semibold text-neutral lg:hidden"
          onClick={() => setOpen(prev => !prev)}
          type="button"
        >
          <span className="inline-block">{activeLink.title}</span>
          <ChevronDown className="ml-[25px] inline-block [&_path]:fill-purple" />
        </button>
      )}
      <nav
        className={cn(
          "flex flex-col absolute left-0 right-0 top-[56px] lg:left-auto lg:right-auto lg:top-auto bg-white lg:bg-transparent lg:translate-y-0 transition-all lg:transition-none z-20",
          "lg:relative lg:flex-row lg:gap-8 border-b-[4px] lg:border-b-0 border-[color:var(--border-color)] pt-[26px] lg:pt-0 pb-[10px] lg:pb-0 lg:opacity-100 lg:pointer-events-auto",
          open
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "translate-y-[-56px] pointer-events-none opacity-0",
        )}
      >
        {links.map((item, index) => (
          <Link
            className={cn(
              "inline-block lg:border-b-4 pt-[10px] lg:pt-[18px] pb-[14px] text-base lg:text-lg text-neutral font-semibold",
              "px-9 lg:px-0",
              index === activeLinkIndex
                ? "border-[color:var(--border-color)]"
                : "border-transparent opacity-50",
            )}
            href={item.url}
            key={index}
            target={item.target}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div
        className={cn(
          "block lg:hidden absolute left-0 top-[56px] right-0 transition-opacity bg-neutral z-10 h-[calc(var(--body-height,100svh)-56px-var(--header-height,0px))]",
          open ? "opacity-50" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
        role="presentation"
      />
    </div>
  );
};

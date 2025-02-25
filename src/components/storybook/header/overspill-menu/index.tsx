"use client";

import { ComponentProps } from "react";
import { cn } from "@/utils/helpers/cn";
import CloseIcon from "../../icons/Close";
import { LinkItem } from "..";

type Props = {
  currentOpenSubmenu?: LinkItem;
  show?: boolean;
  onMenuClick: (link?: LinkItem) => void;
  onClose: () => void;
  links?: Array<LinkItem>;
} & ComponentProps<"nav">;

export const OverspillMenu = ({
  links,
  show,
  onMenuClick,
  onClose,
  currentOpenSubmenu,
}: Props) => {
  // Hide Overspill Menu if there's no links
  if (!links || links?.length == 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "lg:hidden absolute left-0 w-full px-5 top-[120px] h-[60px] hidden md:flex items-center justify-between bg-white transition-all",
        show && "translate-y-0 z-50 pointer-events-auto opacity-100",
        !show && "-translate-y-[112px] z-0 pointer-events-none opacity-0",
      )}
    >
      <ul className="flex h-7 items-center gap-6 text-purple">
        {links.map(item => (
          <li className="relative h-full" key={item.id}>
            <button
              onClick={() => {
                if (currentOpenSubmenu?.id === item.id) {
                  onMenuClick(undefined);
                } else {
                  onMenuClick(item);
                }
              }}
            >
              <h4>{item.text}</h4>
            </button>
            {currentOpenSubmenu?.id === item.id && (
              <div className="absolute -bottom-3 h-1 w-full bg-red" />
            )}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onClose}>
          <CloseIcon className="size-8" />
          <span className="sr-only">Close Overspill Menu</span>
        </button>
      </div>
    </div>
  );
};

export default OverspillMenu;

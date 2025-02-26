"use client";

import type {
  ComponentProps,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

import Link from "@/components/base/link";
import MenuCircle from "@/components/storybook/icons/MenuCircle";
import useScreenSize from "@/hooks/use-screen-size";
import { cn } from "@/utils/helpers/cn";
import CloseCircle from "../icons/CloseCircle";
import MoreHorizontal from "../icons/MoreHorizontal";
import MobileMenu from "./mobile-menu";
import OverspillMenu from "./overspill-menu";
import Submenu from "./submenu";
import { TopBar } from "./top-bar";

type LinkItemType = "link" | "emphasizedLink" | "profile";

// TODO: Clean up types
export type LinkItem = {
  id: string | number;
  text: string;
  link?: string;
  type?: LinkItemType;
  target?: HTMLAttributeAnchorTarget;
  links?: Array<
    | LinkItem
    | {
        id: string | number;
        text: string;
        link?: string;
        type?: LinkItemType;
        target?: HTMLAttributeAnchorTarget;
        links?: Array<LinkItem>;
      }
  >;
};

type Props = {
  children?: ReactNode;
  tagline?: string;
  classname?: string;
  image: string;
  imageAlt: string;
  links: Array<LinkItem>;
  topBarLinks: Array<LinkItem>;
  signIn?: ReactNode;
} & ComponentProps<"div">;

export const Header = ({
  children,
  tagline,
  image,
  imageAlt,
  topBarLinks,
  links,
  signIn,
}: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState<LinkItem | undefined>();
  const [overspillMenuOpen, setOverspillMenuOpen] = useState(false);
  const screenSize = useScreenSize();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    if (submenu) {
      setSubmenu(undefined);
    }
    if (overspillMenuOpen) {
      setOverspillMenuOpen(false);
    }
  }, [pathname, searchParams]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSubmenu(undefined);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setSubmenu(undefined);
  };

  // TODO: Close submenu if already on the current path
  // TODO: Separate function handler to make it cleaner
  // TODO: Create main navigation bar component
  // TODO: Hidden inert temporary disabled

  const overspillLinks = links.slice(2);

  return (
    <header
      className={cn(
        "flex flex-col",
        // TODO: Temporarily disable mobile sticky nav to fix overflow and z-index issues
        // Sticky on mobile
        "sticky top-0 shadow-sm z-10",
        // // Static on desktop, undo all sticky
        "md:static md:top-auto md:shadow-none md:z-auto",
      )}
    >
      <div className="relative z-50">
        <TopBar links={topBarLinks} signIn={signIn} tagline={tagline}>
          {children}
        </TopBar>

        <div className="h-[10px] w-full bg-sky-300" />
        <nav className="flex h-[72px] w-full flex-row items-center justify-center bg-sky-500 md:h-28">
          <div className="wrapper px-3 py-5 md:px-5 xl:p-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[56px]">
                <div className="relative aspect-[80/60] h-24">
                  <Link
                    aria-label={"Home"}
                    className="absolute inset-0 z-10"
                    href={"/"}
                  />
                  <Image
                    alt={imageAlt || ""}
                    className="size-full"
                    height={60}
                    priority
                    src={image}
                    width={80}
                  />
                </div>
                <ul className="hidden h-7 items-center gap-6 text-white md:flex">
                  {links.map((item, index) => (
                    <li
                      className={cn(
                        "h-full md:relative",
                        index > 1 && "hidden lg:flex",
                      )}
                      key={item.id}
                    >
                      <Link
                        className="text-[16px] font-semibold leading-[24px] lg:text-[18px] lg:leading-[28px]"
                        href={item.link ?? "#"}
                        onClick={event => {
                          if (["lg", "xl"].includes(screenSize || "")) {
                            return;
                          }
                          if (index > 1) {
                            setOverspillMenuOpen(true);
                          } else {
                            setOverspillMenuOpen(false);
                          }
                          if (submenu?.id === item.id) {
                            setSubmenu(undefined);
                          } else {
                            setSubmenu(item);
                          }
                          event.preventDefault();
                          event.stopPropagation();
                        }}
                        onMouseEnter={() => {
                          if (!["lg", "xl"].includes(screenSize || "")) {
                            return;
                          }
                          if (index > 1) {
                            setOverspillMenuOpen(true);
                          } else {
                            setOverspillMenuOpen(false);
                          }
                          setSubmenu(item);
                        }}
                        target={item.target}
                      >
                        {item.text}
                      </Link>
                      {submenu?.id === item.id && (
                        <>
                          <div className="absolute -bottom-3 h-1 w-full bg-red" />
                          {links.map(item => (
                            <Submenu
                              className={cn(
                                // Remove transition on hover desktop
                                "lg:transition-none top-[82px]",
                                !submenu && "transition-all",
                                // No need to transition if submenu is already open
                                submenu && "md:transition-none",
                                submenu?.id === item.id &&
                                  "md:translate-y-0 z-50 pointer-events-auto opacity-100",
                                submenu?.id !== item.id &&
                                  "z-0 pointer-events-none opacity-0",
                                submenu?.id !== item.id &&
                                  overspillMenuOpen &&
                                  "md:-translate-y-[220px]",
                                submenu?.id !== item.id &&
                                  !overspillMenuOpen &&
                                  "md:-translate-y-[120px]",
                                overspillMenuOpen
                                  ? "md:top-[220px]"
                                  : "md:top-[69px]",
                              )}
                              key={item.id}
                              links={item.links}
                              onClose={() => {
                                setSubmenu(undefined);
                                setMobileMenuOpen(true);
                              }}
                              onCloseMenu={closeMenu}
                              onMouseLeave={() => {
                                if (!["lg", "xl"].includes(screenSize || "")) {
                                  return;
                                }
                                setOverspillMenuOpen(false);
                                setSubmenu(undefined);
                              }}
                            />
                          ))}
                        </>
                      )}
                    </li>
                  ))}
                  <li className="relative flex h-full items-center lg:hidden">
                    <button
                      onClick={() => {
                        setOverspillMenuOpen(prev => !prev);
                        setSubmenu(undefined);
                      }}
                    >
                      <MoreHorizontal className="h-[6px] w-[26px]" />
                      <span className="sr-only">Toggle Overspill Menu</span>
                    </button>
                    {overspillMenuOpen && (
                      <div className="absolute -bottom-3 h-1 w-full bg-red" />
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-row items-center gap-3" role="menubar">
                  <li className="flex items-center md:hidden" role="menuitem">
                    <button onClick={toggleMenu}>
                      {mobileMenuOpen || !!submenu ? (
                        <>
                          <CloseCircle className="size-12" />
                          <span className="sr-only">Close menu</span>
                        </>
                      ) : (
                        <>
                          <MenuCircle className="size-12" />
                          <span className="sr-only">Menu</span>
                        </>
                      )}
                    </button>
                  </li>
                  {/* <li className="flex items-center" role="menuitem">
                    <Link
                      className="flex size-12 items-center justify-center rounded-full border-2 border-purple-80 md:size-[60px]"
                      // TODO: Update search url or functionality
                      href="/search"
                    >
                      <Search className="size-6 [&_path]:fill-purple" />
                      <span className="sr-only">Search</span>
                    </Link>
                  </li> */}
                  <li className="flex items-center md:hidden" role="menuitem">
                    {signIn}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <OverspillMenu
          currentOpenSubmenu={submenu}
          links={overspillLinks}
          onClose={() => {
            setOverspillMenuOpen(false);
            setSubmenu(undefined);
          }}
          onMenuClick={link => setSubmenu(link)}
          show={overspillMenuOpen}
        />

        <MobileMenu
          links={[...links, ...topBarLinks]}
          onClose={closeMenu}
          onMenuClick={link => setSubmenu(link)}
          show={mobileMenuOpen && !submenu}
        />
      </div>
    </header>
  );
};

export default Header;

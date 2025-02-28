import type {
  ComponentProps,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";
import Image from "next/image";

import Link from "@/components/base/link";
import XCircle from "../icons/XIcon";
import LinkedInCircle from "../icons/LinkedInCircle";
import YoutubeCircle from "../icons/YoutubeCircle";

export type LinkItem = {
  id: string;
  text: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
};

type Props = {
  children?: ReactNode;
  disclaimer?: string;
  image: string;
  imageLink: string;
  imageAlt: string;
  linkList: Array<Array<LinkItem>>;
  socialLinks: Array<LinkItem>;
} & ComponentProps<"footer">;

export const Footer = ({
  image,
  imageAlt,
  socialLinks,
  linkList,
  children,
  disclaimer,
}: Props) => {
  const socialIcons: Record<
    string,
    {
      component: ReactNode;
      title: string;
    }
  > = {
    "x.com": {
      component: <XCircle className="size-10" />,
      title: "X",
    },
    "linkedin.com": {
      component: <LinkedInCircle className="size-10" />,
      title: "LinkedIn",
    },
    "youtube.com": {
      component: <YoutubeCircle className="size-10" />,
      title: "Youtube",
    },
  };

  const filteredSocialLinks = socialLinks.map((item, index) => {
    const icon = Object.keys(socialIcons).find(domain =>
      item.link.includes(domain),
    );
    if (!icon) {
      return null;
    }

    return (
      <li key={item.id || index}>
        <Link href={item.link}>
          {socialIcons[icon]?.component}
          <span className="sr-only">{socialIcons[icon]?.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <footer className="flex flex-col">
      <div className="bg-cyan-800">
        <div className="wrapper px-5 pb-12 pt-6 md:py-12 lg:px-10 xl:px-0">
          <div className="flex flex-col justify-around gap-6 md:h-[400px] md:flex-row lg:max-h-[312px] lg:justify-between">
            <div className="relative mb-8 aspect-[80/60] h-24 w-auto shrink-0 md:mb-0">
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
            <div className="mb-6 flex flex-col gap-4 md:mb-0 lg:grid lg:grid-cols-2 lg:gap-x-10">
              {linkList.map((list, index) => (
                <ul className="flex flex-col gap-4 text-white" key={index}>
                  {list.map(item => (
                    <li className="lg:w-[270px] xl:w-[310px]" key={item.id}>
                      <Link
                        className="hover:text-cyan-700 hover:underline"
                        href={item.link}
                        target={item.target}
                      >
                        <span className="h4 h-6 lg:h-7">{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <ul className="flex shrink-0 gap-6">{filteredSocialLinks}</ul>
          </div>
        </div>
      </div>
      {(children || disclaimer) && (
        <div className="bg-cyan-800 text-white">
          <div className="wrapper px-5 py-3 lg:px-10 xl:px-0">
            <div>{children || disclaimer}</div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

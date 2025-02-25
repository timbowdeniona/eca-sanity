import type { FC } from "react";

import type { SanityHeader } from "@/sanity/schema/presentation/layout/header";
import type { MainLinkMember } from "@/sanity/schema/presentation/layout/header";
import type { LinkItem } from "@/components/storybook/header";
import HeaderComponent from "@/components/storybook/header";
import RichText from "@/components/sanity/richtext";
import logo from "@/../public/IONA_logo.svg";

type Props = {
  header: SanityHeader | null;
};

const splitLinks = (members: MainLinkMember[]): LinkItem[] => {
  const links: LinkItem[] = [];
  members.forEach((member, index) => {
    switch (member._type) {
      case "blank":
        links.push({
          id: `blank-${index}`,
          text: "",
          links: [],
        });
        break;
      case "title":
        links.push({
          id: `title-${index}`,
          text: member.title ?? "",
          links: [],
        });
        break;
      case "link":
        links.push({
          id: `link-${index}`,
          text: member.title ?? "",
          link: member.url ?? "#",
        });
        break;
      default:
        break;
    }
  });
  return links;
};

const Header: FC<Props> = ({ header }) => {
  const topBarLinks: LinkItem[] = (header?.topLinks ?? []).map(
    (link, index) => ({
      id: `${link._id}-${index}`,
      type: link.url === "/login" ? "profile" : "link",
      text: link.title,
      link: link.url,
    }),
  );
  const links: LinkItem[] = (header?.mainLinks ?? [])
    .filter(mainLink => !!mainLink?.link?.title)
    .map((mainLink, index) => ({
      id: `mainlink-${index}`,
      type: "link",
      text: mainLink.link.title,
      link: mainLink.link.url ?? "/",
      links: splitLinks(mainLink?.links ?? []),
    }));
  return (
    <HeaderComponent
      image={logo}
      imageAlt={"IONA"}
      links={links}
      topBarLinks={topBarLinks}
    >
      <RichText value={header?.topBanner ?? []} />
    </HeaderComponent>
  );
};

export default Header;

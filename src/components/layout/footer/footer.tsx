import type { FC } from "react";
import FooterComponent, { LinkItem } from "@/components/storybook/footer";

import type { Props } from ".";
import RichText from "@/components/sanity/richtext";
import logo from "@/../public/IONA_logo.svg";

const Footer: FC<Props> = ({ footer }) => {
  const linkList = footer?.links?.reduce(
    (acc, curr) => {
      if (curr?._type === "link") {
        acc[acc.length - 1].push({
          id: curr._id,
          text: curr.title,
          link: curr.url ?? "",
        });
      } else {
        // If the current element is "break", start a new subarray
        acc.push([]);
      }
      return acc;
    },
    [[]] as Array<Array<LinkItem>>,
  );

  const socialLinks = footer?.socials?.map(item => {
    return {
      id: item._id,
      text: item.title,
      link: item?.url ?? item?.internal,
    };
  });

  return (
    <FooterComponent
      image={logo}
      imageAlt={"IONA"}
      imageLink={"/"}
      linkList={linkList ?? []}
      socialLinks={socialLinks ?? []}
    >
      {footer?.credits && <RichText value={footer.credits} />}
    </FooterComponent>
  );
};

export default Footer;

import {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import LinkIcon from "../icons/LinkIcon";
import { UpdateItem } from "./update-item";
import { Button } from "../button";

type UpdateItemProps = {
  id: string | number;
  title: string;
  date: string;
  link: string;
  type: string;
};

type UpdateListProps = {
  items: Array<UpdateItemProps>;
  primaryColor: CSSProperties["color"];
  viewAllLink: string;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"section">;

export const UpdateList = ({
  items,
  primaryColor,
  linkTarget,
  viewAllLink,
}: UpdateListProps) => {
  // Hide section if there's no item
  if (items.length === 0) {
    return null;
  }

  const style = {
    "--update-list-primary-color": primaryColor,
  } as CSSProperties;

  return (
    <section className="flex w-full bg-white lg:justify-center" style={style}>
      <div className="flex w-full flex-col items-center px-5 py-6">
        <ul className="flex w-full flex-col gap-2 lg:max-w-[1125px] xl:max-w-[1167px]">
          {items.map(item => (
            <li key={item.id}>
              <UpdateItem
                date={item.date}
                link={item.link}
                linkTarget={linkTarget}
                primaryColor={primaryColor}
                title={item.title}
                type={item.type}
              />
            </li>
          ))}
        </ul>
        <div className="w-full bg-white pl-4 lg:max-w-[1125px] lg:pl-0 xl:max-w-[1167px]">
          <Button
            className="flex items-center gap-2"
            color="red"
            href={viewAllLink}
            mode="link"
            target={linkTarget}
            variant="tertiary"
          >
            View all updates
            <LinkIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

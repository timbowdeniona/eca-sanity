import {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import LinkIcon from "../icons/LinkIcon";
import { Button } from "../button";
import { cn } from "@/utils/helpers/cn";

export type LinkItem = {
  id: string | number;
  title: string;
  link: string;
};

type LinkListProps = {
  title: string;
  description?: string;
  id?: string;
  items: LinkItem[];
  tertiaryColor: "purple" | CSSProperties["color"];
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"div">;

export const LinkList = ({
  title,
  description,
  id,
  items,
  tertiaryColor,
  linkTarget,
  className,
}: LinkListProps) => {
  // Hide section if there's no item
  if (items.length === 0) {
    return null;
  }

  const colors: Record<string, string> = {
    purple: "bg-purple",
  };

  const style = {
    "--more-resources-tertiary-color": tertiaryColor,
  } as CSSProperties;

  return (
    <div
      className={cn(
        "bg-grey flex flex-col gap-12 md:gap-[52px] lg:items-center w-full pt-6 pb-12",
        className,
      )}
      style={style}
    >
      <div
        className="flex w-full flex-col items-center gap-4 px-5 xl:px-0"
        id={id}
      >
        <div className="flex w-full flex-col gap-2 xl:w-[1408px]">
          <h2 className="text-purple">{title}</h2>
          {description && <p className="lead">{description}</p>}
        </div>
        <ul className="flex w-full flex-col gap-2 lg:max-w-[1126px] xl:w-[1165px]">
          {items.map(item => (
            <li className="bg-white" key={item.id}>
              <Button
                className="flex items-center gap-2 px-6"
                color="red"
                href={item.link}
                mode="link"
                target={linkTarget}
                variant="tertiary"
              >
                <span className="line-clamp-2 md:line-clamp-1">
                  {item.title}
                </span>
                <LinkIcon className="shrink-0" />
              </Button>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "h-1 w-full xl:w-[1408px] mt-2",
            tertiaryColor && Object.keys(colors).includes(tertiaryColor)
              ? colors[tertiaryColor]
              : "bg-[color:var(--more-resources-tertiary-color)]",
          )}
        />
      </div>
    </div>
  );
};

export default LinkList;

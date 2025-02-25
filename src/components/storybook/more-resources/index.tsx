import {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";
import { ResourceItem } from "./resource-item";

type MoreResourceItem = {
  id: string | number;
  title: string;
  description: string;
  linkText: string;
  link: string;
};

type MoreResourcesProps = {
  title: string;
  items: Array<MoreResourceItem>;
  tertiaryColor: CSSProperties["color"];
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"section">;

export const MoreResources = ({
  title,
  items,
  tertiaryColor,
  linkTarget,
}: MoreResourcesProps) => {
  // Hide section if there's no item
  if (items.length === 0) {
    return null;
  }

  const style = {
    "--more-resources-tertiary-color": tertiaryColor,
  } as CSSProperties;

  return (
    <section
      className="flex w-full bg-grey text-purple lg:justify-center"
      style={style}
    >
      <div className="flex w-full flex-col items-center gap-7 px-5 pb-12 pt-6 md:gap-[52px]">
        <div className="flex w-full flex-col items-center gap-4 xl:px-0">
          <h2 className="w-full xl:w-[1408px]">{title}</h2>
          <ul className="flex flex-col gap-6 lg:max-w-[1125px] xl:w-[1166px]">
            {items.map(item => (
              <li className="flex flex-col gap-4" key={item.id}>
                <ResourceItem
                  description={item.description}
                  link={item.link}
                  linkTarget={linkTarget}
                  linkText={item.linkText}
                  title={item.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="h-1 w-full bg-[color:var(--more-resources-tertiary-color)] xl:w-[1408px]" />
      </div>
    </section>
  );
};

import { ComponentProps, HTMLAttributeAnchorTarget } from "react";

import { Button } from "../button";

type QuickLinksProps = {
  title: string;
  links: Array<{
    target?: HTMLAttributeAnchorTarget;
    title: string;
    url: string;
  }>;
} & ComponentProps<"div">;

export const QuickLinks = ({ title, links }: QuickLinksProps) => {
  return (
    <div className="flex justify-center bg-grey py-4 lg:py-6">
      <div className="wrapper flex w-full flex-col gap-8">
        <h2 className="text-cyan-800">{title}</h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
          {links.map((item, index) => (
            // TODO: Update key
            <li key={index}>
              <Button
                color="custom"
                customColor="cyan-800"
                customHoverColor="cyan-600"
                href={item.url}
                mode="link"
                target={item.target}
                variant="primary"
              >
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
        <div className="h-1 w-full bg-cyan-600" />
      </div>
    </div>
  );
};

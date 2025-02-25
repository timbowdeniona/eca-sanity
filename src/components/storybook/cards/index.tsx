import type {
  ComponentProps,
  CSSProperties,
  HTMLAttributeAnchorTarget,
} from "react";

import { cn } from "@/utils/helpers/cn";
import Link from "@/components/base/link";

type ButtonItem = {
  title: string;
  color?: CSSProperties["color"];
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
};

type Props = {
  headline?: string;
  description?: string;
  links?: Array<ButtonItem>;
} & ComponentProps<"div">;

export const Cards = ({
  className,
  headline,
  description,
  links,
  ...props
}: Props) => {
  return (
    <div className={cn("bg-grey py-12", className)} {...props}>
      <div className="wrapper @container">
        <div className="mb-4 flex flex-col gap-1 @cmd:gap-2">
          {headline && <h2 className="text-purple">{headline}</h2>}
          {description && <p className="lead">{description}</p>}
        </div>
        <ul className="grid grid-cols-2 gap-5 @cmd:grid-cols-3 @clg:grid-cols-4 @clg:gap-10">
          {links?.map((item, index) => (
            <li key={index}>
              <div
                className="relative flex aspect-[16/9] size-full items-center justify-center bg-[color:var(--card-color)] px-4 py-[10px] text-center text-white @cmd:size-auto"
                style={
                  {
                    "--card-color": item.color ?? "var(--aqa-purple-primary)",
                  } as CSSProperties
                }
              >
                <Link
                  aria-label={item.title}
                  className="absolute inset-0 z-10"
                  href={item.link}
                  target={item.linkTarget}
                />
                <p className="h3">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;

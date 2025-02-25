import { ComponentProps } from "react";

import { cn } from "@/utils/helpers/cn";
import { KeyFactImageItem } from "./key-fact-image-item";
import { KeyFactStatItem } from "./key-fact-stat-item";

type KeyFactBaseItem = {
  id: string | number;
  description: string;
};

type KeyFactImageItemProps = {
  image: string;
  imageAlt?: string;
  title?: string;
} & KeyFactBaseItem;

type KeyFactTextItemProps = {
  value: string;
  name: string;
} & KeyFactBaseItem;

type KeyFactImageProps = {
  mode: "image";
  variant?: "primary" | "secondary";
  imageDisplayStyle: "icon" | "cover";
  items: Array<KeyFactImageItemProps>;
};

type KeyFactTextProps = {
  mode: "text";
  items: Array<KeyFactTextItemProps>;
};

type Props = (KeyFactImageProps | KeyFactTextProps) & ComponentProps<"section">;

export const KeyFacts = ({ mode, items, ...props }: Props) => {
  const { variant: bottomBorderColor, imageDisplayStyle } =
    props as KeyFactImageProps;

  const sectionClassNames = cn(
    "flex justify-center px-5 pt-6 pb-8 @clg:pb-6 @clg:px-10",
    mode === "text" && "bg-white",
    mode === "image" && "bg-grey",
  );

  return (
    <section className={cn("@container", sectionClassNames)}>
      <ul className="grid gap-x-5 gap-y-6 @sm:grid-cols-2 @4xl:grid-cols-4 @clg:gap-x-10 @cxl:w-[1405px]">
        {items.map(item => (
          <li key={item.id}>
            {mode === "image" && (
              <KeyFactImageItem
                description={item.description}
                image={(item as KeyFactImageItemProps).image}
                imageAlt={(item as KeyFactImageItemProps).imageAlt}
                imageDisplayStyle={imageDisplayStyle}
                title={(item as KeyFactImageItemProps).title}
                variant={bottomBorderColor}
              />
            )}
            {mode === "text" && (
              <KeyFactStatItem
                description={item.description}
                name={(item as KeyFactTextItemProps).name}
                value={(item as KeyFactTextItemProps).value}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

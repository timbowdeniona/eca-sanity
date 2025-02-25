import { ComponentProps, HTMLAttributeAnchorTarget } from "react";
import LinkIcon from "@/components/storybook/icons/LinkIcon";
import { Button } from "@/components/storybook/button";

type ResourceItemProps = {
  title: string;
  description: string;
  linkText: string;
  link: string;
  linkTarget?: HTMLAttributeAnchorTarget;
} & ComponentProps<"div">;

export const ResourceItem = ({
  title,
  description,
  linkText,
  link,
  linkTarget,
}: ResourceItemProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 text-neutral md:flex-row md:gap-6 md:p-6">
      <div className="shrink-0 md:w-1/3 lg:w-1/4">
        <h3>{title}</h3>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 lg:w-2/3 lg:flex-row lg:gap-6">
        <p className="grow lg:w-[440px] xl:w-[500px]">{description}</p>
        <div className="bg-white lg:w-[280px] lg:shrink-0">
          <Button
            className="flex items-center gap-2"
            color="red"
            href={link}
            mode="link"
            target={linkTarget}
            variant="tertiary"
          >
            {linkText}
            <LinkIcon className="shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  );
};

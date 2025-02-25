import { ComponentProps, HTMLAttributeAnchorTarget } from "react";
import LinkIcon from "@/components/storybook/icons/LinkIcon";
import { Button } from "@/components/storybook/button";
import { cn } from "@/utils/helpers/cn";

export type PromoTextCardItemProps = {
  variant: "primary" | "secondary";
  title: string;
  description: string;
  link: string;
  linkText: string;
  linkTarget?: HTMLAttributeAnchorTarget;
};

type Props = PromoTextCardItemProps & ComponentProps<"div">;

export const PromoTextCardItem = ({
  className,
  title,
  description,
  variant,
  link,
  linkText,
  linkTarget,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-4 h-full p-4 md:px-6",
        className,
        variant === "primary" && "bg-white text-neutral",
        variant === "secondary" && "bg-purple text-white",
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex md:shrink-0">
        <Button
          className="flex shrink-0 items-center gap-2"
          color={variant === "primary" ? "red" : "white"}
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
  );
};

import { Button } from "@/components/storybook/button";
import { cn } from "@/utils/helpers/cn";
import { Url } from "url";
import ChevronLeft from "@/components/storybook/icons/ChevronLeft";

export type Props = {
  className?: string;
  onClick?: () => void;
  text?: string;
  mode?: "link" | "button";
  href?: string;
};

export function BackButton({
  className,
  onClick,
  text = "Back",
  mode,
  href,
}: Props) {
  return mode === "link" ? (
    <Button
      className={cn("inline-flex gap-x-2", className)}
      color="red"
      href={href as unknown as Url}
      mode="link"
      variant="tertiary"
    >
      <ChevronLeft className="h-3" />
      {text}
    </Button>
  ) : (
    <Button
      className={cn("inline-flex gap-x-2", className)}
      color="red"
      onClick={onClick}
      variant="tertiary"
    >
      <ChevronLeft className="h-3" />
      {text}
    </Button>
  );
}

export default BackButton;

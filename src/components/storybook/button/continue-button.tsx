import { Button } from "@/components/storybook/button";
import { cn } from "@/utils/helpers/cn";
import { Url } from "next/dist/shared/lib/router/router";
import ChevronRight from "@/components/storybook/icons/ChevronRight";

export type Props = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  mode?: "link" | "button";
  href?: string;
};

export function ContinueButton({
  className,
  onClick,
  disabled = false,
  text = "Continue",
  mode,
  href,
}: Props) {
  return mode === "link" ? (
    <Button
      className={cn("inline-flex gap-x-2 rounded-none", className)}
      color="red"
      href={href as unknown as Url}
      mode="link"
      variant="primary"
    >
      {text}
      <ChevronRight className="h-3.5" />
    </Button>
  ) : (
    <Button
      className={cn("inline-flex gap-x-2 rounded-none", className)}
      color="red"
      disabled={disabled}
      onClick={onClick}
      variant="primary"
    >
      {text}
      <ChevronRight className="h-3.5" />
    </Button>
  );
}

export default ContinueButton;

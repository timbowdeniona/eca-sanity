import { ComponentProps } from "react";
import Checkbox from "../checkbox";

type Props = {
  checked: boolean;
  onChangeEvent?: (checked: boolean) => void;
} & ComponentProps<"div">;

export const CommunicationPreferences = ({
  checked,
  onChangeEvent,
  ...props
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeEvent?.(event.target.checked);
  };

  return (
    <div
      className="flex w-full flex-col gap-4 bg-purple p-8 text-white"
      {...props}
    >
      <h2>Your communication preferences</h2>
      <p>
        Stay up to date with our latest news, subject updates and marketing
        communications.
      </p>
      <Checkbox
        checkBoxClass={checked ? "border-purple-80 bg-white" : ""}
        checked={checked}
        checkFill="var(--aqa-purple-primary)"
        className="my-4"
        label="Yes, I would like to receive updates and insights from AQA"
        onChange={handleChange}
      />
      <div>
        <p className="text-sm">
          You can unsubscribe from all communications by un-ticking this box.
        </p>
        <p className="mt-1 text-xs italic">
          (this does not include all essential examination administration
          communications)
        </p>
      </div>
    </div>
  );
};

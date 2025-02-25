import { ComponentProps } from "react";

type KeyFactStatItemProps = {
  value: string;
  name: string;
  description: string;
} & ComponentProps<"div">;

export const KeyFactStatItem = ({
  value,
  name,
  description,
}: KeyFactStatItemProps) => {
  return (
    <div className={"flex flex-col text-center"}>
      <div className="flex flex-col gap-2">
        <div className="text-red">
          <h1>{value}</h1>
          <p className="lead">{name}</p>
        </div>

        <p className="lead">{description}</p>
      </div>
    </div>
  );
};

import HeartIcon from "@/components/storybook/icons/HeartIcon";
import type { FC } from "react";

type Props = {
  addToFavourite: boolean;
};

const ToggleAsFavouriteNotification: FC<Props> = ({ addToFavourite }) => (
  <div className="flex items-center gap-2">
    {addToFavourite ? (
      <>
        <HeartIcon className="size-6 [&_path]:stroke-white" />
        <h4>The resource has been added to your Favourites</h4>
      </>
    ) : (
      <>
        <HeartIcon className="size-6 fill-red [&_path]:stroke-white" />
        <h4>The resource has been removed from your Favourites</h4>
      </>
    )}
  </div>
);

export default ToggleAsFavouriteNotification;

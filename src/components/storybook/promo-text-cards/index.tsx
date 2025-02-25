import { ComponentProps } from "react";
import {
  PromoTextCardItem,
  PromoTextCardItemProps,
} from "./promo-text-card-item";

type PromoTextCardsProps = {
  title: string;
  description: string;
  items: Array<
    PromoTextCardItemProps & {
      id: string | number;
    }
  >;
} & ComponentProps<"section">;

export const PromoTextCards = ({
  title,
  description,
  items,
}: PromoTextCardsProps) => {
  // Hide section if there's no item
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="flex bg-grey @container lg:justify-center">
      <div className="flex w-full flex-col gap-4 px-5 pb-12 pt-6 @cmd:gap-6 @clg:px-10 @cxl:w-[1408px] @cxl:px-0">
        <div className="flex flex-col gap-1 @cmd:gap-2">
          <h2 className="text-purple">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <ul className="grid grid-cols-1 gap-x-5 gap-y-4 @cmd:grid-cols-2 @cmd:gap-y-5 @cxl:grid-cols-4 @cxl:gap-10">
          {items.map(item => (
            <li key={item.id}>
              <PromoTextCardItem
                className="@clg:min-h-[310px] @cxl:min-h-[321px]"
                description={item.description}
                link={item.link}
                linkTarget={item.linkTarget}
                linkText={item.linkText}
                title={item.title}
                variant={item.variant}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PromoTextCards;

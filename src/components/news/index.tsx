import type { FC } from "react";
import type { SanityNewsArticle } from "@/sanity/schema/information/newsArticle";

import Image from "next/image";
import RichText from "@/components/sanity/richtext";
import { format } from "date-fns";
import { makeImageUrl } from "@/sanity/lib/image";

interface NewsArticleProps {
  data: SanityNewsArticle | null;
}

const NewsArticle: FC<NewsArticleProps> = ({ data }) => {
  return (
    <article className="wrapper">
      <div className="flex flex-col gap-2 pt-6">
        <p className="text-sm">Author: {data?.contactName}</p>
        <p className="text-sm">
          Published: {format(data?.newsDate ?? new Date(), "dd MMMM yyyy")}
        </p>
      </div>
      <div className="max-w-[924px] space-y-4 bg-grey pb-12 pt-6">
        {data?.articleImage && (
          <div className="relative aspect-[16/9] size-full overflow-hidden py-6">
            <Image
              alt={data?.articleImage.alt ?? ""}
              className="size-full object-cover"
              height={400}
              src={makeImageUrl(data?.articleImage.asset) ?? ""}
              width={1200}
            />
          </div>
        )}
        <RichText value={data?.body ?? []} />
      </div>
    </article>
  );
};

export default NewsArticle;

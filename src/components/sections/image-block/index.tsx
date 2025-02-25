import { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils/helpers/cn";
import {
  getPaddingHorizontal,
  getPaddingVertical,
} from "@/utils/helpers/getTailwindClasses";

import type { SanityImageBlock } from "@/sanity/schema/presentation/sectionType/sections/imageBlock";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityImageBlock;
};

const ImageBlockSection: FC<Props> = ({ section }) => {
  const {
    alignment,
    alt,
    caption,
    image,
    overrideWidth,
    paddingHorizontal,
    paddingVertical,
    width,
    widthPixels,
  } = section;

  const imageUrl = urlForImage(image.asset) ?? "";

  const getWidthStyle = () => {
    if (alignment === "full") {
      return { width: "100%" };
    }
    if (overrideWidth && widthPixels) {
      return { maxWidth: `${widthPixels}px`, width: "100%" };
    }
    if (width) {
      return { width: `${width}%` };
    }
    return {};
  };

  const getAlignmentClass = () => {
    switch (alignment) {
      case "left":
        return "justify-start";
      case "centre":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "";
    }
  };

  const imageHeight = image?.asset?.metadata?.dimensions?.height;
  const imageWidth = image?.asset?.metadata?.dimensions?.width;

  const getAspectRatioPadding = () => {
    if (
      typeof imageHeight === "number" &&
      typeof imageWidth === "number" &&
      imageWidth !== 0
    ) {
      const paddingPercentage = (imageHeight / imageWidth) * 100;
      return `${paddingPercentage.toFixed(2)}%`;
    }
    // Return default aspect ratio of 16:9 if dimension unavailable;
    return "56.25%";
  };

  return (
    <div
      className={cn(
        "w-full flex",
        getAlignmentClass(),
        getPaddingHorizontal(paddingHorizontal),
        getPaddingVertical(paddingVertical),
      )}
    >
      <div className="relative" style={getWidthStyle()}>
        <div
          className="relative w-full"
          style={{ paddingBottom: getAspectRatioPadding() }}
        >
          <Image
            alt={
              alt ??
              caption ??
              image?.alt ??
              image?.asset?.altText ??
              image?.asset?.title ??
              ""
            }
            fill
            src={imageUrl}
          />
        </div>
        {caption && <p className="my-2 text-sm text-muted">{caption}</p>}
      </div>
    </div>
  );
};

export default ImageBlockSection;

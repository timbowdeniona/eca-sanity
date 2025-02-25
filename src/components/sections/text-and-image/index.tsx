import type { FC } from "react";

import type { SanityTextAndImage } from "@/sanity/schema/presentation/sectionType/sections/textAndImage";
import TextAndImage from "@/components/storybook/text-and-image";
import RichText from "@/components/sanity/richtext";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  section: SanityTextAndImage;
};
const TextAndImageSection: FC<Props> = ({ section }) => (
  <TextAndImage
    body={<RichText value={section.content} />}
    image={urlForImage(section.image?.asset) ?? ""}
    imageAlt={section.image.alt}
    imagePosition={section.imagePosition}
    title={section.title}
  />
);

export default TextAndImageSection;

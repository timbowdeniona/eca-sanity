"use client";

import type { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import type {
  Attachment,
  AttachmentReferenceContentType,
  AttachmentReferenceType,
  AttachmentType,
  MathFormula,
  Span,
} from "@/sanity/types";
import type { SanityCta } from "@/sanity/schema/presentation/sectionType/sections/cta";
import type { SanityImage } from "@/sanity/schema/types";
import type { SanityImageBlock } from "@/sanity/schema/presentation/sectionType/sections/imageBlock";

const CtaSection = dynamic(() => import("@/components/sections/cta"));
const ImageBlockSection = dynamic(
  () => import("@/components/sections/image-block"),
);

export type TypeComponentProps = {
  className?: string;
  value: AttachmentType;
};

const typeComponents: Record<Attachment, FC<TypeComponentProps>> = {
  image: ({ value }) => {
    const image = value as SanityImage;
    if (!image.asset?.url) {
      return <></>;
    }
    return (
      <Image
        alt={image.alt ?? image.asset?.altText ?? image.asset?.title ?? ""}
        className={image.className}
        height={image.asset.metadata?.dimensions?.height ?? 0}
        src={image.asset.url}
        width={image.asset.metadata?.dimensions?.width ?? 0}
      />
    );
  },
  imageBlock: ({ value }) => (
    <ImageBlockSection section={value as SanityImageBlock} />
  ),
  mathFormula: ({ value }) => {
    const mathFormula = value as MathFormula;
    return <span dangerouslySetInnerHTML={{ __html: mathFormula.content }} />;
  },
  reference: ({ value }) => {
    const referenceContent = value as AttachmentReferenceContentType;
    return (
      <>
        {referenceContent.content?.map(
          (content: AttachmentReferenceType, index: number) => {
            switch (content._type) {
              case "cta":
                return (
                  <CtaSection key={index} section={content as SanityCta} />
                );
              default:
                return null;
            }
          },
        )}
      </>
    );
  },

  span: ({ value }) => <span>{(value as Span).text ?? ""}</span>,
};

export default typeComponents;

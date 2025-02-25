import type {
  DefineSchemaBase,
  DefineSchemaOptions,
  FieldDefinitionBase,
  IntrinsicTypeName,
  MaybeAllowUnknownProps,
  NarrowPreview,
  StrictDefinition,
} from "sanity";
import { defineField } from "sanity";

import type { SanityImage } from "./schema/types";
import type { SanityImageBlock } from "./schema/presentation/sectionType/sections/imageBlock";
import type { SanityCta } from "./schema/presentation/sectionType/sections/cta";

export const existingBlockStyles = {
  normal: "Normal",
  lead: "Lead",
  h1: "H1",
  h2: "H2",
  h3: "H3",
  h4: "H4",
  h5: "H5",
  h6: "H6",
  blockquote: "Quote",
  pre: "Preformatted",
};

export const displays: Record<string, string> = {
  inline: "Inline",
  "inline-block": "Inline Block",
  block: "Block",
};

export const backgroundColours: Record<string, string> = {
  transparent: "Transparent",
  white: "White",
  grey: "Grey",
  purple: "Purple",
  "purple-80": "Light Purple",
  neutral: "Neutral",
};

export type Attachment =
  | "image"
  | "imageBlock"
  | "mathFormula"
  | "reference"
  | "span";
export type AttachmentReference = "cta";
export type AttachmentReferenceType = SanityCta;
export type AttachmentReferenceContentType = {
  content: AttachmentReferenceType;
};
export type MathFormula = {
  content: string;
};
export type Span = {
  text: string;
};
export type AttachmentType =
  | AttachmentReferenceContentType
  | MathFormula
  | SanityImage
  | SanityImageBlock
  | Span;
export type BlockStyle = keyof typeof existingBlockStyles;
export type Display = keyof typeof displays;
export type ListItemType = "bullet" | "number";
export type MarkType = "link" | "anchorTargetId" | "internal" | "sub" | "sup";

export type DefineFieldParameters = Parameters<typeof defineField>;

type TType = string;
type TName = string;
type TSelect = Record<string, string> | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TPrepareValue = Record<keyof TSelect, any> | undefined;
type TAlias = IntrinsicTypeName | undefined;
type TStrict = StrictDefinition;

export type SchemaField = {
  type: TType;
  name: TName;
} & DefineSchemaBase<TType, TAlias> &
  NarrowPreview<TType, TAlias, TSelect, TPrepareValue> &
  MaybeAllowUnknownProps<TStrict> &
  FieldDefinitionBase;
export type DefineOptions = DefineSchemaOptions<TStrict, TAlias>;

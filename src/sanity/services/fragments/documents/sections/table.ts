import { groq } from "next-sanity";

export const tableFragment = groq`
  headline,
  variant,
  firstRowAsHeader,
  noRightBorder,
  caption,
  rows[] {
    columns[] {
      content,
      rowspan,
      colspan,
      horizontalAligment,
      verticalAligment
    }
  }
`;

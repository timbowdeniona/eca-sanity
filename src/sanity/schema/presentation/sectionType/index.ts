import { sections as sectionsWithoutColumns } from "./sections";
import twoColumn from "./sections/twoColumn";
import threeColumn from "./sections/threeColumn";
import fourColumn from "./sections/fourColumn";

export const sections = [
  ...sectionsWithoutColumns,
  twoColumn,
  threeColumn,
  fourColumn,
];

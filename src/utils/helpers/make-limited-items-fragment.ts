import { itemLimits } from "@/configs/articles";

type ArticleListLimitMap = {
  value: string;
  limitTo: number;
};

type LimitedItemsFragmentOptions = {
  sourceRules?: string;
  articleRules?: string;
};

/**
 * Generate a GROQ fragment that checks for the max items for a specific source.
 */
export const makeLimitedItemsFragment = (
  type: string,
  source: string,
  fragment: string,
  dateField: string,
  options?: LimitedItemsFragmentOptions,
) => {
  const limitValues: ArticleListLimitMap[] = itemLimits.map(limit => ({
    value: limit.toString(),
    limitTo: limit,
  }));

  // We add `null` as a fallback if `maxItems` is not set.
  limitValues.push({ value: "null", limitTo: 6 });

  return limitValues
    .map(({ value, limitTo }) => {
      return `
          source == "${source}" && maxItems == ${value} ${options?.sourceRules ?? ""} => *[
            _type == "${type}" ${options?.articleRules ?? ""}]{
              ${fragment}
            } | order(${dateField} desc) [0...${limitTo}],
          `;
    })
    .join("\n");
};

export default makeLimitedItemsFragment;

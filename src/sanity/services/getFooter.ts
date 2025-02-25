import type { SanityFooter } from "../schema/presentation/layout/footer";
import type { LoadQueryOptions } from "../lib/store";
import { loadQuery } from "../lib/store";
import { getFooterQuery } from "./queries/footer";

const getFooter = (options?: LoadQueryOptions) =>
  loadQuery<SanityFooter | null>(getFooterQuery, undefined, options);

export default getFooter;

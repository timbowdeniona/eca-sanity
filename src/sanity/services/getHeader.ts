import type { LoadQueryOptions } from "../lib/store";
import { loadQuery } from "../lib/store";

import type { SanityHeader } from "../schema/presentation/layout/header";

import { getHeaderQuery } from "./queries/header";

const getHeader = (options?: LoadQueryOptions) =>
  loadQuery<SanityHeader | null>(getHeaderQuery, undefined, options);

export default getHeader;

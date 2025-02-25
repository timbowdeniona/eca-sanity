"use server";

import type { SanitySocialShare } from "@/sanity/schema/presentation/layout/socialShare";
import type { LoadQueryOptions } from "../lib/store";
import { loadQuery } from "../lib/store";
import { getSocialShareQuery } from "./queries/socialShare";

const getSocialShare = async (options?: LoadQueryOptions) =>
  loadQuery<SanitySocialShare | null>(getSocialShareQuery, undefined, options);

export default getSocialShare;

"use server";

import * as queryStore from "@sanity/react-loader";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

type LoadQueryArgs = Parameters<typeof loadQuery>;
export type LoadQueryOptions = LoadQueryArgs[2];

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;

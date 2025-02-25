import type { NextFetchEvent, NextRequest } from "next/server";
import { handleRedirects } from "./middleware/handleRedirects";

export const config = {
  matcher: [
    {
      source: "/api/:path*",
    },
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [{ type: "header", key: "next-router-prefetch", value: "1" }],
    },
  ],
};

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  return await handleRedirects(request);
}

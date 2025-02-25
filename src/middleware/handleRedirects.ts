import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

type RedirectConfig = {
  from: string;
  to: string;
};

export async function handleRedirects(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname, search } = url;

  try {
    // Fetch redirects from Edge Config
    const redirects = (await get<RedirectConfig[]>("redirects")) || [];

    for (const redirect of redirects) {
      // Check if the 'from' pattern contains any regex special characters
      const isRegex = /[$^*+?()[\]{}|\\]/.test(redirect.from);

      let match;
      if (isRegex) {
        // If it's a regex pattern, use RegExp
        const fromRegex = new RegExp(`^${redirect.from}$`);

        // Compare full URL including query params
        const fullUrl = `${pathname}${search}`;

        match = fullUrl.match(fromRegex);
      } else {
        // If it's a standard string, do an exact match
        match = pathname === redirect.from ? [pathname] : null;
      }

      if (match) {
        // Create a new URL for the redirect destination
        let destinationPath = redirect.to;

        // For both regex and standard string matches, ensure we have a destinationPath
        if (isRegex) {
          for (let i = 1; i < match.length; i++) {
            destinationPath = destinationPath.replace(`$${i}`, match[i] || "");
          }
        }

        // Use URL constructor for both external and internal URLs
        const destinationURL =
          destinationPath.startsWith("http") ||
          destinationPath.startsWith("https")
            ? new URL(destinationPath)
            : new URL(destinationPath, request.url);

        // Get existing query parameters and destination query parameters
        const existingParams = new URLSearchParams(search);
        const destinationParams = new URLSearchParams(destinationURL.search);

        // Only add query params to destination URL if they don't already exist
        existingParams.forEach((value, key) => {
          if (!destinationParams.has(key)) {
            destinationParams.append(key, value);
          }
        });

        // Update destination URL with new query parameters
        destinationURL.search = destinationParams.toString();

        /*
        This is a safety mechanism to prevent infinite redirects.
        If the destination URL is different from the current URL,
        redirect to the destination URL
        */
        if (destinationURL.toString() !== request.url) {
          return NextResponse.redirect(destinationURL);
        }
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error handling redirects:", error);
  }

  return NextResponse.next();
}

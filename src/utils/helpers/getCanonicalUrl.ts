import trim from "lodash/trim";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ?? `https://${process.env.VERCEL_URL}`;

const getCanonicalUrl = (url: string): string =>
  !(url ?? "").startsWith("http://") && !(url ?? "").startsWith("https://")
    ? `${baseUrl}/${trim(url, "/")}`
    : url;

export default getCanonicalUrl;

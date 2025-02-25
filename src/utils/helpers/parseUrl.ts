/**
 * Parses a URL string and returns a URL object.
 *
 * @param url - The URL string to be parsed.
 * @returns The parsed URL object, or null if the URL string is invalid.
 */
const parseUrl = (url: string) => {
  try {
    return new URL(url);
  } catch (_error) {
    return null;
  }
};

export default parseUrl;

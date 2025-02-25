import calcLevenshteinDistance from "./calcLevenshteinDistance";

/**
 * Calculates the fuzziness between two strings.
 * @param search - The search string.
 * @param subject - The subject string.
 * @param max - The maximum fuzziness value (default: 3).
 * @returns The fuzziness value between the two strings.
 */
const calcFuzziness = (search: string, subject: string, max = 3) =>
  subject.includes(search)
    ? (1 - search.length / subject.length) * max
    : calcLevenshteinDistance(search, subject);

export default calcFuzziness;

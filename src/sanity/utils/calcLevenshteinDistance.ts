/**
 * Calculates the Levenshtein distance between two strings.
 * The Levenshtein distance is a measure of the minimum number of single-character edits
 * (insertions, deletions, or substitutions) required to change one string into another.
 *
 * @param a - The first string.
 * @param b - The second string.
 * @returns The Levenshtein distance between the two strings.
 */
const calcLevenshteinDistance = (a: string, b: string): number => {
  // If one of the strings is empty
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }
  // Create two work vectors of integer distances
  let previousRow = Array(b.length + 1).fill(0);
  let currentRow = Array(b.length + 1).fill(0);
  // Initialize the previous row with the column indices
  for (let j = 0; j <= b.length; j++) {
    previousRow[j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    currentRow[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      currentRow[j] = Math.min(
        currentRow[j - 1] + 1, // Insertion
        previousRow[j] + 1, // Deletion
        previousRow[j - 1] + cost, // Substitution
      );
    }
    // Swap the current row and previous row
    [previousRow, currentRow] = [currentRow, previousRow];
  }
  return previousRow[b.length];
};

export default calcLevenshteinDistance;

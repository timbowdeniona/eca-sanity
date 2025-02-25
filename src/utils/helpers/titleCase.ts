export function titleCase(str: string | undefined) {
  if (!str || typeof str !== "string") {
    return "";
  }
  return str.replace(/\b\w+/g, txt => {
    // Capitalize the first letter of each word
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

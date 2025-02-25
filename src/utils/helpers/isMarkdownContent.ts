// Regular expressions to check for common Markdown elements
const markdownPatterns = [
  /^#{1,6}\s.+/, // Headers (#, ##, ###, etc.)
  /^\*\*.*\*\*$|^__.*__$/, // Bold (**text** or __text__)
  /^\*[^*]+\*$|^_[^_]+_$/, // Italic (*text* or _text_)
  /\[.+\]\(.+\)/, // Links [text](url)
  /^[-*+]\s.+/, // Unordered lists (- item, * item, + item)
  /^\d+\.\s.+/, // Ordered lists (1. item, 2. item)
  /^>\s.+/, // Blockquotes (> text)
  /^```.*/, // Code blocks (``` or ~~~)
  /^!\[.*\]\(.+\)/, // Images (![alt text](url))
  /---|___|\*\*\*/, // Horizontal rules (---, ***, ___)
];

const isMarkdownContent = (content: string): boolean => {
  // Test the string against the patterns
  return markdownPatterns.some(pattern => pattern.test(content.trim()));
};

export default isMarkdownContent;

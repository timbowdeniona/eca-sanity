import type { PortableTextChild } from "sanity";

import type { RichTextValue } from "@/components/sanity/richtext";

function richtextToPlaintext(block: RichTextValue): string {
  const plainText: string[] = [];
  if (!block) {
    return "";
  }
  block.forEach(b => {
    if (b._type === "block" && b.children && Array.isArray(b.children)) {
      b.children.forEach((child: PortableTextChild) => {
        if (child._type === "span" && child.text) {
          plainText.push(String(child.text ?? ""));
        }
      });
    }
  });
  return plainText.join("\n\n");
}

export default richtextToPlaintext;

"use client";

import Link from "@/components/base/link";
import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <Link
      className="fixed bottom-4 right-4 bg-gray-50 px-4 py-2"
      href="/api/draft-mode/disable"
    >
      Disable Draft Mode
    </Link>
  );
}

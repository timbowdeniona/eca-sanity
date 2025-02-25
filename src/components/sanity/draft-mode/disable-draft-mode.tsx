'use client';

import { useDraftModeEnvironment } from 'next-sanity/hooks';

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== 'live' && environment !== 'unknown') {
    return null;
  }

  return (
    <a href="/api/draft-mode/disable" className="bg-gray-50 fixed bottom-4 right-4 px-4 py-2">
      Disable Draft Mode
    </a>
  );
}

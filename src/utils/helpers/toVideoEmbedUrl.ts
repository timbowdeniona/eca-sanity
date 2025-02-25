/**
 * Format a YouTube video URL to an embed URL.
 */
export function toVideoEmbedUrl(videoUrl: string) {
  // Regular expression to match YouTube URL formats
  const ytShortUrlPattern = /^https:\/\/(?:www\.)?youtu\.be\/([^&]*)$/;
  const ytLongUrlPattern =
    /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]*)/;

  // Check for short URL format
  let match = videoUrl.match(ytShortUrlPattern);
  if (match) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }

  // Check for long URL format
  match = videoUrl.match(ytLongUrlPattern);
  if (match) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }

  // Return the original URL if no match is found
  return videoUrl;
}

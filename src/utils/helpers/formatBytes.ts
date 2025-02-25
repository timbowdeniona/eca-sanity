const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

export function formatBytes(bytes: number, decimals: number = 2) {
  if (bytes == 0) {
    return "0 byte";
  }
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
}

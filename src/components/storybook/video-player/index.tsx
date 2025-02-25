import { cn } from "@/utils/helpers/cn";
import {
  getPaddingHorizontal,
  getPaddingVertical,
} from "@/utils/helpers/getTailwindClasses";
import { toVideoEmbedUrl } from "@/utils/helpers/toVideoEmbedUrl";
import VideoPlayerIframe from "./iframe";

export type VideoPlayerProps = {
  alt?: string;
  bgImageUrl?: string;
  border: boolean;
  fullWidth: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  src: string;
};

export function VideoPlayer({
  alt = "Media",
  bgImageUrl,
  border,
  fullWidth,
  paddingVertical = 0,
  paddingHorizontal = 0,
  src,
}: VideoPlayerProps) {
  const backgroundStyle = bgImageUrl
    ? { backgroundImage: `url(${bgImageUrl})` }
    : {};

  return (
    <div
      className={cn(
        "wrapper",
        !fullWidth && getPaddingHorizontal(paddingHorizontal),
        !fullWidth && getPaddingVertical(paddingVertical),
      )}
    >
      <div
        className="flex bg-cover"
        data-testid="banner-wrapper"
        style={backgroundStyle}
      >
        <div
          className={cn(
            "w-full p-0",
            !fullWidth && "md:px-8 md:py-12 lg:w-2/3 lg:pr-4",
            fullWidth && getPaddingHorizontal(paddingHorizontal),
            fullWidth && getPaddingVertical(paddingVertical),
          )}
        >
          <VideoPlayerIframe
            alt={alt}
            border={border}
            src={toVideoEmbedUrl(src)}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

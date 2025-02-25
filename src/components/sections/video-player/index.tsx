import { type FC } from "react";

import type { SanityVideoPlayer } from "@/sanity/schema/presentation/sectionType/sections/videoPlayer";
import VideoPlayer from "@/components/storybook/video-player";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  section: SanityVideoPlayer;
}

const VideoPlayerSection: FC<Props> = ({ section }) => {
  const { bgImage, videoUrl } = section;

  const bgImageUrl = urlForImage(bgImage?.asset) ?? "";

  return (
    <VideoPlayer
      bgImageUrl={bgImageUrl}
      border={section.variant === "featured"}
      fullWidth={section.fullWidth}
      paddingHorizontal={section.paddingHorizontal}
      paddingVertical={section.paddingVertical}
      src={videoUrl.url ?? videoUrl.internal}
    />
  );
};

export default VideoPlayerSection;

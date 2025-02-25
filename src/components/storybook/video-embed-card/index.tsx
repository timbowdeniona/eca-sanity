import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/helpers/cn";
import { Avatar } from "@/components/storybook/avatar";
import Play from "@/components/storybook/icons/Play";

type VideoOwner = {
  name: string;
  description: string;
  imageUrl?: string;
};

type Props = {
  className?: string;
  youtubeEmbedUrl: string;
  title: string;
  summary?: string;
  owner: VideoOwner;
};

export const VideoEmbedCard = ({
  className,
  youtubeEmbedUrl,
  title,
  summary,
  owner,
}: Props) => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const embedIframe = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!embedIframe.current) {
      return;
    }

    if (videoPlaying) {
      // Add `autoplay=1` src to start playing the video
      const separator = embedIframe.current.src.includes("?") ? "&" : "?";
      embedIframe.current.src += `${separator}autoplay=1`;
    }
  }, [videoPlaying]);

  return (
    <div className={cn(className, "bg-white")}>
      <div className="relative w-full">
        <iframe
          allow="autoplay"
          allowFullScreen
          className="aspect-[16/9] w-full"
          data-testid="feat-promo-embed"
          loading="lazy"
          ref={embedIframe}
          src={youtubeEmbedUrl}
          title={title}
        ></iframe>
        {!videoPlaying && (
          <button
            className="absolute bottom-0 rounded-r-full bg-red"
            data-testid="play-button"
            onClick={() => setVideoPlaying(true)}
          >
            <Play />
          </button>
        )}
      </div>
      <div className="border-2 border-t-0 border-grey px-6 py-8">
        <h3 className="line-clamp-2 text-purple">{title}</h3>
        <div className="my-3 flex gap-x-4">
          <div>
            <Avatar alt={owner.name} src={owner.imageUrl} />
          </div>
          <div className="flex flex-col justify-center gap-y-0.5 text-sm">
            <p className="font-bold">{owner.name}</p>
            <p className="line-clamp-1">{owner.description}</p>
          </div>
        </div>
        {summary && <p className="line-clamp-3">{summary}</p>}
      </div>
    </div>
  );
};

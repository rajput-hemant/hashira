"use client";

import { usePlayer } from "@/hooks";
import Hls from "hls.js";

import { cn } from "@/lib/utils";

type ArtPlayerProps = {
  url: string;
  className?: string;
};

/**  https://github.com/Ashanime/Ashanime-Web-App/blob/main/src/components/videoplayer/ArtPlayer.tsx */
const ArtPlayer = ({ url, className }: ArtPlayerProps) => {
  const playerRef = usePlayer({
    url: url,
    container: ".artplayer-app",
    autoSize: false,
    autoOrientation: true,
    title: "",
    volume: 1,
    isLive: false,
    muted: false,
    autoplay: false,
    pip: true,
    autoMini: true,
    screenshot: true,
    setting: true,
    loop: false,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: false,
    subtitleOffset: true,
    miniProgressBar: false,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,
    theme: "bg-rose-500", // use hash color
    whitelist: ["*"],
    moreVideoAttr: {
      crossOrigin: "anonymous",
    },

    customType: {
      m3u8: (video: HTMLMediaElement, url: string) => {
        if (Hls.isSupported()) {
          const hls = new Hls();

          hls.loadSource(url);
          hls.attachMedia(video);
        } else {
          const canPlay = video.canPlayType("application/vnd.apple.mpegurl");
          if (canPlay === "probably" || canPlay === "maybe") {
            video.src = url;
          }
        }
      },
    },
  });

  return <div ref={playerRef} className={cn("artplayer-app", className)} />;
};

export default ArtPlayer;

"use client";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

export function VideoPlayer({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  return (
    <MediaPlayer
      aspectRatio="16/9"
      autoPlay
      playsInline
      src={`youtube/${youtubeId}`}
      title={title}
    >
      <MediaProvider />
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
        thumbnails="https://www.youtube.com/api/timedtext?lang=en&v=1bx-eosOOkE&fmt=vtt"
      />
    </MediaPlayer>
  );
}

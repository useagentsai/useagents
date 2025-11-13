import Image from "next/image";
import Link from "next/link";
import { extractYouTubeId } from "@/utils/extract-youtube-id";
import { videos } from "./video-list";

export function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const videoId = extractYouTubeId(video.youtubeUrl);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  return (
    <Link
      className="lg:p-3 p-2 rounded-3xl cursor-pointer flex flex-col gap-5 duration-300 dark:hover:bg-accent/50 hover:bg-accent transition-all max-w-[450px] w-full"
      href={`/videos/v/${video.id}`}
    >
      <div className="relative w-full aspect-video">
        <Image
          alt={video.title}
          className="rounded-2xl object-cover border"
          fill
          src={thumbnail}
        />
      </div>
      <div className="flex flex-col gap-2 px-2">
        {/* Single-line ellipsis for title */}
        <h1 className="text-lg font-medium truncate">{video.title}</h1>

        {/* Multi-line ellipsis (2 lines) for description */}
        <p className="text-muted-foreground text-base  line-clamp-2">
          {video.description}
        </p>
      </div>
    </Link>
  );
}

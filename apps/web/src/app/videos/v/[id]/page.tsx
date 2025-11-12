import { YouTubeEmbed } from "@next/third-parties/google";
import { FadeInOutWrapper } from "@/components/motion-wrappers";
import { extractYouTubeId, VideoCard } from "@/components/video-card";
import { VideoPlayer } from "@/components/video-player";
import { getVideoById } from "@/lib/videos";

const videos = [
  {
    id: "video-1",
    title: "Building agents with the AI SDK (Nico Albanese)",
    description: "Learn the basics of building AI agents with the AI SDK.",
    youtubeUrl: "https://www.youtube.com/watch?v=1bx-eosOOkE&t=2275s",
    category: ["Agents"],
    creator: "Vercel",
    publishedAt: "2025-06-15",
  },
  {
    id: "video-2",
    title: "Vercel AI SDK Masterclass: From Fundamentals to Deep Research",
    description: "Learn the basics of building AI agents with the AI SDK.",
    youtubeUrl: "https://www.youtube.com/watch?v=kDlqpN1JyIw&t=10s",
    category: ["Framework"],
    creator: "AI Engineer",
    publishedAt: "2025-06-15",
  },
  {
    id: "video-3",
    title: "Creating Custom GPT Agents with Next.js",
    description:
      "Step-by-step guide to integrating GPT-powered agents into your Next.js apps.",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: ["Agents", "Next.js"],
    creator: "OpenAI Dev",
    publishedAt: "2025-07-01",
  },
];

export default async function VideoWatchPage(
  props: PageProps<"/videos/v/[id]">
) {
  const { id } = await props.params;

  const video = getVideoById(id);

  if (!video) {
    return (
      <div>
        <h1>video not found</h1>
      </div>
    );
  }

  const youtubeId = extractYouTubeId(video.youtubeUrl);

  return (
    <FadeInOutWrapper className="container max-w-5xl mx-auto my-10">
      <div className="relatve aspect-video">
        <YouTubeEmbed
          height={400}
          params="autoplay=1"
          style="width: 100%; max-width: 100%;"
          videoid={youtubeId as string}
        />
      </div>

      <div className="flex flex-col gap-2 my-10 pl-5">
        {/* Single-line ellipsis for title */}
        <h1 className="text-2xl font-medium truncate">{video.title}</h1>

        {/* Multi-line ellipsis (2 lines) for description */}
        <p className="text-muted-foreground text-base line-clamp-2">
          {video.description}
        </p>
      </div>
      <div className="flex flex-col gap-2 my-10 w-full">
        {/* Single-line ellipsis for title */}
        <h2 className="lg:text-xl text-lg font-medium mb-2 pl-5">
          More related videos
        </h2>

        {/* Multi-line ellipsis (2 lines) for description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </FadeInOutWrapper>
  );
}

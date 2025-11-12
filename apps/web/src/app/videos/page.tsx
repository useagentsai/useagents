import { Metadata } from "next";
import { Suspense } from "react";
import { FadeInOutWrapper } from "@/components/motion-wrappers";
import { VideoFilters } from "@/components/video-filters";
import VideoList from "@/components/video-list";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Dive into a curated library of videos on creating AI-powered tools, agents, and frameworks learn from the builders shaping the future.",
};

export default function VideosPage() {
  return (
    <FadeInOutWrapper className="max-w-[1400px] mx-auto">
      <h1 className="lg:text-3xl text-2xl mb-3 mt-10 max-w-xl text-balance font-medium pl-5">
        Master the craft of building with AI
      </h1>
      <p className="mb-10 text-muted-foreground text-balance max-w-xl pl-5">
        Dive into a curated library of videos on creating AI-powered tools,
        agents, and frameworks learn from the builders shaping the future.
      </p>

      <div className="mb-6 pl-5">
        <VideoFilters />
      </div>

      <Suspense>
        <VideoList category="all" />
      </Suspense>
    </FadeInOutWrapper>
  );
}

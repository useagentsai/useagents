import type { Metadata } from "next";
import { Suspense } from "react";
import { FadeInWrapper } from "@/components/motion-wrappers";
import { VideoFilters } from "@/components/video-filters";
import VideoList from "@/components/video-list";
import { videoSections } from "@/data/video-sections";
import { getAllCategories } from "@/lib/tools";
import { ToolCategory } from "@/lib/types";

interface VideoCategoryPageProps {
  params: Promise<{ category: ToolCategory }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: VideoCategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const section = videoSections.find((s) => s.slug === category.toLowerCase());

  return {
    title: `${section?.tag}`,
    description: section?.description,
  };
}

export default async function VideoCategoryPage(
  props: PageProps<"/[category]">
) {
  const { category } = await props.params;

  const section = videoSections.find((s) => s.slug === category.toLowerCase());

  return (
    <FadeInWrapper className="container max-w-[1440px] mx-auto">
      <div className="mb-8 mt-10">
        <div className="mb-10">
          <h1 className="lg:text-2xl text-xl font-medium mb-2 bg-linear-to-r from-primary to-primary/70 text-transparent bg-clip-text pl-5">
            {section?.tag}
          </h1>
          <p className="text-muted-foreground pl-5">{section?.description}</p>
        </div>

        <div className="mb-6 pl-5">
          <VideoFilters />
        </div>

        <Suspense>
          <VideoList category={category} />
        </Suspense>
      </div>
    </FadeInWrapper>
  );
}

import { VideosMenu } from "@/components/video-menu";

export default function VideoLayout(props: LayoutProps<"/videos">) {
  return (
    <div className="flex min-h-screen w-full">
      <VideosMenu />
      <main className="flex-1 lg:px-10 px-5 py-6 pt-16 md:pt-16 space-y-8 overflow-y-auto w-full">
        {props.children}
      </main>
    </div>
  );
}

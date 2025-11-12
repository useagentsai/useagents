import { videoSections } from "@/data/video-sections";
import videosData from "@/data/videos.json";

export const videos = videosData;

export function getVideoById(id: string) {
  return videos.find((video) => video.id === id);
}

export function getVideosByCategory(
  category: (typeof videoSections)[number]["slug"]
) {
  if (category === "all") {
    return videos;
  }

  const lowerCategory =
    typeof category === "string"
      ? category.toLowerCase()
      : String(category).toLowerCase();

  return videos.filter((video) => {
    if (Array.isArray(video.category)) {
      return video.category.some(
        (cat) => String(cat).toLowerCase() === lowerCategory
      );
    }
    return String(video.category).toLowerCase() === lowerCategory;
  });
}

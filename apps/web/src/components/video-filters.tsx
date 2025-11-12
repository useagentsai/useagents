import { Suspense } from "react";
import { VideosSearchFilter } from "./video-search-filter";

export function VideoFilters() {
  return (
    <Suspense>
      <VideosSearchFilter />
    </Suspense>
  );
}

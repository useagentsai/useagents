"use client";

import { useCallback } from "react";
import { useVideosFilterParams } from "@/hooks/use-videos-filter-params";
import { SearchInputFilter } from "./search-input-filter";

export function VideosSearchFilter() {
  const { filters, setFilters } = useVideosFilterParams();

  const handleSearchChange = useCallback(
    (value: string) => {
      setFilters({ q: value });
    },
    [setFilters]
  );

  const handleClear = useCallback(() => {
    setFilters({ q: null });
  }, [setFilters]);

  return (
    <SearchInputFilter
      onChange={handleSearchChange}
      onClear={handleClear}
      placeholder="Search by name..."
      value={filters.q}
    />
  );
}

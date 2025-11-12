import { parseAsString, useQueryStates } from "nuqs";

const videoParsers = {
  q: parseAsString,
};

export function useVideosFilterParams() {
  const [filters, setFilters] = useQueryStates(videoParsers);

  return {
    filters,
    setFilters,
    hasFilters: Object.values(filters).some((value) => value !== null),
  };
}

import { useQuery } from "@tanstack/react-query";
import createApiClient, { type FetchResponse } from "../services/apiClient";
import genres from "../data/genre";
import type { Genre } from "../entites/Genre";

const apiClient = createApiClient<FetchResponse<Genre>>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.count, results: genres.results, next: null },
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useGenres;

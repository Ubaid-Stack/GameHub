import { useQuery } from "@tanstack/react-query";
import createApiClient, { type FetchResponse } from "../services/apiClient";
import genres from "../data/genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = createApiClient<FetchResponse<Genre>>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.count, results: genres.results },
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useGenres;

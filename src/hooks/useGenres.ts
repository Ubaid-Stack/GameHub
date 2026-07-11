import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { type FetchResponse } from "./useData";
import genres from "../data/genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.count, results: genres.results },
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useGenres;

import type Game from "../entites/Game";
import createApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = createApiClient<Game>("/games");

const useGames = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGames;

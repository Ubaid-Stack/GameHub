import { useInfiniteQuery } from "@tanstack/react-query";
import createApiClient, { type FetchResponse } from "../services/apiClient";
import useGameStore from "../store/gameStore";
import type { Game } from "../entites/Game";
const apiClient = createApiClient<FetchResponse<Game>>("/games");

const useGame = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGame;

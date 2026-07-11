import type { GameQuery } from "../App";
import createApiClient, { type FetchResponse } from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { type Platform } from "./usePlateform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = createApiClient<FetchResponse<Game>>("/games");

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
export default useGame;

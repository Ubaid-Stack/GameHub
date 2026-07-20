import createApiClient, { type FetchResponse } from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import type { Screenshots } from "../entites/Screenshots";

const useScreenshots = (gameId: number) => {
  const apiClient = createApiClient<FetchResponse<Screenshots>>(
    `/games/${gameId}/screenshots`,
  );
  return useQuery({
    queryKey: ["screenshots", gameId], 
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useScreenshots;

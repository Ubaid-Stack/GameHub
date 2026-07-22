import createApiClient from "../services/apiClient";
import type { FetchResponse } from "../services/apiClient";
import type Trailer from "../entities/Trailer";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
  const apiClient = createApiClient<FetchResponse<Trailer>>(
    `/games/${gameId}/movies`,
  );
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useTrailers;

import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../services/apiClient";
import platform from "../data/platform";
import createApiClient from "../services/apiClient";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = createApiClient<FetchResponse<Platform>>(
  "/platforms/lists/parents",
);

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platform.count, results: platform.results },
  });
export default usePlatforms;

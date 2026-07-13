import axios, { type AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

const createApiClient = <T>(endpoint: string) => ({
  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<T>(endpoint, config)
      .then((response) => response.data);
  },
});

export default createApiClient;

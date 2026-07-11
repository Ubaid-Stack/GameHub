import { CanceledError, type AxiosRequestConfig } from "axios";
import apiClient from "../services/apiClient";
import { useState, useEffect, type DependencyList } from "react";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: DependencyList = [],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError("");

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, error, loading };
};

export default useData;

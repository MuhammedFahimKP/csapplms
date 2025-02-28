import { useState, useEffect } from "react";

import apiClient, {
  ApiClientError,
  ApiClientCanceledError,
  type ApiClientConfig,
} from "@/lib/api-client";

const useData = <T>(
  endpoint: string,
  confiq?: ApiClientConfig,
  timeout?: number,
  deps?: any[]
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ApiClientError | null>(null);

  useEffect(
    () => {
      setIsLoading(true);

      if (error) {
        setError(null);
      }

      const controller = new AbortController();
      const fetchTimeout = setTimeout(() => {
        apiClient
          .get<T>(endpoint, { ...confiq, signal: controller.signal })
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            if (err instanceof ApiClientCanceledError) return;
            setError(err);
          })
          .finally(() => setIsLoading(false));
      }, timeout || 0);

      return () => {
        controller.abort();
        clearTimeout(fetchTimeout);
      };
    },
    deps ? deps : []
  );

  return { data, isLoading, error };
};

export default useData;

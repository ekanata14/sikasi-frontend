// hooks/useDataFetcher.ts
import * as React from "react";
import axiosInstance from "~/lib/axios";

interface DataFetcherProps<T> {
  endpoint: string;
  onSuccess: (data: T) => void;
  onError: (error: unknown) => void;
  onLoading?: (isLoading: boolean) => void;
  onFinally?: (isLoading: boolean) => void;
}

interface DataFetcherCache {
  [key: string]: any;
}

const cache: DataFetcherCache = {};

export const getDataFromCookies = (key: string): string | undefined => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((row) => row.startsWith(`${key}=`));

  return cookie ? cookie.split("=")[1] : undefined;
};

export const useDataFetcher = <T>(props: DataFetcherProps<T>): void => {
  const { endpoint, onSuccess, onError, onLoading, onFinally } = props;

  const fetchData = React.useCallback(async (): Promise<void> => {
    onLoading?.(true);

    try {
      const token: string = getDataFromCookies("token");

      const headers: Pick<typeof axiosInstance.defaults.headers, "Authorization"> = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axiosInstance.get<T>(endpoint, {
        headers,
      });

      if (response.status === 200) {
        cache[endpoint] = response.data;

        onSuccess(response.data as T);
      }
    } catch (error: unknown) {
      console.error("Error fetching data:", error);

      onError(error);
    } finally {
      onLoading?.(false);
      onFinally?.(false);
    }
  }, [endpoint, onSuccess, onError, onLoading, onFinally]);

  const data = React.useMemo(() => {
    return cache[endpoint];
  }, [endpoint]);

  React.useEffect(() => {
    if (!data) {
      fetchData();
    } else {
      onSuccess(data);
    }
  }, []);
};

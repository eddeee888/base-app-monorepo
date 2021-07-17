import { useState } from "react";

export interface UseFetchParams<B> {
  url?: string;
  body?: B;
  method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
  onError?: (error: Error) => void;
  onCompleted?: (data: string) => void;
}

export type FetchFn = <B>(overriddenParam?: UseFetchParams<B>) => void;

export interface UseFetchResult {
  data?: string;
  error?: Error;
  loading: boolean;
}

export const useFetch = <B extends Record<string, unknown>>(params?: UseFetchParams<B>): [FetchFn, UseFetchResult] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [data, setData] = useState<string | undefined>(undefined);

  const fn: FetchFn = (overriddenParam): void => {
    const finalUrl = overriddenParam?.url ?? params?.url;
    const finalBody = overriddenParam?.body ?? params?.body;
    const finalOnError = overriddenParam?.onError ?? params?.onError;
    const finalOnCompleted = overriddenParam?.onCompleted ?? params?.onCompleted;
    const finalMethod = overriddenParam?.method ?? params?.method;

    fetch(finalUrl ?? "", {
      method: finalMethod ?? "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalBody ?? {}),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.text();
      })
      .then((data) => {
        setData(data);
        setError(undefined);
        if (finalOnCompleted) {
          finalOnCompleted(data);
        }
      })
      .catch((error) => {
        setError(error);
        if (finalOnError) {
          finalOnError(error);
        }
      })
      .finally(() => setLoading(false));

    setLoading(true);
  };

  return [
    fn,
    {
      data: data,
      loading: loading,
      error: error,
    },
  ];
};

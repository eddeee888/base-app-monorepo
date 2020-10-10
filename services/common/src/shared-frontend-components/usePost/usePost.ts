import { useState } from "react";

export interface UseFetchParams<B> {
  url?: string;
  body?: B;
  onError?: (error: Error) => void;
  onCompleted?: (data: string) => void;
}

export type PostFn = <B>(overriddenParam?: UseFetchParams<B>) => void;

export interface UseFetchResult {
  data?: string;
  error?: Error;
  loading: boolean;
}

const usePost = <B extends Record<string, unknown>>(params?: UseFetchParams<B>): [PostFn, UseFetchResult] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [data, setData] = useState<string | undefined>(undefined);

  const postFn: PostFn = (overriddenParam): void => {
    const finalUrl = overriddenParam?.url ?? params?.url;
    const finalBody = overriddenParam?.body ?? params?.body;
    const finalOnError = overriddenParam?.onError ?? params?.onError;
    const finalOnCompleted = overriddenParam?.onCompleted ?? params?.onCompleted;

    fetch(finalUrl ?? "", {
      method: "POST",
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
    postFn,
    {
      data: data,
      loading: loading,
      error: error,
    },
  ];
};

export default usePost;

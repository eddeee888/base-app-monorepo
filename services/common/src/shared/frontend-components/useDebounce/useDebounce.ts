import { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface UseDebounceProps<T> {
  initialValue: T;
  duration: number;
}

const useDebounce = <T>({ initialValue, duration }: UseDebounceProps<T>): [T, T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [value, duration]);

  return [debouncedValue, value, setValue];
};

export default useDebounce;

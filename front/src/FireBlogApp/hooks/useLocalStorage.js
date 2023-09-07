import { useCallback, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setLocalValue] = useState(localStorage.getItem(key) || defaultValue);

  const setValue = useCallback(
    (newValue) => {
      setLocalValue(newValue);
      localStorage.setItem(key, newValue);
    },
    [key]
  );

  return [value, setValue];
}

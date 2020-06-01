import { useState, useEffect } from "react";

const useStorageState = (
  defaultValue: any,
  key: string
): [any, (value: any) => void] => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const persistedValue = window.localStorage.getItem(key);
    setValue(JSON.parse(persistedValue));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorageState;

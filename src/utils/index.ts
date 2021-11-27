import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? true : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// hook
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = useState(value);

  // 每次在value变化后设置定制器
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    // 清理上一次定时器任务
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

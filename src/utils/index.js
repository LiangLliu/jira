import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? true : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

// hook
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  // 每次在value变化后设置定制器
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);

    // 清理上一次定时器任务
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

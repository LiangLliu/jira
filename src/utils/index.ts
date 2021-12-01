import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? true : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// hook
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // todo : 依赖项中加入callback,会无限循环

    // eslint-disable-next-line  react-hooks/exhaustive-deps
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

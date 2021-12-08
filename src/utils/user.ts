import { useAsync } from "./use-async";
import { useEffect } from "react";
import { cleanObject } from "./index";
import { useHttp } from "./http";
import { User } from "../screans/project-list/search-panel";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));

    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [param]);

  return result;
};

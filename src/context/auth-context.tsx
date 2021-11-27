import React, { ReactNode, useState } from "react";
import * as auth from "auth-provider";
import { User } from "../screans/project-list/search-panel";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, serUser] = useState<User | null>(null);

  // point free
  const login = (form: AuthForm) => auth.login(form).then(serUser);
  const register = (form: AuthForm) => auth.register(form).then(serUser);
  const logout = () => auth.logout().then(() => serUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在AuthProvider中使用");
  }
  return context;
};

import { useContext } from "react";
import { Authcontext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(Authcontext);

  if (!auth.user) {
    return children;
  }

  return children;
};

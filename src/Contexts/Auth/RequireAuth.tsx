import { useContext } from "react";
import { Authcontext } from "./AuthContext";
import Login from "../../Routes/Login/Login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(Authcontext);

  if (!auth.user) {
    return <Login />;
  }

  return children
};

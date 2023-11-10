import { useNavigate } from "react-router-dom";
import UserServices from "../services/userServices";

// ...

export const ProtectedRoutes = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const navigate = useNavigate();
  // const userAuthenticated = new UserServices().isAuthenticated();
  const userAuthenticated = null;

  if (!userAuthenticated) {
    navigate("/not-auth");
  }

  return <>{children}</>;
};

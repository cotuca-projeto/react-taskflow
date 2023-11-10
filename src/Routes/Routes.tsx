import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Error from "./Error/Error";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Cointainer from "./Container/Container";

export const Routering = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProtectedRoutes children={<Home />} />,
      },
      {
        path: "/project",
        element: (
          <ProtectedRoutes
            children={<Cointainer imageUrl={""} userProfile={""} />}
          />
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/not-auth",
        element: <Error statuscode={401} title={"Você não tem permissão para acesar essa página!"} />,
      },
    ],
    errorElement: <Error statuscode={404} title={"Página não encontrada!"} />,
  },
]);

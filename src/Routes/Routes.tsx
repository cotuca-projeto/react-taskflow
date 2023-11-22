import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Error from "./Error/Error";
import Cointainer from "./Project/Project";
import { RequireAuth } from "../Contexts/Auth/RequireAuth";

export const Routering = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error statuscode={404} title={"Página não encontrada!"} />,
  },
  {
    path: "/project",
    element: (
      <RequireAuth>
        <Cointainer />
      </RequireAuth>
    ),
    errorElement: <Error statuscode={503} title="Serviço indisponível" />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error statuscode={503} title="Serviço indisponível" />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error statuscode={503} title="Serviço indisponível" />,
  },
  {
    path: "/not-auth",
    element: (
      <Error
        statuscode={401}
        title={"Você não tem permissão para acesar essa página!"}
      />
    ),
  },
]);

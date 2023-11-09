import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Error from "./Error/Error";

export const Routering = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

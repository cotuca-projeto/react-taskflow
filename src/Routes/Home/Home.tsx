import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import MenuAlternative from "../../components/Menu-alternative.tsx/menuAlternative";
import "./Home.module.css";
import { ProtectedRoutes } from "../ProtectedRoutes";

export default function () {
  return (
    <>
      <MenuAlternative />
        <Outlet />
      <Footer />
    </>
  );
}

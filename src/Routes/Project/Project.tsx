/* eslint-disable import/no-anonymous-default-export */
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "./Project.module.css";
import sidebar from "../../components/sidebar/sidebar";

export default function () {

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.outlet}>
          <h1>Olá</h1>
          <Outlet />
        </div>
        <Navbar />
      </div>
    </>
  );
}

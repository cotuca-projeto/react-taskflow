/* eslint-disable import/no-anonymous-default-export */
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import styles from "./Project.module.css";

export default function () {

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <Navbar />
      </div>
    </>
  );
}

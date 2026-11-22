// import styles from "./Layout.module.css";

import { Outlet } from "react-router";
import { Menu } from "../../components/Menu/Menu";
export const Layout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Layout;

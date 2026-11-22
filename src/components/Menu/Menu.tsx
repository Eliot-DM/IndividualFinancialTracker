// import styles from "./Menu.module.css";

import { useEffect } from "react";
import { NavLink } from "react-router";
import { useStore } from "../../store/useStore";

export const Menu = () => {
  const theme = useStore((state) => state.user.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="mt-4 mb-10 flex justify-between items-center">
      <nav className="flex justify-between items-center lg:gap-20 gap-0 w-8/10">
        <NavLink
          className="w-2/10 p-2 flex items-center justify-center text-black
          menu-item"
          to={"/"}
        >
          Панель управления
        </NavLink>
        <NavLink
          className="w-2/10 p-2 flex items-center justify-center text-black
          menu-item"
          to={"/transactions"}
        >
          Транзакции
        </NavLink>
        <NavLink
          className="w-2/10 p-2 flex items-center justify-center text-black
          menu-item"
          to={"/addTransaction"}
        >
          Добавить транзакцию
        </NavLink>
        <NavLink
          className="w-2/10 p-2 flex items-center justify-center text-black
          menu-item"
          to={"/statistics"}
        >
          Статистика
        </NavLink>
      </nav>
      <button className="p-2 w-1/10 menu-item" onClick={toggleTheme}>
        {theme === "dark" ? "Светлая" : "Тёмная"}
      </button>
    </div>
  );
};

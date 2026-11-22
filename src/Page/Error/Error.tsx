// import styles from "./Error.module.css";
import { Link, useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate(); // ← хук на верхнем уровне

  return (
    <>
      <h2 className="mb-4 text-xl font-medium">Страница не найдена</h2>
      <div className="flex flex-col items-center gap-5">
        <button
          className="text-xl font-medium menu-item min-w-3xs p-2"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
        <Link to="/" className="text-xl font-medium menu-item min-w-3xs p-2">
          На главную
        </Link>
      </div>
    </>
  );
};

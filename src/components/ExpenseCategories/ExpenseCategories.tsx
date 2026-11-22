// import styles from "./ExpenseCategories.module.css";

import { categories } from "../../Data/Data";
import { useStore } from "../../store/useStore";

type P = {
  quantity: number;
};

export const ExpenseCategories = ({ quantity }: P) => {
  const { sumCategories } = useStore();

  const catPie = categories
    .filter((a) => sumCategories(a.translation) != 0)
    .slice(-quantity);

  return (
    <div className="flex justify-center gap-10">
      {catPie.map((a) => {
        return (
          <div key={a.id} className="w-50 border-2 rounded-xl">
            <p>{a.translation}</p>
            <p>{sumCategories(a.translation)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseCategories;

// import styles from "./Finance.module.css";

import { useStore } from "../../store/useStore";

export const Finance = () => {
  const { balance, expense, income } = useStore();

  return (
    <div className="mb-5 flex justify-center gap-10">
      <div className="w-50 border-2 rounded-xl">
        <p>Баланс</p>
        <p>
          {balance()}
          <span>р</span>
        </p>
      </div>
      <div className="w-50 border-2 rounded-xl">
        <p>Доход</p>
        {income()}
        <span>р</span>
      </div>
      <div className="w-50 border-2 rounded-xl">
        <p>Расход</p>
        {expense()}
        <span>р</span>
      </div>
    </div>
  );
};

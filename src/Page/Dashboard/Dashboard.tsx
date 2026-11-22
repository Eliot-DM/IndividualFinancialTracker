// import styles from "./Dashboard.module.css";

import ExpenseCategories from "../../components/ExpenseCategories/ExpenseCategories";
import { Finance } from "../../components/Finance/Finance";
import { LatestOperations } from "../../components/LatestOperations/LatestOperations";

export const Dashboard = () => {
  return (
    <>
      <Finance />
      <div className="mb-5">
        <h3 className="mb-4 text-xl font-medium">Последнии операции</h3>
        <LatestOperations quantity={3} />
      </div>
      <div>
        <h3 className="mb-4 text-xl font-medium">Расход по катигориям</h3>
        <ExpenseCategories quantity={4} />
      </div>
    </>
  );
};

// import styles from "./TableMonth.module.css";

import ExpensePieChart from "../../components/Graph/ExpensePieChart/ExpensePieChart";
import LineGraph from "../../components/Graph/LineGraph/LineGraph";
import PieChartProfit from "../../components/Graph/ProfitPieGraph/ProfitPieGraph";
import { TableMonth } from "../../components/TableMonth/TableMonth";

export const Statistics = () => {
  return (
    <>
      <h3 className="mb-4 text-xl font-medium">График по месяцам</h3>
      <TableMonth />
      <LineGraph />
      <div className="flex justify-center">
        <PieChartProfit />
        <ExpensePieChart />
      </div>
    </>
  );
};

export default Statistics;

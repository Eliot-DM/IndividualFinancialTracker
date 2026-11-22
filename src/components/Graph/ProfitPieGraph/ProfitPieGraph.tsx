import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useStore } from "../../../store/useStore";

import { categories } from "../../../Data/Data";

const COLORS = [
  "#FFBB28",
  "#286CFF",
  "#29FFBB",
  "#BB29FF",
  "#FF5028",
  "#D7FF28",
  "#FFE628",
  "#ECA100",
  "#4F28FF",
  "#28D7FF",
  "#6C6C6C",
  "#1A1A1A",
];

export const ProfitPieGraph = () => {
  const { user } = useStore();

  const catPie = categories
    .map((category) => ({
      id: category.id,
      name: category.name,
      payment: user.operations.reduce((sum, item) => {
        if (item.category === category.translation && item.type === "income") {
          return sum + Number(item.amount);
        }

        return sum;
      }, 0),
      translation: category.translation,
    }))
    .filter((category) => category.payment > 0);

  return (
    <div className="">
      <p>График доходов</p>
      <PieChart width={400} height={400}>
        <Tooltip />
        <Pie
          data={catPie}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          dataKey="payment"
          nameKey="translation"
          labelLine={false}
        >
          {catPie.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default ProfitPieGraph;

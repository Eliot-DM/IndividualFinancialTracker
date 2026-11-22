import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useStore } from "../../../store/useStore";
import { categories } from "../../../Data/Data";

const COLORS = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#9B59B6",
  "#E74C3C",
  "#1ABC9C",
  "#2ECC71",
  "#3498DB",
  "#8E44AD",
  "#7F8C8D",
  "#2C3E50",
];

export const ExpensePieChart = () => {
  const { user } = useStore();

  const catPie = categories
    .map((category) => ({
      id: category.id,
      name: category.name,
      payment: user.operations.reduce((sum, item) => {
        if (item.category === category.translation && item.type === "expense") {
          return sum + Number(item.amount);
        }

        return sum;
      }, 0),
      translation: category.translation,
    }))
    .filter((category) => category.payment > 0);

  return (
    <div>
      <p>График расходов</p>
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

export default ExpensePieChart;

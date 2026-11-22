import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useStore } from "../../../store/useStore";

const LineGraph = () => {
  const { user } = useStore();
  const operations = user.operations;

  const tm = (m: number) =>
    operations.filter((t) => {
      const date = new Date(t.date);
      return date.getFullYear() === 2026 && date.getMonth() === m - 1;
    });

  const income = (m: number) =>
    tm(m)
      .filter((t) => t.type === "income")
      .reduce((sum, count) => sum + count.amount, 0);

  const extens = (m: number) =>
    tm(m)
      .filter((t) => t.type === "expense")
      .reduce((sum, count) => sum + count.amount, 0);

  const months = [
    {
      id: 1,
      name: "January",
      translation: "январь",
      income: income(1),
      extens: extens(1),
    },
    {
      id: 2,
      name: "February",
      translation: "февраль",
      income: income(2),
      extens: extens(2),
    },
    {
      id: 3,
      name: "March",
      translation: "март",
      income: income(3),
      extens: extens(3),
    },
    {
      id: 4,
      name: "April",
      translation: "апрель",
      income: income(4),
      extens: extens(4),
    },
    {
      id: 5,
      name: "May",
      translation: "май",
      income: income(5),
      extens: extens(5),
    },
    {
      id: 6,
      name: "June",
      translation: "июнь",
      income: income(6),
      extens: extens(6),
    },
    {
      id: 7,
      name: "July",
      translation: "июль",
      income: income(7),
      extens: extens(7),
    },
    {
      id: 8,
      name: "August",
      translation: "август",
      income: income(8),
      extens: extens(8),
    },
    {
      id: 9,
      name: "September",
      translation: "сентябрь",
      income: income(9),
      extens: extens(9),
    },
    {
      id: 10,
      name: "October",
      translation: "октябрь",
      income: income(10),
      extens: extens(10),
    },
    {
      id: 11,
      name: "November",
      translation: "ноябрь",
      income: income(11),
      extens: extens(11),
    },
    {
      id: 12,
      name: "December",
      translation: "декабрь",
      income: income(12),
      extens: extens(12),
    },
  ];

  return (
    <div className="mb-10">
      <LineChart width="80%" height={300} data={months}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="translation" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="income" stroke="#8884d8" />
        <Line type="monotone" dataKey="extens" stroke="#888888" />
      </LineChart>
    </div>
  );
};

export default LineGraph;

// import styles from "./TableMonth.module.css";

import { useStore } from "../../store/useStore";

export const TableMonth = () => {
  const { user } = useStore();

  const tm = (m: number) =>
    user.operations.filter((t) => {
      const date = new Date(t.date);
      return date.getFullYear() === 2026 && date.getMonth() === m - 1;
    });

  const income = (m: number) =>
    tm(m)
      .filter((t) => t.type === "income")
      .reduce((sum, count) => sum + Number(count.amount), 0);

  const expense = (m: number) =>
    tm(m)
      .filter((t) => t.type === "expense")
      .reduce((sum, count) => sum + Number(count.amount), 0);

  const months = [
    {
      id: 1,
      name: "January",
      translation: "январь",
      income: income(1),
      expense: expense(1),
    },
    {
      id: 2,
      name: "February",
      translation: "февраль",
      income: income(2),
      expense: expense(2),
    },
    {
      id: 3,
      name: "March",
      translation: "март",
      income: income(3),
      expense: expense(3),
    },
    {
      id: 4,
      name: "April",
      translation: "апрель",
      income: income(4),
      expense: expense(4),
    },
    {
      id: 5,
      name: "May",
      translation: "май",
      income: income(5),
      expense: expense(5),
    },
    {
      id: 6,
      name: "June",
      translation: "июнь",
      income: income(6),
      expense: expense(6),
    },
    {
      id: 7,
      name: "July",
      translation: "июль",
      income: income(7),
      expense: expense(7),
    },
    {
      id: 8,
      name: "August",
      translation: "август",
      income: income(8),
      expense: expense(8),
    },
    {
      id: 9,
      name: "September",
      translation: "сентябрь",
      income: income(9),
      expense: expense(9),
    },
    {
      id: 10,
      name: "October",
      translation: "октябрь",
      income: income(10),
      expense: expense(10),
    },
    {
      id: 11,
      name: "November",
      translation: "ноябрь",
      income: income(11),
      expense: expense(11),
    },
    {
      id: 12,
      name: "December",
      translation: "декабрь",
      income: income(12),
      expense: expense(12),
    },
  ];

  return (
    <div className="mb-10 overflow-hidden rounded-xl border-2">
      <table className="w-full border-separate border-spacing-0 divide-y divide-gray-300">
        <thead className="border-2">
          <tr>
            <th className="p-1 border-r-2">Номер</th>
            <th className="p-1 border-r-2">Месяц</th>
            <th className="p-1 border-r-2">Доход</th>
            <th className="p-1 border-r-2">Расход</th>
            <th className="p-1">Итог</th>
          </tr>
        </thead>
        <tbody className="border-2 ">
          {months.map((a) => {
            return (
              <tr key={a.id}>
                <td className="p-1 border-r-2 border-t-2">{a.id}</td>
                <td className="p-1 border-r-2 border-t-2">{a.translation}</td>
                <td className="p-1 border-r-2 border-t-2">{a.income}</td>
                <td className="p-1 border-r-2 border-t-2">{a.expense}</td>
                <td className="p-1 border-t-2">{a.income - a.expense}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

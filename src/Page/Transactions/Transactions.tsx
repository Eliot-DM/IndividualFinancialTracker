// import styles from "./Transactions.module.css";

import { useMemo, useState } from "react";
import { useStore } from "../../store/useStore";
import { UpdateForm } from "../../components/UpdateForm/UpdateForm";

export const Transactions = () => {
  const { user } = useStore();
  const deleteOperation = useStore((state) => state.deleteOperation);

  const [search, setSearch] = useState("");
  const [sortValue, setSortValue] = useState("filterTitleAsc");
  const [updateId, setUpdateId] = useState("");

  const sortFull = useMemo(() => {
    const filtered = user.operations.filter((a) =>
      (a.title ?? "").toLowerCase().includes(search.toLowerCase()),
    );

    switch (sortValue) {
      case "filterTitleAsc":
        return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
      case "filterTitleDesc":
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case "filterAmountAsc":
        return [...filtered].sort((a, b) => b.amount - a.amount);
      case "filterAmountDesc":
        return [...filtered].sort((a, b) => a.amount - b.amount);
      case "filterDateAsc":
        return [...filtered].sort((a, b) => b.date.localeCompare(a.date));
      case "filterDateDesc":
        return [...filtered].sort((a, b) => a.date.localeCompare(b.date));
      case "filterTypeAsc":
        return [...filtered].sort((a, b) => a.type.localeCompare(b.type));
      case "filterTypeDesc":
        return [...filtered].sort((a, b) => b.type.localeCompare(a.type));
      default:
        return filtered;
    }
  }, [user.operations, search, sortValue]);

  const idTransactions = user.operations.find((e) => e.id === updateId);
  const exitForm = () => {
    setUpdateId("");
  };

  return (
    <>
      <div className="mb-5">
        <h3 className="mb-4 text-xl font-medium">Поиск по названию</h3>
        <input
          className="w-70 py-2 px-4 border-2 rounded-xl text-lg"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите название"
        />
      </div>

      <h3 className="mb-4 text-xl font-medium">Сортировка</h3>

      <select
        className="mb-5 border-2 max-w-xsw-70 py-2 px-4 rounded-xl text-lg"
        name="sort"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option value="filterTitleAsc">Имя по убывания</option>
        <option value="filterTitleDesc">Имя по возрастания</option>
        <option value="filterAmountAsc">Цена по убывания</option>
        <option value="filterAmountDesc">Цена по возрастания</option>
        <option value="filterDateAsc">От новых к старым</option>
        <option value="filterDateDesc">От старых к новым</option>
        <option value="filterTypeAsc">От доходав к расходам</option>
        <option value="filterTypeDesc">От расходов к доходам</option>
      </select>

      <div>
        <div className="mb-5 overflow-hidden rounded-xl border-2">
          <table className="w-full border-separate border-spacing-0 divide-y divide-gray-300">
            <thead className="border-2">
              <tr>
                <th className="p-1 border-r-2">Название</th>
                <th className="p-1 border-r-2">Цена</th>
                <th className="p-1 border-r-2">Категория</th>
                <th className="p-1 border-r-2">Дата</th>
                <th className="p-1 border-r-2">Тип</th>
                <th className="p-1 border-r-2">Изменить</th>
                <th className="p-1">Удалить</th>
              </tr>
            </thead>
            <tbody className="">
              {sortFull.map((a) => {
                return (
                  <tr key={a.id}>
                    <td className="p-1 border-r-2 border-t-2">{a.title}</td>
                    <td className="p-1 border-r-2 border-t-2">{a.amount}</td>
                    <td className="p-1 border-r-2 border-t-2">{a.category}</td>
                    <td className="w-40 p-1 border-r-2 border-t-2">{a.date}</td>
                    <td className="w-40 p-1 border-r-2 border-t-2">{a.type}</td>
                    <td className="w-40 border-r-2 border-t-2">
                      <button
                        className="p-1 w-full focus:bg-blue-400 hover:bg-blue-300 active:bg-blue-600"
                        onClick={() => setUpdateId(a.id)}
                      >
                        Редоктировать
                      </button>
                    </td>
                    <td className="w-40 border-t-2">
                      <button
                        onClick={() => {
                          deleteOperation(a.id);
                        }}
                        className="p-1 w-full focus:bg-blue-400 hover:bg-blue-300 active:bg-blue-600"
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <h3 className="mb-4 text-xl font-medium">Изменить</h3>
            {updateId && idTransactions && (
              <UpdateForm
                key={idTransactions.id}
                id={idTransactions.id}
                onClick={exitForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

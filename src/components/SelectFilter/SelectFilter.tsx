// import styles from "./SelectFilter.module.css";

import type { Operation } from "../../types/types";

type P = {
  setSortFull: (arg0: Operation[]) => void;
  filteredTransactions: Operation[];
};

export const SelectFilter = ({ setSortFull, filteredTransactions }: P) => {
  const filterValue = (value: string) => {
    switch (value) {
      case "filterTitleAsc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) =>
            b.title.localeCompare(a.title),
          ),
        );
      case "filterTitleDesc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) =>
            a.title.localeCompare(b.title),
          ),
        );
      case "filterAmountAsc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) => b.amount - a.amount),
        );
      case "filterAmountDesc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) => a.amount - b.amount),
        );
      case "filterDateAsc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) =>
            b.date.localeCompare(a.date),
          ),
        );
      case "filterDateDesc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) =>
            a.date.localeCompare(b.date),
          ),
        );
      case "filterTypeAsc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) =>
            a.type.localeCompare(b.type),
          ),
        );
      case "filterTypeDesc":
        return setSortFull(
          [...filteredTransactions].sort((a, b) =>
            b.type.localeCompare(a.type),
          ),
        );
      default:
        break;
    }
  };

  return (
    <select
      className='max-w-xs'
      name='sort'
      onChange={(e) => {
        const value = e.target.value;
        filterValue(value);
      }}
    >
      <option value='filterTitleAsc'>Имя убывания</option>
      <option value='filterTitleDesc'>Имя возрастания</option>
      <option value='filterAmountAsc'>Цена убывания</option>
      <option value='filterAmountDesc'>Цена возрастания</option>
      <option value='filterDateAsc'>От новых к старым</option>
      <option value='filterDateDesc'>От старых к новым</option>
      <option value='filterTypeAsc'>От доходав к расходам</option>
      <option value='filterTypeDesc'>От расходов к доходам</option>
    </select>
  );
};

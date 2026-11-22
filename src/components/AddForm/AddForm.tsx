// import styles from "./AddForm.module.css";

import { useForm, useWatch } from "react-hook-form";
import { useStore } from "../../store/useStore";
import { categories } from "../../Data/Data";
import type { OperationType } from "../../types/types";

export const AddForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OperationType>();

  const addOperation = useStore((state) => state.addOperation);
  const onSubmit = (data: OperationType) => (
    addOperation({ id: crypto.randomUUID(), ...data }),
    reset()
  );

  const type = useWatch({
    control,
    name: "type",
  });

  const categoriesExpense = categories.filter(function (n) {
    if (n.type == "expense") {
      return n;
    }
  });

  const categoriesIncome = categories.filter(function (n) {
    if (n.type == "income") {
      return n;
    }
  });

  const categoriesList =
    type === "income" ? categoriesIncome : categoriesExpense;

  return (
    <div className="flex justify-between">
      <form
        className="p-1 flex flex-1 justify-between border-2 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Название</p>
          <input
            placeholder="Введите название"
            className="p-1 px-2 border-t-2"
            type="text"
            {...register("title", { required: "поле обязательно" })}
          />
          {errors.title && (
            <span className="absolute -bottom-10">поле обязательно</span>
          )}
        </label>

        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Сумма</p>
          <input
            placeholder="Введите сумму"
            min={0}
            className="p-1 px-2 border-t-2"
            type="number"
            {...register("amount", { required: "поле обязательно" })}
          />
          {errors.amount && (
            <span className="absolute -bottom-10">поле обязательно</span>
          )}
        </label>
        <label className="flex flex-col border-2 rounded-xl">
          <p className="p-1 px-2">Категория</p>
          <select className="p-1 px-2 border-t-2" {...register("category")}>
            {categoriesList.map((a) => {
              return (
                <option key={a.name} value={a.translation}>
                  {a.translation}
                </option>
              );
            })}
          </select>
        </label>
        <label className="flex flex-col border-2 rounded-xl">
          <p className="p-1 px-2">Тип</p>
          <select className="p-1 px-2 border-t-2" {...register("type")}>
            <option value="expense">Расход</option>
            <option value="income">Доход</option>
          </select>
        </label>
        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Дата</p>
          <input
            defaultValue={new Date().toISOString().split("T")[0]}
            className="p-1 px-2 border-t-2"
            type="date"
            {...register("date", { required: "поле обязательно" })}
          />
          {errors.date && (
            <span className="absolute -bottom-10">поле обязательно</span>
          )}
        </label>
        <button className="w-30 border-2 rounded-xl" type="submit">
          Создать
        </button>
      </form>
    </div>
  );
};

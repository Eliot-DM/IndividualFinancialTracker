// import styles from "./AddForm.module.css";

import { useForm, useWatch } from "react-hook-form";
import { useStore } from "../../store/useStore";
import { categories } from "../../Data/Data";
import type { Operation, OperationType } from "../../types/types";

type P = {
  id: string;
  onClick: () => void;
};

export const UpdateForm = ({ id, onClick }: P) => {
  const { user } = useStore();
  const updateOperation = useStore((state) => state.updateOperation);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Operation>();

  const operation = user?.operations.find((e) => e.id === id);

  const currentType = useWatch({ control, name: "type" });

  const onSubmit = (data: OperationType) => {
    updateOperation(id, data);
    onClick();
  };

  const categoriesList =
    categories.filter((c) => c.type === (currentType ?? operation?.type)) ?? [];

  return (
    <div className="flex justify-between">
      <form
        className="p-1 flex flex-1 justify-between border-2 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Название</p>
          <input
            className="p-1 px-2 border-t-2"
            type="text"
            {...register("title", { required: "поле обязательно" })}
            defaultValue={operation?.title || ""}
          />
          {errors.title && (
            <span className="absolute -bottom-10">поле обязательно</span>
          )}
        </label>
        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Сумма</p>
          <input
            className="p-1 px-2 border-t-2"
            type="number"
            {...register("amount", { required: "поле обязательно" })}
            defaultValue={operation?.amount || ""}
          />{" "}
          {errors.amount && (
            <span className="absolute -bottom-10">поле обязательно</span>
          )}
        </label>
        <label className="flex flex-col border-2 rounded-xl">
          <p className="p-1 px-2">Категория</p>
          <select
            {...register("category")}
            defaultValue={operation?.category || ""}
          >
            {categoriesList?.map((a) => {
              return (
                <option key={a.name} value={a.translation}>
                  {a.translation}
                </option>
              );
            })}
          </select>
        </label>
        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Тип</p>
          <select
            className="p-1 px-2 border-t-2"
            {...register("type")}
            defaultValue={operation?.type || ""}
          >
            <option value="income">Доход</option>
            <option value="expense">Расход</option>
          </select>
        </label>
        <label className="flex flex-col border-2 rounded-xl relative">
          <p className="p-1 px-2">Дата</p>
          <input
            className="p-1 px-2 border-t-2"
            type="date"
            {...register("date")}
            defaultValue={operation?.date || ""}
          />
        </label>
        <button className="w-30 border-2 rounded-xl" type="submit">
          Заменить
        </button>
      </form>
      <button
        className="w-30 border-2 rounded-xl"
        type="button"
        onClick={onClick}
      >
        Закрыть
      </button>
    </div>
  );
};

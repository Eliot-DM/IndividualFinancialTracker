import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Operation, OperationType, User } from "../types/types";

interface StoreState {
  user: User;

  addOperation: (operation: Operation) => void;
  deleteOperation: (id: string) => void;
  updateOperation: (id: string, data: OperationType) => void;

  balance: () => number;
  expense: () => number;
  income: () => number;

  sumCategories: (name: string) => number;

  toggleTheme: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: {
        theme: "white",
        balance: 0,
        income: 0,
        consumption: 0,
        operations: [],
      },
      addOperation: (operation) =>
        set((state) => ({
          user: {
            ...state.user,
            operations: [...state.user.operations, operation],
          },
        })),
      deleteOperation: (id) =>
        set((state) => ({
          user: {
            ...state.user,
            operations: state.user.operations.filter((e) => e.id !== id),
          },
        })),
      updateOperation: (id, data) =>
        set((state) => ({
          user: {
            ...state.user,

            operations: state.user.operations.map((a) =>
              a.id === id ? { ...a, ...data } : a,
            ),
          },
        })),
      balance: () => {
        return get().user.operations.reduce((sum, item) => {
          if (item.type == "expense") {
            return sum - Number(item.amount);
          }
          return sum + Number(item.amount);
        }, 0);
      },
      expense: () => {
        return get().user.operations.reduce((sum, item) => {
          if (item.type === "expense") {
            return sum + Number(item.amount);
          }
          return sum;
        }, 0);
      },
      income: () => {
        return get().user.operations.reduce((sum, item) => {
          if (item.type === "income") {
            return sum + Number(item.amount);
          }
          return sum;
        }, 0);
      },
      sumCategories: (name: string) => {
        return get().user.operations.reduce((sum, item) => {
          if (item.category === name) {
            return sum + Number(item.amount);
          }
          return sum;
        }, 0);
      },

      toggleTheme: () =>
        set((state) => ({
          user: {
            ...state.user,
            theme: state.user.theme === "white" ? "dark" : "white",
          },
        })),
    }),
    { name: "user-storage" },
  ),
);

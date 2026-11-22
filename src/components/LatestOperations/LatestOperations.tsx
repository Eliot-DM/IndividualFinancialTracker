// import styles from "./LatestOperations.module.css";

import { useStore } from "../../store/useStore";

type P = {
  quantity: number;
};

export const LatestOperations = ({ quantity }: P) => {
  const { user } = useStore();

  const latestOps = user.operations.slice(-quantity) ?? [];

  return (
    <ul className="flex justify-center gap-10">
      {latestOps.map((a) => {
        return (
          <li className="w-60 border-2 rounded-xl" key={a.id}>
            <p>{a.title}</p>
            {a.amount} <span>р</span>
          </li>
        );
      })}
    </ul>
  );
};

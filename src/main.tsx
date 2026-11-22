import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard } from "./Page/Dashboard/Dashboard.tsx";
import { Transactions } from "./Page/Transactions/Transactions.tsx";
import { AddTransaction } from "./Page/AddTransaction/AddTransaction.tsx";
import { Statistics } from "./Page/Statistics/Statistics.tsx";
import { Error } from "./Page/Error/Error.tsx";
import { Layout } from "./Page/Layout/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,

      children: [
        { path: "", element: <Dashboard /> },
        {
          path: "transactions",
          element: <Transactions />,
        },
        {
          path: "addTransaction",
          element: <AddTransaction />,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);

import { z } from "zod";

export const OperationSchema = z.object({
  id: z.string(),
  title: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(["income", "expense"]),
  date: z.string(),
});

export type Operation = z.infer<typeof OperationSchema>;

export const OperationTypeSchema = z.object({
  title: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(["income", "expense"]),
  date: z.string(),
});

export type OperationType = z.infer<typeof OperationTypeSchema>;

export const UserSchema = z.object({
  theme: z.enum(["white", "dark"]),
  balance: z.number(),
  income: z.number(),
  consumption: z.number(),
  operations: z.array(OperationSchema),
});

export type User = z.infer<typeof UserSchema>;

export const CategoriesSchema = z.object({
  id: z.number(),
  name: z.string(),
  translation: z.string(),
  type: z.enum(["income", "expense"]),
});

export type Categories = z.infer<typeof CategoriesSchema>;

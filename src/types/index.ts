import { boolean, number, object, string, InferOutput, array } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  price: number(),
});

export const ProductSchema = object({
  name: string(),
  price: number(),
  id: number(),
  available: boolean(),
});

export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>;

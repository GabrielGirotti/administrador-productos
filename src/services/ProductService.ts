import { DraftProductSchema } from "../types";
import { safeParse } from "valibot";

type addProductProps = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: addProductProps) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      const url = "http://localhost:4000/api/products";
      
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
  }
}
